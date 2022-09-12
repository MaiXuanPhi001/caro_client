import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Infomation = () => {
    const { userInfo } = useContext(UserContext)

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.avatar}
                    resizeMode='contain'
                    source={require('../../../assets/images/profile.png')}
                />
                <View>
                    <Text style={styles.username}>phixuan</Text>
                    <Text style={styles.email}>pxuan932@gmail.com</Text>
                    <View style={styles.indexContainer}>
                        <View style={styles.indexContent}>
                            <Text>Win</Text>
                            <Text style={styles.number}>234</Text>
                        </View>
                        <View style={styles.indexContent}>
                            <Text>Draw</Text>
                            <Text style={styles.number}>50</Text>
                        </View>
                        <View style={styles.indexContent}>
                            <Text>Lose</Text>
                            <Text style={styles.number}>22</Text>
                        </View>
                        <View style={styles.indexContent}>
                            <Text>Elo</Text>
                            <Text style={styles.number}>1000</Text>
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
        borderRadius: 5,
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
        alignItems: 'center'
    },
    container: {
        width: '100%',
        height: 200,
        backgroundColor: '#18A3F5',
        alignItems: 'center',
    },
})