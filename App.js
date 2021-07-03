import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import HomeScreen from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f2f1e4",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Your Notes" }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f1e4",
  },
});
