import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MainScreen from "./MainScreen";
import Profile from "./Profile";

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
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;