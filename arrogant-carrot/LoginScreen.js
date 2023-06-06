import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [buttonPress, onButtonPress] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {buttonPress && (
        <Text style={styles.regularText}>You are logged in!</Text>
      )}
      {buttonPress || (
      <>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      
      {buttonPress || (
        <Pressable 
      style={styles.loginButton}
      onPress={() => { 
      onButtonPress(!buttonPress); 
      }} >
        <Text style={styles.loginText}>Log in</Text>
      </Pressable>)}
      </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  loginButton: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 5,
    backgroundColor: '#EE9972',
    borderRadius: 45,
    width: 175,
    alignSelf: 'center'
  }, 
  loginText: {
    fontSize: 25,
    textAlign: 'center',
  }
});
