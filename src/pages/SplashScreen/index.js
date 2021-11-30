import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { useDispatch } from 'react-redux'

export default function SplashScreen(){
  const dispatch = useDispatch()
  useEffect(() => {
    const bootstrapAsync = async () => {
      dispatch({ type: 'RESTORE_TOKEN', token: null})
    };
              
    bootstrapAsync();
  }, []);
  return (<View style={{ backgroundColor: 'red'}}><Text style={styles.headerText}>
          Seja bem vindo <Text style={styles.headerTextBold} />
  </Text></View>)}