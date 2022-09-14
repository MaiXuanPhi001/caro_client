import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Infomation from './Infomation'
import History from './History'
import Logout from './Logout'
import { UserContext } from '../../contexts/UserContext'


const Profile = () => {
  const { userInfo } = useContext(UserContext)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Infomation userInfo={userInfo} />
      <History userInfo={userInfo} />
      <Logout />
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
})