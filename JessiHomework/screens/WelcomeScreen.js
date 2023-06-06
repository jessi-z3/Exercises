import * as React from 'react';

import { View, Image, Text, Pressable, StyleSheet, TextInput } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
  <Image 
    style={styles.logo}
    source={require('../assets/little-lemon-logo.png')}
    resizeMode='contain'
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'}
   />
  <Text style={styles.mainText}>
    Little Lemon, your local Mediterranean Bistro
  </Text>
  <Pressable onPress={() => navigation.navigate('Subscribe')}>
    <Text style={styles.buttonText}>
    Newsletter
    </Text>
  </Pressable>
  </View>;
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 250,
    width: 100,
    marginTop: 50,
  },
  mainText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
    color: 'black'
  },
  buttonText:{
    backgroundColor: 'green',
    color: 'white',
    height: 50,
    width: 300,
    marginTop: 75,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
    padding: 15
  }
})