import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Routes = () => {
  return (
    <View style={styles.container}>
      <Text>Routes page</Text>
    </View>
  )
}

export default Routes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});