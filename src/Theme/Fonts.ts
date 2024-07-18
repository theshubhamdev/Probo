import { StyleSheet } from "react-native";
import { FontSize } from "./Variables";
import Colors from "./Colors";

export default StyleSheet.create({
  fWorkSans: {
    fontFamily: "WorkSans",
    letterSpacing: 0.8,
  },
  textTiny: {
    fontSize: FontSize.tiny,
  },
  textMicro: {
    fontSize: FontSize.micro,
  },
  textMini: {
    fontSize: FontSize.mini,
  },
  textSmall: {
    fontSize: FontSize.small,
  },
  textMidLarge: {
    fontSize: FontSize.midLarge,
  },
  textRegular: {
    fontSize: FontSize.regular,
  },
  textLarge: {
    fontSize: FontSize.large,
  },
  textDecorationUnderline: {
    textDecorationLine: "underline",
  },
  textColorDefault: {
    color: Colors.text,
  },
  textColorPrimary: {
    color: Colors.btnPrimaryText  
  },
  h1Bold: {
    fontSize: 22,
    fontWeight: "bold",
  },
  h1SemiBold: {
    fontSize: 22,
    fontWeight: "600",
  },
  textCenter: {
    textAlign: "center",
  },
  textJustify: {
    textAlign: "justify",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  wt100: {
    fontWeight: "100",
  },
  wt200: {
    fontWeight: "200",
  },
  wt300: {
    fontWeight: "300",
  },
  wt400: {
    fontWeight: "400",
  },
  wt500: {
    fontWeight: "500",
  },
  wt600: {
    fontWeight: "600",
  },
  wt700: {
    fontWeight: "700",
  },
  wt800: {
    fontWeight: "800",
  },
  wt900: {
    fontWeight: "900",
  },
  wtNormal: {
    fontWeight: "normal",
  },
  wtBold: {
    fontWeight: "bold",
  },
});
