import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Competitor = ({ data, user, second, setSecond, timeOut, runTime }) => {
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
                if (!runTime) {
                    timeOut(user)
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
                source={{ uri: user.img }}
                resizeMode='contain'
            />
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.username}>{user.username}</Text>
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
                    <Text style={styles.elo}>Elo: {user.elo}</Text>
                    <Text
                        style={[
                            styles.second,
                            {
                                backgroundColor: (user.player === 'playerX' && data.turn === 1) ? 'red' :
                                    (user.player === 'playerO' && data.turn === 2) ? 'red' : '#20FF20'
                            }
                        ]}
                    >
                        00:{second > -1 ? second : '00'}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Competitor

const styles = StyleSheet.create({
    second: {
        width: 70,
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