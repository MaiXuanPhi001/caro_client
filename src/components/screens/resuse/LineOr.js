import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LineOr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.line}></View>
    </View>
  )
}

export default LineOr

const styles = StyleSheet.create({
    text: {
        color: '#747474',
        marginHorizontal: 10
    },  
    line: {
        alignSelf: 'center',
        width: '40%',
        height: 1,
        backgroundColor: '#B8BDC2'
    },  
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginBottom: 15
    }
})