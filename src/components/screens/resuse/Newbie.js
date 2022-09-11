import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Newbie = ({ textOne, textTwo, handle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textOne}>{textOne}</Text>
            <TouchableOpacity onPress={handle}>
                <Text style={styles.textTwo}>{textTwo}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Newbie

const styles = StyleSheet.create({
    textTwo: {
        color: '#50C2C9',
        fontWeight: 'bold'
    },
    textOne: {
        color: '#9AA3B2'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        padding: 20
    }
})