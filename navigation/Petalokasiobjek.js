import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Listhotel from '../Home'
import Order from '../Order';
import Hasil from '../Hasil';



const Tab = createBottomTabNavigator();

//Form input dari github pages
const forminput = 'https://ayuazhariputri.github.io/pgpbl-acara-12/';

//Peta web dari github pages
const webmap = 'https://ayuazhariputri.github.io/pgpbl-acara-12/map.html';

function HomeScreen() {
    return (
            <View>
                <Listhotel />
            </View>
    );
}
function MapsScreen() {
    return (
        <WebView
            source={{ uri: webmap}}
        />
    );
}
function AddDataScreen() {
    return (
        <View>
                <Order />
            </View>
    );
}
function OrderScreen() {
    return (
        <View>
            <Hasil />
        </View>
    );
}

function MyTabs() {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Maps" component={MapsScreen} options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Order',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="plus-circle" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Order" component={OrderScreen} options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="list-ul" color={color} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
    },
    listitems: {
        padding: 10,
        alignItems: 'center',
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
        marginTop: 20,
        marginHorizzontal: 20,
        padding: 20,
        backgroundColor: '#EEF5FF',
    }
});