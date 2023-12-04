import React, {useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Countnumber = () => {
    const [number, setNumber] = useState(0)
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
        <View style={styles.button}>
        <Button title="Tambah" onPress={() => setNumber(number + 1)} />
        </View>
        <View style={styles.button}> 
          <Button title="Reset" onPress={() => setNumber(0)} color="red" />
        </View>
    </View>
  )
}

export default Countnumber

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    margin: 10,
  },   
  text: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})