import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useState, useEffect, useRef } from 'react'
import socketIOClient from 'socket.io-client'
import { CONTANT } from '../../../components/utils/Contants'

const db = {
    type: '',
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
    user1: {
        cell: [],
        column: [],
        row: [],
        lineOne: [],
        lineTwo: [],
    },
    user2: {
        cell: [],
        column: [],
        row: [],
        lineOne: [],
        lineTwo: [],
    },
    cellArr: [],
    turn: 1
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'ATTACK': {
            const user = state.turn === 1 ? 'user1' : 'user2'
            return {
                ...state,
                [user]: {
                    cell: [...state[user].cell, action.item[0] + '' + action.item[1] + '' + action.item[2] + '' + action.item[3]],
                    column: [...state[user].column, action.item[0]],
                    row: [...state[user].row, action.item[1]],
                    lineOne: [...state[user].lineOne, action.item[2]],
                    lineTwo: [...state[user].lineTwo, action.item[3]]
                },
                cellArr: action.item,
                turn: state.turn === 1 ? 2 : 1
            }
        }

        case 'RESET':
            return {
                ...state,
                type: '',
                user1: {
                    cell: [],
                    column: [],
                    row: [],
                    lineOne: [],
                    lineTwo: [],
                },
                user2: {
                    cell: [],
                    column: [],
                    row: [],
                    lineOne: [],
                    lineTwo: [],
                },
                turn: 1
            }
    }
}

const CaroTable = () => {
    const [data, dataDispatch] = useReducer(dataReducer, db)
    const [win, setWin] = useState(false)
    const socketRef = useRef()
    const column = 9
    const row = 9
    let indexData = -1

    useEffect(() => {
        socketRef.current = socketIOClient.connect(CONTANT.hosting)

        socketRef.current.on('attack', data => {
            dataDispatch({ type: 'ATTACK', item: data })
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        const userField = data.turn === 1 ? 'user2' : 'user1'
        if (data.user1.cell.length > 4) {
            if (checkOne(data[userField].column, data[userField].row, 1, userField)) return
            if (checkOne(data[userField].row, data[userField].column, 1, userField)) return
            if (checkOne(data[userField].lineOne, data[userField].lineTwo, 2, userField)) return
            if (checkOne(data[userField].lineTwo, data[userField].lineOne, 2, userField)) return
        }
        console.log('hello')
        // socketRef.current.emit('attack', data[userField].cell[data[userField].cell.length - 1])
        // socketRef.current.emit('attack', data.cellArr)
        socketRef.current.emit('attack', data.cellArr)
        
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
                        setWin(true)
                        return true
                    }
                }
            }
            return false
        }
    }

    const compareCell = (arrItem) => {
        const strItem = arrItem[0] + '' + arrItem[1] + '' + arrItem[2] + '' + arrItem[3]
        if (data.user1.cell.includes(strItem)) return 1
        if (data.user2.cell.includes(strItem)) return 2
        return 0
    }

    const resetGame = () => {
        dataDispatch({ type: 'RESET' })
        setWin(false)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView horizontal contentContainerStyle={{ flexDirection: 'column' }}>
                {data.dataTable.map((item, index) => {
                    if (index > column) return
                    return (
                        <View key={index} style={styles.tableContent}>
                            {data.dataTable.map((item, index) => {
                                if (index > row) return
                                indexData++
                                let indexItem = indexData
                                return (
                                    <TouchableOpacity
                                        onPress={() => dataDispatch({ type: 'ATTACK', item: data.dataTable[indexItem] })}
                                        key={index}
                                        style={styles.btnItem}
                                    >
                                        <Text style={[
                                            styles.textItem,
                                            { color: compareCell(data.dataTable[indexItem]) === 0 ? 'white' : compareCell(data.dataTable[indexItem]) === 1 ? 'blue' : 'red' }
                                        ]}>
                                            {compareCell(data.dataTable[indexItem]) === 0 ? '' : compareCell(data.dataTable[indexItem]) === 1 ? 'x' : 'o'}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    )
                })}
                <View>
                    <Text>USER 1</Text>
                    <Text>cell: {JSON.stringify(data.user1.cell)}</Text>
                    <Text>column: {JSON.stringify(data.user1.column)}</Text>
                    <Text>row: {JSON.stringify(data.user1.row)}</Text>
                    <Text>lineOne: {JSON.stringify(data.user1.lineOne)}</Text>
                    <Text>lineTwo: {JSON.stringify(data.user1.lineTwo)}</Text>
                    <Text>{win && 'win'}</Text>
                </View>
                <TouchableOpacity onPress={resetGame}>
                    <Text>Reset</Text>
                </TouchableOpacity>
                <View>
                    <Text>USER 2</Text>
                    <Text>cell: {JSON.stringify(data.user2.cell)}</Text>
                    <Text>column: {JSON.stringify(data.user2.column)}</Text>
                    <Text>row: {JSON.stringify(data.user2.row)}</Text>
                    <Text>lineOne: {JSON.stringify(data.user2.lineOne)}</Text>
                    <Text>lineTwo: {JSON.stringify(data.user2.lineTwo)}</Text>
                    <Text>{win && 'win'}</Text>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default CaroTable

const styles = StyleSheet.create({
    tableContent: {
        flexDirection: 'row'
    },
    textItem: {
        fontSize: 20,
    },
    btnItem: {
        width: 30,
        height: 30,
        margin: 1,
        borderWidth: 1,
        borderColor: '#B8BDC2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexGrow: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20
    }
})