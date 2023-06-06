import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";

import SubscribeScreen from "../screens/SubscribeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={WelcomeScreen}/>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
