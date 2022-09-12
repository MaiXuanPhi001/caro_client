import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Logout = () => {
    const { setUserInfo, setIsLoggedIn } = useContext(UserContext)

    const logOut = () => {
        setUserInfo({})
        setIsLoggedIn(false)
    }

    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={logOut}
        >
            <Image
                style={styles.image}
                source={require('../../../assets/images/logout.png')}
            />
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    )
}

export default Logout

const styles = StyleSheet.create({
    text: {
        color: '#D5D3D3',
        marginHorizontal: 10
    },
    image: {
        width: 20,
        height: 20
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 50,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#F2F2F2',
        padding: 10
    }
})