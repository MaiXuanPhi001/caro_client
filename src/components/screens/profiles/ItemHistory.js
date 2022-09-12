import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemHistory = ({ item }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/profile.png')}
            />
            <View style={styles.content}>
                <View>
                    <Text style={styles.username}>{item.id_competitor.username}</Text>
                    <Text>{item.id_competitor.email}</Text>
                </View>
                <View>
                    <Text style={styles.elo}>elo: {item.id_competitor.elo}</Text>
                    <Text
                        style={{ color: item.win === '' ? 'green' : item.win === item.id_competitor._id ? 'red' : '#18A3F5' }}
                    >{item.win === '' ? 'Draw' : item.win === item.id_competitor._id ? 'Lose' : 'Win'}</Text>
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