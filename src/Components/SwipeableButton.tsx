import { View, StyleSheet, Image, Dimensions } from "react-native";
import React, { FC, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useTheme } from "../Hooks";

interface Props {
  onSwipe: () => void;
  isLoading?: boolean;
}

const SwipeableButton: FC<Props> = ({ onSwipe, isLoading }) => {
  const navigation = useNavigation();
  const { Colors, Fonts } = useTheme();
  const X = useSharedValue(10);
  const boxValue = useSharedValue(0);
  const BUTTON_WIDTH = Dimensions.get("screen").width - 48;
  const SWIPE_RANGE = BUTTON_WIDTH - 74;
  const animatedGestureHandler = Gesture.Pan()
    .onBegin((e) => {
      const newValue = e.translationX;

      if (newValue >= 0 && newValue <= SWIPE_RANGE) {
        X.value = newValue;
      }
    })
    .onEnd(() => {
      if (X.value < SWIPE_RANGE - 20) {
        X.value = withSpring(0);
      } else {
        runOnJS(onSwipe)();
      }
    });

  const InterpolateXInput = [0, 150];
  let AnimatedStyles = {
    swipeButton: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(
              X.value,
              [20, BUTTON_WIDTH],
              [0, BUTTON_WIDTH],
              Extrapolation.CLAMP,
            ),
          },
        ],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          [0, BUTTON_WIDTH / 4],
          [1, 0],
          Extrapolation.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              [20, SWIPE_RANGE],
              [0, BUTTON_WIDTH / 3],
              Extrapolation.CLAMP,
            ),
          },
        ],
      };
    })
  };
  const animatedView = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: boxValue.value }],
    };
  });

  useEffect(() => {
    if (!isLoading) {
      X.value = withSpring(0);
    }
  }, [isLoading]);

  return (
    <View style={myStyle.container}>
      <View
        style={{
          width: "80%",
          height: 40,
          borderRadius: 5,
          backgroundColor: Colors.btnPrimaryText,
          justifyContent: "center",
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: "center",
        }}
      >
        <GestureDetector gesture={animatedGestureHandler}>
          <Animated.View
            style={[
              {
                width: 30,
                height: 30,
                backgroundColor: "lightblue",
                borderRadius: 10,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                left: 0,
              },
              // AnimatedStyles.swipeButton,
              animatedView
            ]}
          >
            <Image
              source={require("../../assets/right.png")}
              style={{ width: 30, height: 30, backgroundColor: "transparent" }}
            />
          </Animated.View>
        </GestureDetector>
        <Animated.Text
          style={[
            Fonts.textSmall,
            AnimatedStyles.swipeText,
            { color: Colors.white },
          ]}
        >
          {" >> Right Swipe to order >>"}
        </Animated.Text>
      </View>
    </View>
  );
};
export default SwipeableButton;
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
