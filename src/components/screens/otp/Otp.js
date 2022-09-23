import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import BannerUser from '../resuse/BannerUser'
import MyButton from '../resuse/MyButton'
import { veryCodeOtp } from '../../Services/UserService'

const Otp = ({ navigation, route }) => {
    const { email } = route.params

    const [one, setOne] = useState('')
    const [two, setTwo] = useState('')
    const [three, setThree] = useState('')
    const [four, setFour] = useState('')
    const [loading, setLoading] = useState('')

    const handleVeryCodeOtp = async () => {
        setLoading(true)
        const codeOTP = one + two + three + four

        const res = await veryCodeOtp(email, codeOTP.toString())
        if (!res.error) {
            if (res.result_code === 1) {
                setLoading(false)
                return navigation.replace('ChangePassword', { email })
            } else {
                alert('Code OTP incorrect')
            }
        } else {
            alert('Has an error, please try again!')
        }
        setLoading(false)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <BannerUser text={'Otp'} />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={one}
                    onChangeText={setOne}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={two}
                    onChangeText={setTwo}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={three}
                    onChangeText={setThree}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={1}
                    value={four}
                    onChangeText={setFour}
                />
            </View>
            <MyButton
                handle={handleVeryCodeOtp}
                text={'Verification'}
                loading={loading}
            />
        </ScrollView>
    )
}

export default Otp

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 5,
        margin: 10,
        textAlign: 'center'
    },
    form: {
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})