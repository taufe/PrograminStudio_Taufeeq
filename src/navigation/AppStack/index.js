import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Season from '../../screens/season';
import UsersContactList from '../../screens/usersContactList';
import UserContactView from '../../screens/userContactView';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Season">
        <Stack.Screen
          name="Season"
          component={Season}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UsersContactList"
          component={UsersContactList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserContactView"
          component={UserContactView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
