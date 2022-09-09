import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const Hello = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('MainNavigation'), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

export default Hello

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})