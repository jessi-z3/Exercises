import * as React from 'react';

import { View, Image, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

import { ValidateEmail, validateEmail } from '../utils';
const [email, onChangeEmail] = React.useState('')
const SubscribeScreen = () => {
  // Add subscribe screen code here
  return <View style={styles.container}>
    <Image source={require("../assets/little-lemon-logo-grey.png")} resizeMode='contain' style={styles.logo}/>
    <Text style={styles.mainText}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>
    <TextInput value='email' onChangeText={onChangeEmail}
    style={styles.textBox} placeholder={'Type your email'} keyboardType='email'/>
    <Pressable onPress={Alert.alert(title="Thanks for subscribing. Stay tuned!", Button="OK")}
       style={styles.subscribeButton} disabled={ValidateEmail.validateEmail({email}) ? false : true}>
        <Text style={styles.buttonText}>
          Subscribe
        </Text>
    </Pressable>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo:{
    height: 100,
    width: 300,
  },
  mainText:{
    margintop: 16,
    paddingVertical: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBox:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  subscribeButton:{
    fontsize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 50,
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})
export default SubscribeScreen;
