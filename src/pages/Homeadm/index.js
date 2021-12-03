import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles'
import PostController from '../../common/utils/Post_Controller'
import { useSelector, connect, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns'


function Homeadm({ navigation }) {
  const dispatch = useDispatch()
  const [incidents,setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const userName = useSelector((state) => state.name)
  const fetchData = async () => {
    const Posts = await PostController('POST')
    setIncidents(Posts)
    setLoading(false);
   
  };
  async function del(itemId) {
    await PostController('DELETE', itemId)
  };

  function date(date) {
    return format(new Date (date), 'dd/MM/yyyy')
  }
  async function logout(){
    dispatch({type: 'SIGN_OUT'})
  }


  useEffect(() => {
    fetchData()
    return () => {
      setLoading(false);
    };
  }, [incidents]); 


  const renderItem = ({ item }) =>
    (
      <View style={styles.post} >
        <Text style={styles.postProperty}>Nome de Usuário:</Text>
        <Text style={styles.postValue}>{item.nome}</Text>
        
        <Text style={styles.postProperty}>Data:</Text>
        <Text style={styles.postValue}>{date(item.createdAt)}</Text>
    
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
          onPress={() => del(item._id)}
        >
          <Text style= {styles.actionpostButtonText}>Apagar Post</Text>
        </TouchableOpacity>
      </View>
    )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Seja bem vindo <Text style={styles.headerTextBold}>{userName}</Text>
        </Text>
        <Icon name="power-settings-new" size={25} color="red" onPress={logout}/>
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
          keyExtractor={item => item._id}
          onRefresh={() => {
            fetchData()
          }}
          refreshing={loading}/>
      </View>
    </View>
  );
}
export default connect((state) => state)(Homeadm)
