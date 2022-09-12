import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemHistory from './ItemHistory'

const data = [
    {
        id_competitor: {
            _id: '01',
            username: 'tuan934783',
            elo: 1900,
            email: 'pxuan9322gmail.com'
        },
        win: '06',
    },
    {
        id_competitor: {
            _id: '03',
            username: 'long32498732',
            elo: 1900,
            email: 'pxuan9322gmail.com'
        },
        win: '',
    },
    {
        id_competitor: {
            _id: '02',
            username: 'thanh434324832',
            elo: 1900,
            email: 'pxuan9322gmail.com'
        },
        win: '02',
    },
]

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHistory}>History</Text>
      {data.map(item => <ItemHistory key={item.id_competitor._id} item={item} />)}
    </View>
  )
}

export default History

const styles = StyleSheet.create({
    textHistory: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#091E42'
    },
    container: {
        width: '100%',
        marginTop: 80,
        paddingHorizontal: 15
    }
})