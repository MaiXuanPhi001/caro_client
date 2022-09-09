import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { UserContext } from '../../contexts/UserContext'
import socketIOClient from 'socket.io-client'
import { contants } from '../../utils/Contants'

const FindMatch = ({ navigation }) => {
    const { userInfo } = useContext(UserContext)
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = socketIOClient.connect(contants.HOSTING)

        socketRef.current.emit('client-find-match', userInfo._id)

        socketRef.current.on('server-find-match', data => {
            serverFindMatch(data)
        })

        socketRef.current.on('server-find-match-success', data => {
            socketRef.current.disconnect()
            navigation.replace('PvsP', { room: data, userInfo })
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, [])

    const serverFindMatch = (data) => {
        if (data !== userInfo._id) {
            const arr = [data, userInfo._id]
            socketRef.current.emit('client-find-match-success', arr)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Đang tìm trận</Text>
        </View>
    )
}

export default FindMatch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})