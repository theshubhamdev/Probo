import { FlatList, ListRenderItem, Pressable, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import QUESTIONS from "../../../assets/data/data.json";
import QuestionCard  from "./QuestionCard";
import { useTheme } from "../../Hooks";
import { Poll } from "../../Context/ActivePollContext";
import { useNavigation } from "@react-navigation/native";

const QuestionsCardList = () => {
  const { Gutters } = useTheme();

  const renderItem: ListRenderItem<Poll> = useCallback(
    ({ item }) => (
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
