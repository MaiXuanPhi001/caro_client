import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BannerUser = ({ text }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode='cover' style={styles.banner} source={require('../../../assets/images/carobg.jpg')} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default BannerUser

const styles = StyleSheet.create({
    text: {
        color: '#091E42',
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 25,
    },
    banner: {
        width: '100%',
    },
    container: {
        width: '100%'
    }
})