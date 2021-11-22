import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles'
import PostActions from '../../common/utils/Post_Actions'


export default function Homeadm({ navigation }) {
  const [incidents,setIncidents] = useState([]);
  useEffect(() => {
    PostActions('FIND').then((data) => setIncidents(data)); 
  
    }), [];

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
          onPress={() => navigation.navigate('Postcreate')}>
          <Text style= {styles.actionpostButtonText}>Criar Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={incidents}
          renderItem={renderItem}
          keyExtractor={(item, index) => item._id}/>
      </View>
    </View>
  );
}
