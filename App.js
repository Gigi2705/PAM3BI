import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Inicial from "./src/screens/Inicial";

const Stack = createStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator inicialRouteName = "Inicial">
    <Stack.Screen name = "Inicial" component={Inicial} options={{headerShown: false}} />
    <Stack.Screen name="Login" component={Login} options={{headerTitle: ""}} />
  </Stack.Navigator>
 </NavigationContainer>
  );
}


