import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseStateHook from '../Hooks/UseStateHook';
import Home from '../Screens/Home'
import UseEffectHook from '../Hooks/UseEffectHook';
import LayoutScreen from '../Screens/LayoutScreen';
import Day3Screen from '../Screens/Day3Screen';
import Day4Screen from '../Screens/Day4Screen';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UseState" component={UseStateHook} />
      <Stack.Screen name="UseEffectHook" component={UseEffectHook} />
      <Stack.Screen name="LayoutScreen" component={LayoutScreen} />
      <Stack.Screen name="Day3Screen" component={Day3Screen} />
      <Stack.Screen name="Day4Screen" component={Day4Screen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
