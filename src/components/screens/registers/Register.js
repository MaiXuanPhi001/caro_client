import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { register } from '../../Services/UserService'
import BannerUser from '../resuse/BannerUser'
import MyInput from '../resuse/MyInput'
import MyButton from '../resuse/MyButton'
import Newbie from '../resuse/Newbie'

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('LongPham')
  const [email, setEmail] = useState('longpham@gmail.com')
  const [password, setPassword] = useState('123456')
  const [confirmPassword, setConfirmPassword] = useState('123456')
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    try {
      setLoading(true)
      if (!checkForm()) return setLoading(false)
      const res = await register({ username, email, password })
      if (!res.error) {
        if (res.result_code === 0) {
          alert('Email already use')
        } else {
          alert('Register success')
          clearForm()
        }
      } else {
        alert('Has an error, please try again')
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const clearForm = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const checkForm = () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Form is empty')
      return false
    }
    if (password.trim() !== confirmPassword.trim()) {
      alert('Confirm password is incorrect')
      return false
    }
    return true
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BannerUser text={'Sign up'} />
      <View style={styles.form}>
        <MyInput
          img={require('../../../assets/images/user.png')}
          hint={'Username'}
          text={username}
          setText={setUsername}
        />
        <MyInput
          img={require('../../../assets/images/email.png')}
          hint={'Email'}
          text={email}
          setText={setEmail}
        />
        <MyInput
          img={require('../../../assets/images/password.png')}
          hint={'Password'}
          text={password}
          setText={setPassword}
          password
        />
        <MyInput
          img={require('../../../assets/images/password.png')}
          hint={'Confirm password'}
          text={confirmPassword}
          setText={setConfirmPassword}
          password
        />
      </View>
      <MyButton
        handle={handleRegister}
        text={'Register'}
        loading={loading}
      />
      <Newbie
        textOne={'Joined us before? '}
        textTwo={' Login'}
        handle={() => navigation.navigate('Login')}
      />
    </ScrollView>
  )
}

export default Register

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