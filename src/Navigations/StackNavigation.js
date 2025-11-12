import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseStateHook from '../Hooks/UseStateHook';
import Home from '../Screens/Home'

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UseState" component={UseStateHook} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
