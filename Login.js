import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginButton from './src/components/LoginButton';
import TextInputEmail from './src/components/TextInputEmail';
import Menu from './src/components/Menu';
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Image
          source={require('./src/images/hotel.png')}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          JOGJA<Text style={{color: '#2396F2'}}>STAY</Text>
        </Text>
        
      </View>

      <TextInputEmail
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukkan email"
        isPassword={false}
      />
      <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="masukkan password"
        isPassword={true}
      />

      <LoginButton text="Login" color="#2396F2"/>
      {/* <TouchableOpacity onPress={() => {navigation.navigate('Peta')}}>
        <Text>Click me</Text>
      </TouchableOpacity> */}

      <Menu signupText="Daftar" forgotPasswordText="Lupa Password?" />
    </ScrollView>
  );
};
export default App;
