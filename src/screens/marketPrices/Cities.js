import React from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { SemiBold, Text } from "../../layout/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../../styles";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../../styles/color";
import { MaterialIcons } from "react-native-vector-icons";

const Cities = () => {
  const screenWidth = Dimensions.get("window").width;

  const charts = [1, 5, 1];
  const renderItem = () => {
    return (
      <View style={styles.renderItem}>
        <View style={{ ...style.row, ...style.s_b }}>
          <SemiBold>Coimbatore</SemiBold>

          <View>
            <Text>25 AUG 2022</Text>
            <View style={style.row}>
              <Text style={{ color: colors.green }}>+0.80</Text>
              <SemiBold style={{ color: colors.primary }}> ₹30.8</SemiBold>
            </View>
          </View>
        </View>

        <View style={{ ...style.row, ...styles.itemChart }}>
          <LineChart
            data={data}
            width={screenWidth - 0}
            height={85}
            chartConfig={chartConfig}
            withVerticalLines={false}
            withHorizontalLines={false}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            bezier
          />
          <MaterialIcons name="navigate-next" size={24} />
        </View>
      </View>
    );
  };

  const data = {
    datasets: [
      {
        data: [0, 5, 6, 5, 5, 4, 4, 4, 4],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => "#6f2da8",
    fillShadowGradientFrom: "#F1E0FF",
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientTo: "#f9f9f9",
    fillShadowGradientToOpacity: 1,
    withInnerLines: false,
    withShadow: false,
    labelColor: () => `rgba(0, 0, 0,0.6)`,

    propsForDots: {
      r: "3.5",
      strokeWidth: "0",
      stroke: "#6f2da8",
    },
    strokeWidth: 4,
  };
  return (
    <SafeAreaView style={style.container}>
      <SemiBold style={style.mv_2}>Paper - Tamil News Paper</SemiBold>
      <FlatList data={charts} renderItem={(item) => renderItem(item)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 7,
    height: 150,
    marginVertical: 7,
  },
  itemChart: {
    position: "absolute",
    top: 50,
    left: -45,
    alignItems: "flex-end",
  },
});
export default Cities;
