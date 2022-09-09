import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserInfomation = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={require('../../../assets/splash.png')}
                resizeMode='contain'
            />
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text>{user.username}</Text>
                    <Text>{user.player === 'playerX' ? 'X' : 'O'}</Text>
                </View>
                <View>
                    <Text>Elo: {user.elo}</Text>
                    <Text>10:00</Text>
                </View>
            </View>
        </View>
    )
}

export default UserInfomation

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