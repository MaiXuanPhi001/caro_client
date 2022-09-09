import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { getById } from '../../Services/UserService'
import UserInfomation from './UserInfomation'
import Table from './Table'
import socketIOClient from 'socket.io-client'
import { contants } from '../../utils/Contants'

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ATTACK':
      return {
        ...state,
        [action.player]: {
          cell: [...state[action.player].cell, action.item[0] + '' + action.item[1] + '' + action.item[2] + '' + action.item[3]],
          column: [...state[action.player].column, action.item[0]],
          row: [...state[action.player].row, action.item[1]],
          lineOne: [...state[action.player].lineOne, action.item[2]],
          lineTwo: [...state[action.player].lineTwo, action.item[3]]
        },
        cellArr: action.item,
        turn: state.turn === 1 ? 2 : 1,
        render: false
      }

    case 'GET_DATA_ATTACK':
      return {
        ...action.data,
        render: true
      }

    default: state
  }
}

const PvsP = ({ route }) => {
  const { room, userInfo } = route.params
  const [competitor, setCompetitor] = useState({})
  const [me, setMe] = useState(userInfo)
  const socketRef = useRef()

  const [data, dataDispatch] = useReducer(dataReducer, initData)

  useEffect(() => {
    socketRef.current = socketIOClient.connect(contants.HOSTING)

    getByIdAPI()
    return () => {
      socketRef.current.disconnect();
    };
  }, [])

  useEffect(() => {
    socketRef.current = socketIOClient.connect(contants.HOSTING)
    socketRef.current.on('server-attack', data => {
      getDataAttack(data)
    })

    if (data.playerX.cell.length > 4 && !data.render) {
      if (checkOne(data[me.player].column, data[me.player].row, 1, me.player)) return
      if (checkOne(data[me.player].row, data[me.player].column, 1, me.player)) return
      if (checkOne(data[me.player].lineOne, data[me.player].lineTwo, 2, me.player)) return
      if (checkOne(data[me.player].lineTwo, data[me.player].lineOne, 2, me.player)) return
    }
    if (!data.render && data.playerX.cell.length > 0) socketRef.current.emit('client-attack', { ...data, room, id: me._id })
    return () => {
      socketRef.current.disconnect();
    };
  }, [data])

  const checkOne = (arrOne, arrTwo, sub, field) => {
    let arrTemp = []
    for (let i = 0; i < data[field].cell.length; i++) {
      arrTemp = []
      arrTemp = [...arrTemp, arrTwo[i]]
      for (let j = i + 1; j < data[field].cell.length; j++) {
        if (arrOne[j] === arrOne[i]) {
          arrTemp = [...arrTemp, arrTwo[j]]
        }
      }
      if (checkTwo(arrTemp, sub)) return true
    }
    return false
  }

  const checkTwo = (arrTemp, sub) => {
    if (arrTemp.length > 4) {
      arrTemp.sort((a, b) => a - b)
      for (let i = 0; i < arrTemp.length; i++) {
        let win = 0
        let compareNumber = arrTemp[i]
        for (let j = i + 1; j < arrTemp.length; j++) {
          if (compareNumber !== (arrTemp[j] - sub)) {
            break
          }
          compareNumber += sub
          win++
          if (win > 3) {
            console.log('win')
            return true
          }
        }
      }
      return false
    }
  }

  const getByIdAPI = async () => {
    const id_competitor = room.filter(item => item !== userInfo._id)
    const data = await getById(id_competitor)
    const player = room.findIndex(item => item === userInfo._id)
    if (player === 0) {
      setCompetitor({ ...data, player: 'playerX' })
      setMe({ ...userInfo, player: 'playerO' })
      return
    }
    setCompetitor({ ...data, player: 'playerO' })
    setMe({ ...userInfo, player: 'playerX' })
  }

  const getDataAttack = (data) => {
    if (data.room.join() === room.join() && data.id !== me._id) {
      dataDispatch({ type: 'GET_DATA_ATTACK', data })
    }
  }

  return (
    <ScrollView style={styles.container}>
      <UserInfomation
        user={competitor}
      />
      <Table
        data={data}
        dataDispatch={dataDispatch}
        me={me}
      />
      <UserInfomation
        user={me}
      />
      <Text>X</Text>
      <Text>cell: {JSON.stringify(data.playerX.cell)}</Text>
      <Text>column: {JSON.stringify(data.playerX.column)}</Text>
      <Text>row: {JSON.stringify(data.playerX.row)}</Text>
      <Text>lineOne: {JSON.stringify(data.playerX.lineOne)}</Text>
      <Text>lineTwo: {JSON.stringify(data.playerX.lineTwo)}</Text>
      <Text>O</Text>
      <Text>cell: {JSON.stringify(data.playerO.cell)}</Text>
      <Text>column: {JSON.stringify(data.playerO.column)}</Text>
      <Text>row: {JSON.stringify(data.playerO.row)}</Text>
      <Text>lineOne: {JSON.stringify(data.playerO.lineOne)}</Text>
      <Text>lineTwo: {JSON.stringify(data.playerO.lineTwo)}</Text>
    </ScrollView>
  )
}

