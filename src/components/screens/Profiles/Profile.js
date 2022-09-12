import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Infomation from './Infomation'
import History from './History'
import Logout from './Logout'

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Infomation />
      <History />
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