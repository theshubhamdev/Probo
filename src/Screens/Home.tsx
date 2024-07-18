import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "../Hooks";
import { QuestionCard, QuestionsModal } from "../Components/Home";
import QuestionsCardList from "../Components/Home/QuestionsCardList";

const Home = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  return (
    <SafeAreaView style={[Gutters.regularHPadding]}>
      <QuestionsCardList />
      <QuestionsModal />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
