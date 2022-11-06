import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Profile"
            component={Profile}
            options={{headerShown: false}}   
          />
          <Stack.Screen 
            name="Ratings"
            component={Ratings}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;