import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.txt}>Box 1</Text>
      </View>

      <View style={styles.box2}>
        <Text style={styles.txt}>Box 2</Text>
      </View>

      <View style={styles.box3}>
        <Text style={styles.txt}>Box 3</Text>
      </View>
    </View>
  );
};

export default LayoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box1: {
    flex: 1,
    backgroundColor: '#ff5959',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 2,
    backgroundColor: '#59ff90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: '#5987ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
