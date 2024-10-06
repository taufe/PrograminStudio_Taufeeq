import AppNavigator from './src/navigation/AppStack';
import { View } from 'react-native';

const App = () => {
    return (
        <View style={{flex:1}}>
            <AppNavigator />
        </View>
    );
};

export default App;
