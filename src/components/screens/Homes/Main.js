import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Main = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                resizeMode='contain'
                source={require('../../../assets/images/carohello.png')}
            />
            <Text style={styles.text}>Caro Online</Text>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
            >
                <Text style={styles.textButton}>Tìm trận đấu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    textButton: {
        color: '#091E42',
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    button: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F1F5F6',
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
    img: {
        width: 80,
        height: 80
    },
    container: {
        alignItems: 'center',
        marginTop: 70
    },
})