import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Home from '../screens/home';
import Following from '../screens/following';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Following: undefined;
};

const Stack = createNativeStackNavigator();


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Listagem de projetos',
          }}
        />
        <Stack.Screen
          name="Following"
          component={Following}
          options={{
            title: 'Seguindo',
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;