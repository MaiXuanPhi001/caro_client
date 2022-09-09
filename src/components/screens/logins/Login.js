import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

const Login = () => {
  const [email, setEmail] = useState('pxuan932@gmail.com')
  const [password, setPassword] = useState('123456')
  const { onLogin, setIsLoggedIn } = useContext(UserContext)
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    const res = await onLogin(email, password)
    res === 1 && setIsLoggedIn(true)
    res === 2 && alert('Mat khau sai')
    res === -1 && alert('Loi mang')
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='password'
        secureTextEntry
      />

      <Button onPress={login} title='Login' />

      {loading ?? <Text>Vui long cho</Text>}
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    margin: 10,
    width: '80%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})