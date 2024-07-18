import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "./src/Hooks";
import { ActivePollProvider } from "./src/Context/ActivePollContext";
import Navigation from "./src/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const { Layout } = useTheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ActivePollProvider>
          {/* <View style={[Layout.fill, Layout.center]}> */}
            <StatusBar style="auto" />
            <Navigation />
          {/* </View> */}
        </ActivePollProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
