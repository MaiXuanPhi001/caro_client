import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as Facebook from 'expo-facebook'
import { UserContext } from '../../contexts/UserContext'
import LottieView from 'lottie-react-native';
import loadingLotite from '../../../assets/lotties/loading.json'

const LoginFacebook = () => {
    const { onLoginFacebook } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const logInFacebook = async () => {
        try {
            setLoading(true)
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
                const res = await onLoginFacebook({ uid: info.id, username: info.name, email: info.email, img: info.picture.data.url })
                if (!res) {
                    alert('Has an error, please try again!')
                }
            } else {
                // type === 'cancel'
            }
            setLoading(false)
        } catch ({ message }) {
            setLoading(false)
            alert(`Has an error, please try again`);
        }
    }

    useEffect(() => {
        return () => setLoading(false)
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={logInFacebook}
                disabled={loading}
                style={styles.button}
            >
                {loading ?
                    <LottieView
                        style={styles.lottieView}
                        resizeMode="contain"
                        autoSize
                        source={loadingLotite}
                        autoPlay
                        loop
                    /> :
                    <Image
                        style={styles.icon}
                        resizeMode='contain'
                        source={require('../../../assets/images/facebook.png')}
                    />
                }
                <Text style={styles.text}>Login with Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginFacebook

const styles = StyleSheet.create({
    lottieView: {
        width: 80,
    },
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