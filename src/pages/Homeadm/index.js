import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles'


export default function Homeadm({ navigation }) {
  const [incidents,setIncidents] = useState([]);
  
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }
  async function Postdelete(id) {
  await fetch('http://192.168.0.105:3300/deletepost', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: id })
  })
  .then((response) => response.json())
  .then(loadIncidents())
}
  async function loadIncidents() {
    
    
  await fetch('http://192.168.0.105:3300/findpost', requestOptions)
  .then((response) => response.json())
  .then((data) => setIncidents(data))
}
useEffect(() => {
  loadIncidents();
}, []);

  const renderItem = ({ item }) =>
  (
      <View style={styles.post} >
        <Text style={styles.postProperty}>Nome de Usuário:</Text>
        <Text style={styles.postValue}>{item.nome}</Text>
        
        <Text style={styles.postProperty}>Data:</Text>
        <Text style={styles.postValue}>{item.createdAt}</Text>
    
        <Text style={styles.postProperty}>Texto:</Text>
        <Text style={styles.postValue}>{item.text}</Text>
        
        <TouchableOpacity
          style={styles.actionpostButton}
          onPress={() => navigation.navigate('Postedit', { item })}
          disabled={item.nome == ''}
        >
          <Text style= {styles.actionpostButtonText}>Editar Post</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.actionpostButton}
          onPress={() => Postdelete(item._id)}
          disabled={item.nome !== 'Douglas'}
        >
          <Text style= {styles.actionpostButtonText}>Apagar Post</Text>
        </TouchableOpacity>
      </View>
      )
  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                  Seja bem vindo <Text style={styles.headerTextBold}></Text>
                </Text>
                <TouchableOpacity
      style={styles.actionpostButton}
      onPress={() => navigation.navigate('Postcreate')}
    >
      <Text style= {styles.actionpostButtonText}>Criar Post</Text>
    </TouchableOpacity>
            </View>
      <View style={styles.container2}>
        <FlatList
          data={incidents}
          renderItem={renderItem}
          onEndReached={loadIncidents}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    </View>
  );
}