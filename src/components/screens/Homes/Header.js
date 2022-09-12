import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Header = () => {
    const { userInfo } = useContext(UserContext)

    return (
        <View style={styles.container}>
            <View style={styles.infomation}>
                <Image
                    style={styles.avatar}
                    resizeMode='contain'
                    source={{ uri: userInfo.img }}
                />
                <Text>{userInfo.username}</Text>
            </View>

            <View style={styles.infomation}>
                <Text>{userInfo.elo}</Text>
                <Image
                    style={styles.cup}
                    resizeMode='contain'
                    source={require('../../../assets/images/cup.png')}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    cup: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10
    },
    infomation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})