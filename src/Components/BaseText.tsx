import {
    StyleProp,
    StyleSheet,
    Text,
    TextProps,
    TextStyle,
  } from "react-native";
  import React, { FC, useMemo } from "react";
  import { useTheme } from "../Hooks";
  import { ThemeColors } from "../Theme/theme.types";
  
  interface Props extends TextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
  }
  
  const BaseText: FC<Props> = ({ children, style, ...props }) => {
    const { Colors, Fonts } = useTheme();
    const styles = useMemo(() => stylesFn(Colors), [Colors]);
    return (
      <Text
        style={[Fonts.fManrope, Fonts.textColorDefault, styles.baseText, style]}
        {...props}
      >
        {children}
      </Text>
    );
  };
  
  export default BaseText;
  
  const stylesFn = (Colors: ThemeColors) =>
    StyleSheet.create({
      baseText: {
        color: Colors.text,
      },
    });