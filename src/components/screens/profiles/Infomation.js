import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

const Infomation = ({ userInfo }) => {
    const { username, email, win, draw, lose, elo, img } = userInfo

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.avatar}
                    resizeMode='contain'
                    source={{ uri: img }}
                />
                <View>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.email}>{email}</Text>
                    <View style={styles.indexContainer}>
                        <View style={styles.indexContent}>
                            <Text>Win</Text>
                            <Text style={styles.number}>{win}</Text>
                        </View>
                        <View style={styles.indexContent}>
                            <Text>Draw</Text>
                            <Text style={styles.number}>{draw}</Text>
                        </View>
                        <View style={styles.indexContent}>
                            <Text>Lose</Text>
                            <Text style={styles.number}>{lose}</Text>
                        </View>
                        <View style={styles.indexContent}>
                            <Text>Elo</Text>
                            <Text style={styles.number}>{elo}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Infomation

const styles = StyleSheet.create({
    number: {
        color: '#B8BDC2'
    },
    indexContent: {
        alignItems: 'center'
    },
    email: {
        color: '#B8BDC2',
        marginBottom: 10
    },
    username: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#091E42'
    },
    indexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10
    },
    content: {
        position: 'absolute',
        bottom: -55,
        width: '90%',
        height: 110,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    container: {
        width: '100%',
        height: 200,
        backgroundColor: '#18A3F5',
        alignItems: 'center',
    },
})