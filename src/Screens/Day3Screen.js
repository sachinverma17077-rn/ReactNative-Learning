import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Day3Screen = () => {
  return (
    <View style={styles.container}>

      {/* Profile Card */}
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Sachin Verma</Text>
        <Text style={styles.bio}>React Native Developer</Text>
      </View>

      {/* Input */}
      <TextInput 
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#c8a7a7ff"
        
      />

      {/* Button */}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Day3Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 20
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    fontWeight: '600'
  },
  bio: {
    fontSize: 14,
    color: "#666",
    marginTop: 4
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    elevation: 3,
    marginBottom: 20,
    color:"black"
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});
