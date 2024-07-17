import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import QUESTIONS from "../../../assets/data/data.json";
import QuestionCard, { Poll } from "./QuestionCard";
import { useTheme } from "../../Hooks";

const QuestionsCardList = () => {
  const { Gutters } = useTheme();
  const renderItem: ListRenderItem<Poll> = useCallback(
    ({ item, index }) => (
      <View style={Gutters.smallVPadding}>
        <QuestionCard poll={item} />
      </View>
    ),
    [Gutters.smallVPadding]
  );
  return <FlatList data={QUESTIONS.polls} renderItem={renderItem} style={[Gutters.smallHPadding]} />;
};

export default QuestionsCardList;

const styles = StyleSheet.create({});
