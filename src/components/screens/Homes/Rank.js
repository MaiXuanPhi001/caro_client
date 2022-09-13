import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAll } from '../../Services/UserService'
import ItemRank from './ItemRank'

const Rank = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getUserAPI()
  }, [])

  const getUserAPI = async () => {
    const res = await getAll()
    res.data.sort((a, b) => b.elo - a.elo)
    !res.error && setData(res.data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textRank}>Ranked</Text>
      <View>
        {data.map((item, index) => {
          return (
            <ItemRank
              key={item._id}
              item={item}
              index={index}
            />
          )
        })}
      </View>
    </View>
  )
}

export default Rank

const styles = StyleSheet.create({
  textRank: {
    fontWeight: 'bold',
    color: '#091E42',
    fontSize: 17
  },
  container: {
    width: '100%'
  }
})