import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Navigations/StackNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import LayoutScreen from './src/Screens/LayoutScreen'

const App = () => {
  return (
  <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  </SafeAreaView>
  )
}

export default App
