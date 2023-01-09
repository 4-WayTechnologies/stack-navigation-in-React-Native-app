import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './About';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Contact from './Contact';
const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home Page" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />

  
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App