import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const ItemHistory = ({ item, id_user }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: item.user1._id === id_user ? item.user2.img : item.user1.img }}
            />
            <View style={styles.content}>
                <View>
                    <Text style={styles.username}>{item.user1._id === id_user ? item.user2.username : item.user1.username}</Text>
                    <Text>{item.user1._id === id_user ? item.user2.email : item.user1.email}</Text>
                </View>
                <View>
                    <Text style={styles.elo}>elo: {item.user1._id === id_user ? item.user2.elo : item.user1.elo}</Text>
                    <Text
                        style={{ color: item.win === null ? 'green' : item.win === id_user ? '#18A3F5' : 'red' }}
                    >{item.win === null ? 'Draw' : item.win === id_user ? 'Win' : 'Lose'}</Text>
                </View>
            </View>
        </View>
    )
}

export default ItemHistory

const styles = StyleSheet.create({
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    content: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#B8BDC2',
        alignItems: 'center'
    }
})