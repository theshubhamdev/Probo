import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../Hooks";
import { BaseButton, BaseFooterModal, BaseText } from "../";
import { ThemeColors } from "../../Theme/theme.types";
import { FC, useMemo, useState } from "react";
import { PollOption, useActivePoll } from "../../Context/ActivePollContext";
import SwipeableButton from "../SwipeableButton";

interface Props {}

const QuestionsModal: FC<Props> = () => {
  const {
    activePoll,
    activeOption,
    setActiveOption,
    setActivePoll,
  } = useActivePoll();

  const { Layout, Colors, Gutters, Fonts } = useTheme();
  const styles = useMemo(() => stylesFn(Colors), [Colors]);

  const onCloseHandler = () => {
    setActivePoll(null);
    setActiveOption(null);
  };
  const onBtnPress = (option: PollOption) => {
    setActiveOption(option);
  };

  if (activePoll === null || activeOption === null) {
    return;
  }

  return (
    <BaseFooterModal visible={true} onClose={onCloseHandler} style={[]}>
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Gutters.largePadding,
          styles.firstHalf,
        ]}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200",
          }}
          style={[{ width: 50, aspectRatio: 1 }]}
        />
        <View style={[Layout.fill]}>
          <BaseText
            style={[Gutters.regularPadding, Fonts.textSmall, Fonts.wt600]}
          >
            {activePoll.question}
          </BaseText>
        </View>
      </View>
      <View style={[Layout.row, Layout.justifyContentCenter]}>
        {activePoll.options.map((option, index) => (
          <BaseButton
            onPress={() => onBtnPress(option)}
            key={option.optionId}
            type="FLAT"
            text={`${option.text}`}
            textColor={activeOption === option ? Colors.white : Colors.black}
            btnBackgroundColor={
              activeOption === option ? Colors.btnPrimaryText : Colors.white
            }
            btnStyles={[
              styles.btn,
              index === 0
                ? styles.noBorderRightRadius
                : styles.noBorderLeftRadius,
              Gutters.smallVPadding,
            ]}
          />
        ))}
      </View>
      <View
        style={[
          Layout.row,
          {
            backgroundColor: Colors.background,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: Colors.btnShadow,
          },
          Gutters.largeMargin,
        ]}
      >
        <View style={[Layout.fill, Layout.alignItemsCenter]}>
          <BaseText
            style={[Gutters.regularVPadding, Fonts.textRegular, Fonts.wt800]}
          >
            ₹{activeOption.amount}
          </BaseText>
          <BaseText style={[Fonts.textTiny]}>You Put</BaseText>
        </View>
        <View style={[Layout.fill, Layout.alignItemsCenter]}>
          <BaseText
            style={[Gutters.regularVPadding, Fonts.textRegular, Fonts.wt800]}
          >
            ₹1000
          </BaseText>
          <BaseText style={[Fonts.textTiny]}>You get</BaseText>
        </View>
      </View>
      <View
        style={[
          Layout.fill,
          Gutters.regularPadding,
          Gutters.extraLargeBMargin,
        ]}
      >
        <SwipeableButton />
      </View>
    </BaseFooterModal>
  );
};

export default QuestionsModal;

const stylesFn = (Colors: ThemeColors) =>
  StyleSheet.create({
    firstHalf: {
      backgroundColor: Colors.backgroundLight,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginBottom: -20,
    },
    btn: {
      width: "30%",
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.btnShadow,
    },
    noBorderLeftRadius: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    noBorderRightRadius: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  });
