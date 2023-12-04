import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.tittle}>My Maps</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/Cartogram.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Cartogram</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/DotMap.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Dot Map</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/FlowMap.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Flow Map</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/GraduatedSymbol.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Graduated Symbol</Text>
            </View>
        </ScrollView>
    );
}
function MapsScreen() {
    return (
        <WebView
            source={ webmap }
        />
    );
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
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
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-circle" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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
    }
});