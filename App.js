import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spalshscreen from './views/authentication/Components/Spalshscreen';
import Login from './views/authentication/Components/Login';
import Register from './views/authentication/Components/Register';
import Dashboard from './views/dashboard/Components/Dashboard';
import configureStore from './views/common/Store';
import { Provider } from 'react-redux';
import { navigationRef } from './views/common/Rootnavigation';

const Stack = createNativeStackNavigator();
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Provider store={store} >
        <Stack.Navigator>

          <Stack.Screen name="spalshscreen" component={Spalshscreen} options={{ headerShown: false, }} />
          <Stack.Screen name="login" component={Login} options={{ headerShown: false, }} />
          <Stack.Screen name="register" component={Register} options={{ headerShown: false, }} />
          <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false, }} />

        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    )
  }
}