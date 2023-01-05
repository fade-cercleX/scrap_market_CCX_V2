import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  Fontisto,
  Ionicons,
} from "react-native-vector-icons";
import { colors } from "../styles/color";
import { style } from "../styles/index";
import { Text } from "../layout/Text";
import { useNavigation } from "@react-navigation/native";

const Control = () => {
  const navigation = useNavigation();
  return (
    <View style={{ ...style.row, ...style.s_b }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("buy scrap")}
      >
        <View style={styles.icon}>
          <FontAwesome5
            name="hand-holding-usd"
            size={30}
            color={colors.primary}
          />
          <Text>Buy Scrap</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("sell-scrap")}
      >
        <View style={styles.icon}>
          <Fontisto
            name="shopping-basket-add"
            size={28}
            color={colors.primary}
          />
          <Text>Sell Scrap</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> navigation.navigate('market-price') } > 
      <View style={styles.icon}>
        <Ionicons name="md-stats-chart" size={28} color={colors.primary} />
        <Text>Market Prices</Text>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    width: 260,
    paddingVertical: 18,
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "#ddd",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1.2,
    height: 100,
    marginRight: 10,
  },
  icon: {
    backgroundColor: "rgba(249, 241, 255, 0.7)",
    padding: 10,
    paddingVertical: 13,
    borderRadius: 7,
    flexDirection: "column",
    alignItems: "center",
    height: 80,
    width: "31.5%",
    justifyContent: "space-between",
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 0.5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  next_icon: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
  },
  scrolling: {
    height: 110,
  },
});
export default Control;
