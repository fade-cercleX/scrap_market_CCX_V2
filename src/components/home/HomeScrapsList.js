import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SemiBold, Text } from "../../layout/Text";
import { colors } from "../../styles/color";
import { style } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { Entypo } from "react-native-vector-icons";
import SingleScrapPost from "../singleScrap/SingleScrapPost";
const HomeScrapsList = () => {
  const data = [1, 2, 3, 2, 2, 2];
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ ...style.row, ...style.s_b, ...style.mt_2 ,...style.mh_1}}>
        <SemiBold>Scraps in Coimbatore</SemiBold>

        <TouchableWithoutFeedback onPress={() => navigation.navigate("offers")}>
          <View style={style.row}>
            <Text style={{ color: colors.primary }}>View all</Text>
            <Entypo name="chevron-small-right" size={24} color="#6f2da8" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <FlashList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <SingleScrapPost item={item} />}
          scrollEnabled={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    borderRadius: 8,
    resizeMode: "contain",
    width: "100%",
  },
  descrption: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    padding: 5,
    height: 100,
  },
  renderItem: {
    marginVertical: 8,
    width: "48%",
    
  },
});
export default HomeScrapsList;
