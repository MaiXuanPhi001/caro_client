import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Facebook from 'expo-facebook'

const LoginFacebook = () => {

    const logInFacebook = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '401215678787048',
            });
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile', 'email'],
                });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`);
                const info = await response.json()
                console.log('info: ', info)
                // alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            console.log(`Facebook Login Error: ${message}`)
            alert(`Facebook Login Error: ${message}`);
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={logInFacebook}
                style={styles.button}
            >
                <Image
                    style={styles.icon}
                    resizeMode='contain'
                    source={require('../../../assets/images/facebook.png')}
                />
                <Text style={styles.text}>Login with Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginFacebook

const styles = StyleSheet.create({
    text: {
        color: '#091E42',
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    icon: {
        width: 25,
        height: 25,
    },
    button: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F1F5F6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        paddingHorizontal: 20
    }
})