import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { UserContext } from '../../contexts/UserContext'
import socketIOClient from 'socket.io-client'
import { contants } from '../../utils/Contants'
import LottieView from 'lottie-react-native';
import tictac from '../../../assets/lotties/tictactioe.json'

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
        <ScrollView contentContainerStyle={styles.container}>
            <LottieView
                style={styles.lottieView}
                resizeMode="contain"
                autoSize
                source={tictac}
                autoPlay
                loop
            />
            <Text style={styles.text}>Đang tim trận...</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.button}
            >
                <Text style={styles.textButton}>Hủy</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default FindMatch

const styles = StyleSheet.create({
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        width: '50%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#50C2C9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#091E42',
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 20,
    },
    lottieView: {
        width: 200
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})