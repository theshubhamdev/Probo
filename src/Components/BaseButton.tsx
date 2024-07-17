import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { FC, useMemo } from "react";
import { useTheme } from "../Hooks";
import { BaseText } from "./";
import { ThemeColors } from "../Theme/theme.types";

interface Props {
  text: string;
  onPress: () => void;
  btnStyles?: StyleProp<ViewStyle>;
  type?: "DEFAULT" | "FLAT";
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  btnBackgroundColor?: string;
}

const BaseButton: FC<Props> = ({
  text,
  onPress,
  btnStyles,
  type = "DEFAULT",
  btnBackgroundColor,
  textColor,
  textStyles,
}) => {
  const { Layout, Colors, Gutters, Fonts } = useTheme();
  const styles = useMemo(() => stylesFn(Colors), [Colors]);

  const buttonStyles = useMemo(() => {
    switch (type) {
      case "DEFAULT":
        return styles.btnDefault;
      case "FLAT":
        return styles.flatButton;
      default:
        break;
    }
  }, [styles.btnDefault, styles.flatButton]);
  return (
    <Pressable
      onPress={onPress}
      style={[
        Layout.center,
        styles.btnBackground,
        buttonStyles,
        styles.cardShadow,
        Gutters.midLargeVPadding,
        btnStyles,
        btnBackgroundColor ? { backgroundColor: btnBackgroundColor } : {},
      ]}
    >
      <BaseText
        style={[
          styles.text,
          Fonts.textRegular,
          Fonts.wt800,
          textColor ? { backgroundColor: textColor } : {},
          textStyles,
        ]}
      >
        {text}
      </BaseText>
    </Pressable>
  );
};

export default BaseButton;

const stylesFn = (Colors: ThemeColors) =>
  StyleSheet.create({
    text: {
      color: Colors.btnPrimaryText,
    },
    btnBackground: {
      backgroundColor: Colors.btnPrimary,
    },
    btnDefault: {
      borderRadius: 40,
    },
    flatButton: {
      borderRadius: 10,
    },
    cardShadow: {
      shadowColor: Colors.btnShadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 10,
    },
  });
