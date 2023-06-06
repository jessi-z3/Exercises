import * as React from 'react';
import { useState } from 'react'; 

import { View, StyleSheet, Image, Text, TextInput, Pressable, Alert } from 'react-native';
import {validateEmail} from '../utils/index'

const SubscribeScreen = () => {
  // Add subscribe screen code here
      const [email, setEmail] = useState('');
      const message = () => Alert.alert('Thanks for subscribing, stay tuned!')
      const isEmailValid = validateEmail(email)

  return <View style={styles.container}>
    <Image 
    style={styles.logo}
    source={require('../assets/little-lemon-logo-grey.png')}
    resizeMode='contain'
    accessible={true}
    accessibilityLabel={'Little Lemon Logo in greyscale'}
    />
    <Text style={styles.mainText}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>
    <TextInput style={styles.emailBox} value={email} onChangeText={setEmail} placeholder='Type your email' keyboardType = 'email-address' textContentType='emailAddress'/>
    <Pressable 
    disabled={!isEmailValid} 
    onPress={message} >
      <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>

  </View>;
};

export default SubscribeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo:{
    height: 100,
    width: 100,
    marginTop: 100,
  },
  mainText: {
    fontSize: 24,
    color: 'black',
    marginVertical: 20,
    textAlign: 'center'
  },
  emailBox:{
    marginVertical:50,
    width: 350,
    height: 50,
    borderColor: 'black',
    borderWidth: .5,
    borderRadius: 5,
    borderStyle: 'solid',
    textAlign: 'left',
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
});