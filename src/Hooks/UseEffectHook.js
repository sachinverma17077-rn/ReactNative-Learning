import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
 const [count,setCount] = useState(0);

 useEffect(()=>{
    console.log("count changed", count)
 },[count])

  return (
    <View>
        <Button title='increase' onPress={()=>setCount(count+1)}/>
      <Text>count:{count}</Text>
    </View>
  )
}

export default UseEffectHook

const styles = StyleSheet.create({})