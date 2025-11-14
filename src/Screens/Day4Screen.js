import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const user = [
    { id:'1', title:'sachin',avtar:'https://i.pravatar.cc/150?img=11'},
    { id:'2', title:'kaushal',avtar:'https://i.pravatar.cc/150?img=12'},
    { id:'3', title:'himanshu',avtar:'https://i.pravatar.cc/150?img=13'},
    { id:'4', title:'anil',avtar:'https://i.pravatar.cc/150?img=14'},
    { id:'5', title:'manish',avtar:'https://i.pravatar.cc/150?img=15'},
   
]

const Day4Screen = () => {
    const renderItem = ({item}) => {
       return (
         <View style={styles.card}>
<Image source={{ uri: item.avtar }} style={styles.avatar} />

      <Text style={styles.name}>{item.title}</Text>
    </View>
       )
    }
  return (
    <View style={styles.container} >
        <FlatList
        data={user}
        renderItem={renderItem}
       keyExtractor={item => item.id}

        />
    
    </View>
  )
}

export default Day4Screen

const styles = StyleSheet.create({
      container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f7f7f7'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  name: {
    fontSize: 18,
    fontWeight: '500'
  }
})