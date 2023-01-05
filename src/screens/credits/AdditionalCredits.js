import React from "react";
import { View, StyleSheet, Image, FlatList ,Text} from "react-native";
import { Bold, SemiBold} from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";

const AdditionalCredits = () => {
  const data = [1, 5, 4, 8, 8, 5];

  const renderItem = () => {
    return (
      <View style={styles.renderItem}>
        <Image
          source={require("../../../assets/images/background-white.png")}
          style={styles.image_bg}
        />
        <View style={styles.descrption}>
          <View style={{ ...style.row }}>
            <Image source={require("../../../assets/images/credit.png")} style={styles.credit_image} />
            <View style={style.ml_1}>
              <SemiBold style={{ color: colors.primary }}>₹2,500</SemiBold>
              <Text style={{ color: colors.green ,...style.x_bold }}>625 coins</Text>
            </View>
          </View>
          <View style={{ height: "100%", justifyContent: "flex-end" }}>
            <View style={styles.btn}>
              <Text style={{ color: colors.white }}>Buy</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.screen}>
      <FlatList
      ListHeaderComponent={
        <View style={styles.activeItem}>
        <Image
          source={require("../../../assets/images/background.png")}
          style={styles.image_bg}
        />
        <View style={styles.descrption}>
          <View style={{ ...style.row }}>
            <Image source={require("../../../assets/images/credit.png")} style={styles.credit_image} />
            <View style={style.ml_1}>
              <SemiBold style={{ color: colors.white }}>₹2,500</SemiBold>
              <Text style={{ color: colors.white ,...style.x_bold }}>625 coins</Text>
            </View>
          </View>
          
        </View>
      </View>
      }
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => renderItem(item)}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeItem:{
    backgroundColor:"#6f2da8",
    borderWidth:1,
    width: "100%",
    height: 120,
    borderRadius: 7,
    marginVertical: 10,
    shadowColor:"rgba(230,230,230,0.025)",
            shadowOpacity:1.9,
            elevation:1,
            shadowOffset:{ 
              width:0,
              height:4
            },
  },
  image_bg: {
    width: "100%",
    height: 75,
    borderRadius:7
  },
  renderItem: {
    borderColor:"#D4B4EF",

    borderWidth:1,
    width: "100%",
    height: 120,
    borderRadius: 7,
    marginVertical: 10,
    shadowColor:"rgba(230,230,230,0.025)",
            shadowOpacity:1.9,
            elevation:1,
            shadowOffset:{ 
              width:0,
              height:4
            },
            backgroundColor:"#fff"
  },
  descrption: {
    position: "absolute",
    top: 0,
    height: 120,
    width: "100%",
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#6f2da8",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 7,
  },
  credit_image:{
    width:60,
    height:60
  }
});
export default AdditionalCredits;
