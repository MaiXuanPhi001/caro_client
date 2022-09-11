import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BannerUser from '../resuse/BannerUser'
import MyInput from '../resuse/MyInput'
import MyButton from '../resuse/MyButton'
import Newbie from '../resuse/Newbie'

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const register = async () => {
    setLoading(true)
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
        handle={register}
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