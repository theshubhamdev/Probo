import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../Hooks";

const Home = () => {
  const { Layout } = useTheme();
  return (
    <View style={[]}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
