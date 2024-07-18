import { Image, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { useTheme } from "../../Hooks";
import { BaseButton, BaseCard, BaseText } from "../";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  Poll,
  PollOption,
  useActivePoll,
} from "../../Context/ActivePollContext";
import { useNavigation } from "@react-navigation/native";

interface Props {
  poll: Poll;
}

const QuestionCard: FC<Props> = ({ poll }) => {
  const { question, options, excerpt, traders } = poll;
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  const navigation = useNavigation();
  const onCardPress = () => {
    navigation.navigate("QuestionsDetails", { poll });
  };
  const { setActivePoll, setActiveOption } = useActivePoll();
  const onBtnPress = (option: PollOption) => {
    setActivePoll(poll);
    setActiveOption(option);
  };
  return (
    <BaseCard
      onPress={onCardPress}
      style={[Layout.fullWidth, Gutters.midLargePadding]}
    >
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <View style={[{ flex: 4 }]}>
          <View
            style={[
              Layout.row,
              Layout.wrapText,
              Gutters.smallBMargin,
              Layout.alignItemsCenter,
            ]}
          >
            <Feather name="users" size={15} color="black" />
            <BaseText style={[Gutters.tinyHPadding, Fonts.textMicro]}>
              {traders} traders
            </BaseText>
          </View>
          <BaseText
            style={[Gutters.smallRPadding, Fonts.textSmall, Fonts.wt600]}
          >
            {question}
          </BaseText>
        </View>
        <Image
          source={{
            uri: "https://picsum.photos/200",
          }}
          style={[{ width: 50, aspectRatio: 1, flex: 1 }]}
        />
      </View>
      <View
        style={[Layout.row, Layout.alignItemsCenter, Gutters.regularVPadding]}
      >
        <Entypo
          name="info"
          size={10}
          color="black"
          style={[Gutters.smallRPadding]}
        />
        <BaseText style={[Gutters.smallRPadding, { lineHeight: 22 }]}>
          {excerpt}{" "}
          <BaseText style={[Fonts.textColorPrimary, Fonts.wt800]}>
            Read More
          </BaseText>
        </BaseText>
      </View>
      <View style={[Layout.row]}>
        {options.map((option, index) => (
          <BaseButton
            onPress={() => onBtnPress(option)}
            key={option.optionId}
            type="FLAT"
            text={`${option.text} ₹${option.amount}`}
            textColor={
              index % 2 === 0 ? Colors.btnPrimaryText : Colors.btnSecondaryText
            }
            btnBackgroundColor={
              index % 2 === 0 ? Colors.btnPrimary : Colors.btnSecondary
            }
            btnStyles={[Layout.fill, index !== 0 && Gutters.smallLMargin]}
          />
        ))}
      </View>
    </BaseCard>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({});
