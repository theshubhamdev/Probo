import React, { FC, ReactNode, useMemo } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../Hooks";
import { ThemeColors } from "../Theme/theme.types";

interface Props {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  shadow?: boolean;
}

const BaseCard: FC<Props> = ({ children, onPress, style, shadow = true }) => {
  const { Colors, Gutters } = useTheme();
  const styles = useMemo(() => stylesFn(Colors), [Colors]);
  return (
    <Pressable
      style={[Gutters.smallPadding, styles.container,styles.cardShadow, shadow ? styles.cardShadow : {}, style]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const stylesFn = (Colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      borderRadius: 10,
      padding: 8,
    },
    cardShadow: {
      shadowColor: Colors.cardShadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 10,
    },
  });

export default BaseCard;