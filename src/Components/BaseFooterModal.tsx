import React, { FC, ReactNode, useCallback, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "../Hooks";
import { SCREEN_HEIGHT } from "../Theme/Layout";
import { ThemeColors } from "../Theme/theme.types";

interface Props {
  visible: boolean;
  onClose?: () => void;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const BaseFooterModal: FC<Props> = ({
  visible,
  onClose,
  children,
  opacity = 0.8,
  style,
}) => {
  const { Layout, Gutters, Colors } = useTheme();

  const styles = useMemo(() => stylesFn(Colors), [Colors]);
  const onCloseHandler = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCloseHandler}
      onBackButtonPress={onCloseHandler}
      backdropOpacity={opacity}
      onSwipeComplete={onCloseHandler}
      swipeDirection={["down"]}
      style={[Gutters.noMargin, Layout.justifyContentEnd]}
      statusBarTranslucent={true}
      deviceHeight={SCREEN_HEIGHT}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      onModalHide={() => null}
    >
      <View
        style={[
          Layout.shrink,
          styles.viewContainer,
          style,
        ]}
      >
        {children}
      </View>
    </Modal>
  );
};

const stylesFn = (Colors: ThemeColors) =>
  StyleSheet.create({
    viewContainer: {
      backgroundColor: Colors.modalBg,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingBottom: 19,
    },
  });

export default BaseFooterModal;
