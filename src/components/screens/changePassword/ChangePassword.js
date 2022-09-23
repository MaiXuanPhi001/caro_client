import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BannerUser from '../resuse/BannerUser'
import MyInput from '../resuse/MyInput'
import MyButton from '../resuse/MyButton'
import { changePassword } from '../../Services/UserService'

const ChangePassword = ({ route, navigation }) => {
    const { email } = route.params

    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')

    const handleChangePassword = async () => {
        if (password.trim() === '') return alert('Password is empty')
        setLoading(true)
        const res = await changePassword(email, password)
        if (!res.error) {
            setLoading(false)
            return navigation.goBack()
        }
        alert('Has an error, please try again!')
        setLoading(false)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <BannerUser text={'New password'} />
            <View style={styles.form}>
                <MyInput
                    img={require('../../../assets/images/password.png')}
                    hint={'New password'}
                    text={password}
                    setText={setPassword}
                />
            </View>
            <MyButton
                handle={handleChangePassword}
                text={'Change Password'}
                loading={loading}
            />
        </ScrollView>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 20,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})