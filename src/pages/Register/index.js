import React, {useState, useEffect} from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Keyboard } from 'react-native';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

export default function Register({ navigation }) {

const [offset] = useState(new Animated.ValueXY({x: 0,y: 95}));
const [opacity] = useState(new Animated.Value(0));
const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}))
const [login, setLogin] = useState('')
const [senha, setSenha] = useState('')
const [nome, setNome] = useState('')
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: login, password: senha, nome: nome })
}

function Registrar(){
  fetch('http://192.168.0.105:3300/registrar', requestOptions)
  .then((response) => {
      response.json()
  }).then(() => navigation.navigate('Login')).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
      throw error;
    });
}

useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  
  
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }, []);
  
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background} >
        <ScrollView style={styles.scroll}>
      <Animated.View style={[styles.container,
        { 
          opacity: opacity,
          transform: [
            { translateY: offset.y }
          ]
        }
        ]}>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
        onChangeText={nome => setNome(nome)}
        />
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={login => setLogin(login)}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={senha => setSenha(senha)}
        /> 
      </Animated.View>
      <TouchableOpacity style={styles.btnRegister} onPress={() => Registrar()}>
        <Text style={styles.registerText}>Registrar</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}