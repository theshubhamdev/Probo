import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigation } from "../Types/navigation";
import { Home, QuestionDetails } from "../Screens";

const Stack = createNativeStackNavigator<RootNavigation>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QuestionsDetails" component={QuestionDetails} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
