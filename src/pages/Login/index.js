import React, {useState, useEffect} from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Keyboard } from 'react-native';
import styles from './styles'
import UserController from '../../common/utils/User_Controller'
import { useDispatch, useSelector } from 'react-redux'

export default function Login({ navigation }) {
  const dispatch = useDispatch()
  const [offset] = useState(new Animated.ValueXY({x: 0,y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}))
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

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
  });
  
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
  async function Logar(){UserController('LOGIN', login, senha)
    .then((res) => dispatch({ type: 'SIGN_IN', token: res.nome }))
    .then(() => dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' }))
    .catch(err => console.log('Deu ruim'));
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style= {{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../../assets/dpn.png')}
        />
      </View>

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
          placeholder="Email"
          autoCorrect={false}
          onChangeText={login => {setLogin(login)}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={senha =>{setSenha(senha)}}
        />
      </Animated.View>

      <TouchableOpacity style={styles.btnSubmit} onPress={() => Logar()}>
        <Text style={styles.submitText} >Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')} >
        <Text style={styles.registerText}>Registrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}