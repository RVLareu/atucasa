import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Chat from './screens/Chat';
import MainScreen from "./screens/MainScreen";
import Profile from "./screens/Profile";
import Ratings from './screens/Ratings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
          />
          <Stack.Screen 
            name="Profile"
            component={Profile}  
          />
          <Stack.Screen 
            name="Ratings"
            component={Ratings}
          />
          <Stack.Screen 
            name="Chat"
            component={Chat}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;