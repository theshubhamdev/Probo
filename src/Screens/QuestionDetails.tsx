import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { FC, useMemo } from "react";
import { useTheme } from "../Hooks";
import { BaseButton, BaseText } from "../Components";
import { ThemeColors } from "../Theme/theme.types";
import Chart from "../Components/Chart";

interface Props {}

const QuestionDetails: FC<Props> = ({route}) => {
  const { Layout, Colors, Gutters, Fonts } = useTheme();
  const styles = useMemo(() => stylesFn(Colors), [Colors]);
  // const { activePoll, activeOption } = useActivePoll();
  const { poll: activePoll } = route.params;
  if (activePoll === null ) return;
  return (
    <SafeAreaView
      style={[Layout.center, { backgroundColor: Colors.backgroundLight }]}
    >
      <View style={[Layout.fullWidth, Gutters.regularHPadding, Gutters.largeVPadding,{backgroundColor: Colors.background}]}>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={[{ width: 50, aspectRatio: 1 }]}
          />
          <View style={[Layout.fill]}>
            <BaseText
              style={[Gutters.smallPadding, Fonts.textSmall, Fonts.wt600]}
            >
              {activePoll.question}
            </BaseText>
          </View>
        </View>
        <View style={[]}>
          {activePoll.options.map((option, index) => (
            <View
              key={option.optionId}
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
                { width: "90%" },
              ]}
            >
              <BaseButton
                type="FLAT"
                text={`₹${option.amount}`}
                textColor={
                  index % 2 === 0
                    ? Colors.btnPrimaryText
                    : Colors.btnSecondaryText
                }
                btnBackgroundColor={
                  index % 2 === 0 ? Colors.btnPrimary : Colors.btnSecondary
                }
                btnStyles={[
                  {
                    width:
                      (option.amount * 80) /
                        (activePoll.options[0].amount +
                          activePoll.options[1].amount) +
                      "%",
                  },
                ]}
              />
              <BaseButton
                onPress={() => onBtnPress(option)}
                key={option.optionId}
                type="FLAT"
                text={`${option.text}`}
                textColor={
                  index % 2 === 0
                    ? Colors.btnPrimaryText
                    : Colors.btnSecondaryText
                }
                btnBackgroundColor={
                  index % 2 === 0 ? Colors.btnPrimary : Colors.btnSecondary
                }
                btnStyles={[
                  {
                    width: 100,
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor:
                      index % 2 === 0
                        ? Colors.btnPrimaryText
                        : Colors.btnSecondaryText,
                  },
                ]}
              />
            </View>
          ))}
        </View>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.regularVPadding,
            {
              backgroundColor: Colors.background,
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: Colors.btnShadow,
            },
          ]}
        >
          <BaseText>{activePoll.traders} traders</BaseText>
          <BaseText>Expires in 8 days</BaseText>
        </View>
        <View style={[Layout.row, Layout.alignItemsCenter]}>
          <BaseText>More Events From:</BaseText>
          <BaseButton
            type="FLAT"
            text={`Bussiness`}
            textColor={Colors.btnPrimaryText}
            btnBackgroundColor={Colors.btnPrimary}
            btnStyles={[
              {
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: Colors.btnPrimaryText,
              },
              Gutters.smallHPadding,
              Gutters.regularHMargin,
            ]}
          />
        </View>
      </View>
  
      <Chart />
    </SafeAreaView>
  );
};

export default QuestionDetails;

const stylesFn = (Colors: ThemeColors) => StyleSheet.create({});
