import React, {useState, useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import { useRoute } from '@react-navigation/native';

export default function Postedit({ navigation }) {
  const [text, setText] = useState('');
  const route = useRoute();
  const item = route.params.item;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: item._id, text: text })
  }
      
  async function Postedit(){
    fetch('http://192.168.0.165:3300/editpost', requestOptions)
      .then((response) => {
        response.json()
      }).then(() => navigation.navigate('Homeadm')).catch((error) => {
        console.log('Tivemos um problema ' + error.message);
        throw error;
      });
  }
  useEffect(() => {
    setText(item.text);
  }, [item.text]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>  Seja bem vindo <Text style={styles.headerTextBold} />
        </Text>
        <TouchableOpacity
          style={styles.actionpostButton}
          onPress={() => Postedit()}
        >
          <Text style= {styles.actionpostButtonText}>Salvar Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={{ height: 100, borderColor: '#e02041', borderWidth: 1, }}
          placeholder="Compartilhe suas ideias..."
          multiline={true}
          textAlignVertical={'top'}
          onChangeText={text => setText(text)}
          value={text}
        />
      </View>
      <TouchableOpacity
        style={styles.actionpostButton2}
        onPress={() => navigation.navigate('Homeadm')}
      >
        <Text style= {styles.actionpostButtonText}>Cancelar Edição</Text>
      </TouchableOpacity>
    </View>
  );
}