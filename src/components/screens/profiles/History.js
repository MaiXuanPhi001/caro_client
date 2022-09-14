import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemHistory from './ItemHistory'
import { getById } from '../../Services/MatchService'

const History = ({ userInfo }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMatchAPI()
    }, [])

    const getMatchAPI = async () => {
        const res = await getById(userInfo._id)
        !res.error && setData(res.data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textHistory}>History</Text>
            {data.map(item => <ItemHistory key={item._id} item={item} id_user={userInfo._id} />)}
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
        paddingHorizontal: 15,
        marginBottom: 50,
    }
})