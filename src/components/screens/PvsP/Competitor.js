import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Competitor = ({ data, user, second, setSecond, timeOut }) => {
    const [time, setTime] = useState(false)

    useEffect(() => {
        let timer = setInterval(() => {
            if (second > -15) {
                if (user.player === 'playerX') {
                    if (data.turn === 1) {
                        setSecond(second - 1)
                    }
                } else {
                    if (data.turn === 2) {
                        setSecond(second - 1)
                    }
                }
            } else {
                if (!time) {
                    setTime(true)
                    timeOut(user._id)
                }
            }

        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={require('../../../assets/images/splash.png')}
                resizeMode='contain'
            />
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{user.username}</Text>
                    <Text>{user.player === 'playerX' ? 'X' : 'O'}</Text>
                </View>
                <View>
                    <Text>Elo: {user.elo}</Text>
                    <Text>{second > -1 ? second : '0'}</Text>
                </View>
            </View>
        </View>
    )
}

export default Competitor

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: 'aqua',
        padding: 10,
        flexDirection: 'row'
    }
})