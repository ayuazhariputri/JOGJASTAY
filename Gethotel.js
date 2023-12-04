import React from 'react'
import listhotel from './data/listhotel.json'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Gethotel = () => {
    return (
        <FlatList
            data={listhotel}
            renderItem={({ item }) => (
                <View style={ styles.card }>
                    <View style={ styles.avatar }>
                    <FontAwesome5 name={item.icon} size={50} color={item.color} />
                    </View>
                    <View>
                        <Text style={ styles.cardtitle }>{item.nama}</Text>
                        <Text>Chek-in: {item.chekin}</Text>
                        <Text>Chek-out: {item.chekout}</Text>
                        <Text>Jumlah Kamar: {item.jumlahkamar}</Text>
                        
                        
                    </View>
                </View>
            )}
        />
    )
}

export default Gethotel

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      width: 80,
    },
    cardtitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   