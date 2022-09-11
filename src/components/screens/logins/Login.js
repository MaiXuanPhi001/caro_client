import { Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import BannerUser from '../resuse/BannerUser'
import MyInput from '../resuse/MyInput'
import MyButton from '../resuse/MyButton'
import LineOr from '../resuse/LineOr'
import LoginFacebook from './LoginFacebook'
import Newbie from '../resuse/Newbie'


// https://dribbble.com/shots/16316303-Login-and-Sign-up-Screens/attachments/8205759?mode=media

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin, setIsLoggedIn } = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  const login = async () => {
    try {
      setLoading(true)
      const res = await onLogin(email, password)
      res === 1 && setIsLoggedIn(true)
      res === 2 && alert('Mat khau sai')
      res === -1 && alert('Loi mang')
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BannerUser text={'Login'} />
      <View style={styles.form}>
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
      </View>
      <MyButton
        handle={login}
        text={'Login'}
        loading={loading}
      />
      <LineOr />
      <LoginFacebook />
      <Newbie
        textOne={'New to Logistic? '}
        textTwo={' Register'}
        handle={() => navigation.navigate('Register')}
      />
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
  },
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    margin: 10,
    width: '80%'
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
})