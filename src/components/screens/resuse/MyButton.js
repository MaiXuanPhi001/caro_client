import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import loadingLotite from '../../../assets/lotties/loading.json'

const MyButton = ({ handle, text, loading }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={loading ? true : false}
                style={styles.button}
                onPress={handle}
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
                    <Text style={styles.text}>{text}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({
    lottieView: {
        width: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#50C2C9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 15
    }
})