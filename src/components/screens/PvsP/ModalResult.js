import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import lose from '../../../assets/lotties/lose.json'
import draw from '../../../assets/lotties/draw.json'
import win from '../../../assets/lotties/win.json'


const ModalResult = ({ isShow, setShow, navigation, result }) => {
    return (
        <Modal
            visible={isShow}
            transparent={true}
            onRequestClose={() => navigation.goBack()}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <LottieView
                        style={styles.lottieView}
                        resizeMode="contain"
                        autoSize
                        source={result === 0 ? win : result === 1 ? draw : lose}
                        autoPlay
                        loop
                    />
                    <Text style={styles.textResult}>
                        {result === 0 ? 'YOU WIN' : result === 1 ? 'DRAW' : 'YOU LOSE'}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalResult

const styles = StyleSheet.create({
    textButton: {
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
    textResult: {
        color: '#091E42',
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 20,
    },
    lottieView: {
        width: 80
    },
    content: {
        backgroundColor: 'white',
        width: '80%',
        padding: 10,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
})