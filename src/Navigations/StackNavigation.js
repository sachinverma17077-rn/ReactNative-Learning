import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseStateHook from '../Hooks/UseStateHook';
import Home from '../Screens/Home'
import UseEffectHook from '../Hooks/UseEffectHook'

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UseState" component={UseStateHook} />
       <Stack.Screen name="UseEffectHook" component={UseEffectHook} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
