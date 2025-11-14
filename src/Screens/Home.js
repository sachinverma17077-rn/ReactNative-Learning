import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const data = [
   
  ]
  return (
    <View style={styles.container} >

      <TouchableOpacity style={styles.UseState} onPress={()=>{navigation.navigate("UseState")}} >
     <Text>   useState </Text>
   
      </TouchableOpacity>
      <TouchableOpacity style={styles.UseState} onPress={()=>{navigation.navigate("UseEffectHook")}} >
     <Text>   useEffect </Text>
   
      </TouchableOpacity>
       <TouchableOpacity style={styles.UseState} onPress={()=>{navigation.navigate("LayoutScreen")}} >
     <Text>   LayoutScreen </Text>
   
      </TouchableOpacity>
      <TouchableOpacity style={styles.UseState} onPress={()=>{navigation.navigate("Day3Screen")}} >
     <Text>   Day3Screen </Text>
   
      </TouchableOpacity>
       <TouchableOpacity style={styles.UseState} onPress={()=>{navigation.navigate("Day4Screen")}} >
     <Text>   Day4Screen </Text>
   
      </TouchableOpacity>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
  
  },
  UseState:{height:30,
    width:150,
    borderRadius:50,
    borderWidth:1,
    backgroundColor:"#b0c4b1",
    elevation:1,
    justifyContent:"center",
    alignItems:"center"
  }
})