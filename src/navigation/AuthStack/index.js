import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN } from '../../constants';
import * as Auth from '../../screens/auth'
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.onBoarding}>
            <Screen name={SCREEN.onBoarding} component={Auth.OnBoardingSwiper} />
            <Screen name={SCREEN.signIn} component={Auth.SignIn} />
            <Screen name={SCREEN.signUp} component={Auth.SignUp} />
        </Navigator>
    );
};
export default AuthNavigation;