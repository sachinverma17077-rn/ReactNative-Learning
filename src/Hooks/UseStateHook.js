import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { use, useState } from 'react'


const UseStateHook = () => {
  const [count, setCount] = useState(null);
  const [change, setChange] = useState(false);
  const [name, setName] = useState('')

  const handleIncrese = () => {
    setCount(count + 1);
  };
  const handleDcrease = () => {
    setCount(count - 1);
  }
  const handleChange = () => {

  }

  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>
      <ScrollView>
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
          <TouchableOpacity style={{ height: 20, width: 50, backgroundColor: "#f4a261" }} onPress={() => { setChange(!change) }}  >
            <Text>Change</Text>

          </TouchableOpacity>
          <View style={{ backgroundColor: change ? "#2a9d8f" : "#6a994e", height: 50, width: 50 }} ></View>

        </View>

        <View style={styles.therdcontainer} >
          <TextInput
            style={{ backgroundColor: "gray", width: 200, borderRadius: 5 }}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Enter your name"
          />
          <Text>name: {name}</Text>

     

        </View>
      
      

      </ScrollView>
    </View>
  )
}

export default UseStateHook

const styles = StyleSheet.create({
  firstcontainer: {
    margin: 25,
    backgroundColor: "#669bbc",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  button: {
    backgroundColor: "#fdf0d5",
    borderRadius: 50,
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center"

  },
  seccontainer: {
    margin: 25,
    backgroundColor: "#669bbc",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexGrow: 1

  },
  therdcontainer: {
    height: 100,
    borderWidth: 0,
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
})