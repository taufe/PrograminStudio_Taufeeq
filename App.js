import { MovieProvider } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppStack';
import { View } from 'react-native';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <MovieProvider>
                <AppNavigator />
            </MovieProvider>
        </View>
    );
};

export default App;
