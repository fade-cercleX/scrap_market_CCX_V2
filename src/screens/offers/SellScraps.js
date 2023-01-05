import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, SemiBold } from "../../layout/Text";
import { MaterialIcons, Fontisto } from "react-native-vector-icons";
import { colors } from "../../styles/color";
import { style } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import SingleScrapPost from "../../components/singleScrap/SingleScrapPost";

const SellScrap = () => {
  const navigation = useNavigation();
  const data = [1, 5, 6, 8, 2, 5, 5, 5];

  return (
    <View style={{ height: "100%", ...style.screen }}>
      <FlashList
        data={data}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SingleScrapPost item={item} />}
        estimatedItemSize={400}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <View style={{ ...style.inputText, ...style.mt_2, ...style.row }}>
              <Fontisto
                name="search"
                size={24}
                color={colors.primary}
                style={style.mr_1}
              />
              <TextInput placeholder="Search scraps..." />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("PostScrap")}
            >
              <View style={styles.post_btn}>
                <View style={{ ...styles.btn_lines, ...style.mt_1 }}>
                  <View style={{ ...styles.line, width: 75 }}></View>
                  <View
                    style={{ ...styles.line, width: 120, ...style.mt_1 }}
                  ></View>
                </View>
                <View>
                  <MaterialIcons
                    name="post-add"
                    size={38}
                    color={colors.primary}
                  />
                </View>
                <View style={{ ...style.ml_1, ...style.mt_1 }}>
                  <SemiBold>Post your scraps</SemiBold>
                  <View style={{ ...style.row, ...style.s_b }}>
                    <Text
                      style={{
                        width: "80%",
                        ...style.mv_1,
                        color: colors.blue_gray,
                      }}
                    >
                      These post listed for buyer to bid on buying.
                    </Text>
                    <View style={styles.navigate_next_icon}>
                      <MaterialIcons
                        name="navigate-next"
                        size={24}
                        color={colors.white}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <SemiBold style={{ ...style.mt_1, color: colors.color_hex }}>
              Sell scraps to these offers
            </SemiBold>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post_btn: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 1,

    shadowColor: "rgba(232,230,230,0.25)",
    shadowOpacity: 1.9,
    elevation: 0.7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  line: {
    backgroundColor: "#E9D7F9",
    height: 6,
    borderRadius: 31,
  },
  btn_lines: {
    position: "absolute",
    top: 0,
    right: -4,
    alignItems: "flex-end",
  },
  navigate_next_icon: {
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
});
export default SellScrap;
