import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Homeadm from './pages/Homeadm';
import Postcreate from './pages/Postcreate';
import Postedit from './pages/Postedit';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Login">
                <Stack.Screen name="Login" component={ Login } />
                <Stack.Screen name="Register" component={ Register } />
                <Stack.Screen name="Homeadm" component={ Homeadm } />
                <Stack.Screen name="Postcreate" component={ Postcreate } />
                <Stack.Screen name="Postedit" component={ Postedit } />
            </Stack.Navigator>
        </NavigationContainer>
    )
};