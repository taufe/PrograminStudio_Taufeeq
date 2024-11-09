import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieItemList from '../../screens/movieItemList';
import MovieItemView from '../../screens/movieItemView';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieItemList">
        <Stack.Screen
          name="MovieItemList"
          component={MovieItemList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieItemView"
          component={MovieItemView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
