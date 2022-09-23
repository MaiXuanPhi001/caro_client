import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BannerUser from '../resuse/BannerUser'
import MyInput from '../resuse/MyInput'
import MyButton from '../resuse/MyButton'
import { sendEmail } from '../../Services/UserService'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')


    const handleSendEmail = async () => {
        setLoading(true)
        const res = await sendEmail(email)
        if (!res.error) {
            setLoading(false)
            navigation.replace('Otp', { email })
        } else {
            alert('Has an error, please try again!')
            setLoading(false)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <BannerUser text={'Forgot password'} />
            <View style={styles.form}>
                <MyInput
                    img={require('../../../assets/images/email.png')}
                    hint={'Email'}
                    text={email}
                    setText={setEmail}
                />
            </View>
            <MyButton
                handle={handleSendEmail}
                text={'Continue'}
                loading={loading}
            />
        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 20
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})