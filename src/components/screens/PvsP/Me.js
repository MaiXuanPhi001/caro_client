import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Me = ({ data, user, second, setSecond, timeOut }) => {
    const [time, setTime] = useState(false)

    useEffect(() => {
        let timer = setInterval(() => {
            if (second > 0) {
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
                source={require('../../../assets/images/profile.png')}
                resizeMode='contain'
            />
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.username}>{user.username}phixuan</Text>
                    <Text
                        style={[
                            styles.player,
                            { color: user.player === 'playerX' ? 'black' : 'red' }
                        ]}
                    >
                        {user.player === 'playerX' ? 'X' : 'O'}
                    </Text>
                </View>
                <View>
                    <Text style={styles.elo}>Elo: {user.elo}1220</Text>
                    <Text
                        style={[
                            styles.second,
                            {
                                backgroundColor: (user.player === 'playerX' && data.turn === 1) ? 'yellow' :
                                    (user.player === 'playerO' && data.turn === 2) ? 'yellow' : '#20FF20'
                                }
                        ]}
                    >
                        00:{second}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Me

const styles = StyleSheet.create({
    second: {
        fontWeight: 'bold',
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
    },
    player: {
        fontWeight: 'bold',
        marginLeft: 10
    },
    elo: {
        color: 'white'
    },
    username: {
        color: 'white',
        fontWeight: 'bold'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 15
    },
    container: {
        height: '15%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#18A3F5'
    }
})