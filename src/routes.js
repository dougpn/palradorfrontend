import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store';

import Login from './pages/Login';
import Register from './pages/Register';
import Homeadm from './pages/Homeadm';
import Postcreate from './pages/Postcreate';
import Postedit from './pages/Postedit';
import SplashScreen from './pages/SplashScreen';

const Stack = createStackNavigator();


function Routes() {
  const state = store.getState()
  if (state.isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        { state.userToken == null ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Homeadm" component={Homeadm} />
            <Stack.Screen name="Postcreate" component={Postcreate} />
            <Stack.Screen name="Postedit" component={Postedit} />
          </>
        ) }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default connect((state) => state)(Routes);