export default PvsP

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
  }
})

const initData = {
  type: '',
  dataTable: [
    [0, 0, 0, 9], [1, 0, 1, 8], [2, 0, 2, 7], [3, 0, 3, 6], [4, 0, 4, 5], [5, 0, 5, 4], [6, 0, 6, 3], [7, 0, 7, 2], [8, 0, 8, 1], [9, 0, 9, 0],
    [0, 1, 1, 10], [1, 1, 2, 9], [2, 1, 3, 8], [3, 1, 4, 7], [4, 1, 5, 6], [5, 1, 6, 5], [6, 1, 7, 4], [7, 1, 8, 3], [8, 1, 9, 2], [9, 1, 10, 1],
    [0, 2, 2, 11], [1, 2, 3, 10], [2, 2, 4, 9], [3, 2, 5, 8], [4, 2, 6, 7], [5, 2, 7, 6], [6, 2, 8, 5], [7, 2, 9, 4], [8, 2, 10, 3], [9, 2, 11, 2],
    [0, 3, 3, 12], [1, 3, 4, 11], [2, 3, 5, 10], [3, 3, 6, 9], [4, 3, 7, 8], [5, 3, 8, 7], [6, 3, 9, 6], [7, 3, 10, 5], [8, 3, 11, 4], [9, 3, 12, 3],
    [0, 4, 4, 13], [1, 4, 5, 12], [2, 4, 6, 11], [3, 4, 7, 10], [4, 4, 8, 9], [5, 4, 9, 8], [6, 4, 10, 7], [7, 4, 11, 6], [8, 4, 12, 5], [9, 4, 13, 4],
    [0, 5, 5, 14], [1, 5, 6, 13], [2, 5, 7, 12], [3, 5, 8, 11], [4, 5, 9, 10], [5, 5, 10, 9], [6, 5, 11, 8], [7, 5, 12, 7], [8, 5, 13, 6], [9, 5, 14, 5],
    [0, 6, 6, 15], [1, 6, 7, 14], [2, 6, 8, 13], [3, 6, 9, 12], [4, 6, 10, 11], [5, 6, 11, 10], [6, 6, 12, 9], [7, 6, 13, 8], [8, 6, 14, 7], [9, 6, 15, 6],
    [0, 7, 7, 16], [1, 7, 8, 15], [2, 7, 9, 14], [3, 7, 10, 13], [4, 7, 11, 12], [5, 7, 12, 11], [6, 7, 13, 10], [7, 7, 14, 9], [8, 7, 15, 8], [9, 7, 16, 7],
    [0, 8, 8, 17], [1, 8, 9, 16], [2, 8, 10, 15], [3, 8, 11, 14], [4, 8, 12, 13], [5, 8, 13, 12], [6, 8, 14, 11], [7, 8, 15, 10], [8, 8, 16, 9], [9, 8, 17, 8],
    [0, 9, 9, 18], [1, 9, 10, 17], [2, 9, 11, 16], [3, 9, 12, 15], [4, 9, 13, 14], [5, 9, 14, 13], [6, 9, 15, 12], [7, 9, 16, 11], [8, 9, 17, 10], [9, 9, 18, 9]
  ],
  playerX: {
    cell: [],
    column: [],
    row: [],
    lineOne: [],
    lineTwo: [],
  },
  playerO: {
    cell: [],
    column: [],
    row: [],
    lineOne: [],
    lineTwo: [],
  },
  cellArr: [],
  turn: 1,
  render: false
}