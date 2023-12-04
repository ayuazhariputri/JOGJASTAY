import React, {useState} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DatePicker from 'react-native-date-picker'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Createdata = () => {
    const [nama, setNama] = useState('');
    const [chekin, setChekin] = useState('');
    const [chekout, setChekout] = useState('');
    const [jumlahkamar, setJumlahkamar] = useState('');

    
    const submit = () => {
        const data = {
          nama: nama,
          chekin: chekin,
          chekout: chekout,
          jumlahkamar: jumlahkamar,
          
        };
        fetch('http://10.0.2.2:3000/projek', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            alert('Data tersimpan');
            setNama('');
            setNim('');
            setKelas('');
            setJeniskelamin('');
            setColor('');
            setIcon('');
          })
        }  
    return (
        <SafeAreaView >
            <View >
                <Text style={styles.title}>Form Pesanan</Text>
                <ScrollView style={styles.form}>
                  <Text style={styles.cardtitle}>Nama</Text>
                    <TextInput placeholder="eg. Ayu Azhari Putri" value={nama} onChangeText={(value) => setNama(value)} style={styles.input}/>
                    <Text style={styles.cardtitle}>Chek-In</Text>
                    <TextInput placeholder="eg. Sat Dec 2 2023" value={chekin} onChangeText={(value) => setChekin(value)} style={styles.input}/>
                    <Text style={styles.cardtitle}>Chek-Out</Text>
                    <TextInput placeholder="eg. Sat Dec 2 2023" value={chekout} onChangeText={(value) => setChekout(value)} style={styles.input}/>
                    <Text style={styles.cardtitle}>Jumlah Kamar</Text>
                    <TextInput placeholder="eg. 1" value={jumlahkamar} onChangeText={(value) => setJumlahkamar(value)} style={styles.input}/>
                    <Button title="Simpan" style={styles.button} onPress={submit}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Createdata

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#7C93C3',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    cardtitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    form: {
      padding: 10,
      marginBottom: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
      },
      button: {
        marginVertical: 10,
      }
     })
        