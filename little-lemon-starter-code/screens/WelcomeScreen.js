import * as React from 'react';

import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <Image
    source={require("../assets/little-lemon-logo.png")}
    resizeMode= 'contain'
    style={styles.logo}
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'}
    />
    <Text style={styles.homeText}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable style={styles.subscribeButton} onPress={navigation.navigate("Subscribe")}>
        <Text style={styles.buttonText}>Newsletter</Text>
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
  homeText:{
    margintop: 16,
    paddingVertical: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  }
});
export default WelcomeScreen;
