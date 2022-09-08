import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'

const host = 'http://192.168.1.12:3000'

const Socket = () => {
    const [lastPong, setLastPong] = useState(null);
    const [color, setColor] = useState('yellow')
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = socketIOClient.connect(host)

        socketRef.current.on('send-color', data => {
            setColor(data)
        })

        return () => {
            socketRef.current.disconnect();
          };
    }, []);

    const sendPing = () => {
        socketRef.current.emit('set-color', color)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color }}>
            <TextInput
                style={{ borderRadius: 1, padding: 20, width: '80%' }}
                value={color}
                onChangeText={setColor}
            />
            <Button onPress={sendPing} title={'sendPing'}>Send ping</Button>
        </View>
    );
}

export default Socket

const styles = StyleSheet.create({})