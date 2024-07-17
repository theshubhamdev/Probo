import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/Screens";
import { useTheme } from "./src/Hooks";

export default function App() {
  const { Layout } = useTheme();
  return (
    <NavigationContainer>
      <View style={[Layout.fill, Layout.center]}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
