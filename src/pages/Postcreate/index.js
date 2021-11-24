import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import { useRoute } from '@react-navigation/native';


export default function Postcreate({ navigation }) {
  const [text, onChangeText] = useState('');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: 'Douglas', text: text })
  }

  async function Createpost() {
    fetch('http://192.168.0.165:3300/createpost', requestOptions)
      .then((response) => {
        response.json()
      }).then(() => navigation.navigate('Homeadm')).catch((error) => {
        console.log('Tivemos um problema ');
        throw error;
      });
  }
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Seja bem vindo <Text style={styles.headerTextBold} />
        </Text>
        <TouchableOpacity
          style={styles.actionpostButton}
          onPress={() => Createpost()}
        >
          <Text style={styles.actionpostButtonText}>Salvar Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={{ height: 100, borderColor: '#e02041', borderWidth: 1, }}
          placeholder="Compartilhe suas ideias..."
          multiline={true}
          textAlignVertical={'top'}
          onChangeText={text => onChangeText(text)}
          value={text}
        />
      </View>
      <TouchableOpacity
        style={styles.actionpostButton2}
        onPress={() => navigation.navigate('Homeadm')}
      >
        <Text style={styles.actionpostButtonText}>Cancelar Post</Text>
      </TouchableOpacity>
    </View>
  );
}