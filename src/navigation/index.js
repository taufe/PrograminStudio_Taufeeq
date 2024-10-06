import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN } from '../constants';
import AuthNavigation from './AuthStack';
import AppNavigation, { AppNavigator } from './AppStack';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {

    return (
        <>
                <NavigationContainer >
                    <Navigator screenOptions={{ headerShown: false }}
                        initialRouteName={SCREEN.authStack}
                    >
                        <Screen name={SCREEN.authStack} component={AuthNavigation} />
                        <Screen name={SCREEN.appStack} component={AppNavigation} />
                    </Navigator>
                </NavigationContainer>
            
        </>
    )
}

export default Navigation