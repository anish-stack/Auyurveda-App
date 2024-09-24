import React, { useEffect, useState } from 'react'
import './global.css';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { name as appName } from './app.json';
import Home from './screen/Home/Home';
import Toast from 'react-native-toast-message';
import OnBoard from './screen/onboardingscreenn/OnBoard';
import Register from './screen/auth/Regsiter';
import Login from './screen/auth/Login';
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='onboard' component={OnBoard} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: true }} />

        <Stack.Screen name='Login' component={Login} options={{ headerShown: true }} />

      </Stack.Navigator>
      <Toast />
    </NavigationContainer>

  )
}
// Register the App Component
AppRegistry.registerComponent(appName, () => App);
export default App