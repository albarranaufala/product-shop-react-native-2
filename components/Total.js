import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

function Total(props) {
  return (
    <View style={styles.totalContainer}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total: ${props.total}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  totalContainer: {
    height: 64,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 16,
  },
})

export default Total