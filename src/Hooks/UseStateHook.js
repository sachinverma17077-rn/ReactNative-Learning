import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const UseStateHook = () => {
  const [count, setCount] = useState(null);
  const [isDark,setIsDark] = useState(false);

  const handleIncrese = () => {
    setCount(count + 1);
  };
  const handleDcrease = () => {
    setCount(count - 1);
  }

  return (
    <View style={{ flex: 1 ,justifyContent:"space-between" ,flexDirection:"row"}}>
      <View style={styles.firstcontainer} >
        <TouchableOpacity style={styles.button} onPress={() => {
          console.log('clicked');
          handleIncrese(5);
        }}
        >
          <Text>Increase</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text>
            Count:{count}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { handleDcrease() }} >
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seccontainer} >
        <Button title={isDark ? 'dark mode' : 'light mode'} onPress={()=>{setIsDark(!isDark)}} />
          <View style={{backgroundColor: isDark ? 'black' : 'white',flex:1,height:20,width:25}} />

      </View>


    </View>
  )
}

export default UseStateHook

const styles = StyleSheet.create({
  firstcontainer: {
    margin: 25,
    backgroundColor:"#669bbc",
    height:150,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25
  },
  button: {
    backgroundColor: "#fdf0d5",
    borderRadius: 50,
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center"

  },
  seccontainer:{
      margin: 25,
    backgroundColor:"#669bbc",
    height:150,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25
  }
})