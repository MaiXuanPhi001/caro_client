import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const MyInput = ({ img, hint, text, setText, password }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                resizeMode='contain'
                source={img}
            />
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder={hint}
                secureTextEntry={password || false}
            />
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    icon: {
        width: '10%',
        height: 30,
        marginRight: 15
    },
    input: {        
        width: '85%',
        borderBottomWidth: 1,
        borderBottomColor: '#B8BDC2'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10
    }
})