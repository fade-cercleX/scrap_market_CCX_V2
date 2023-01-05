import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { Text, Bold, SemiBold } from "../../layout/Text";
import { style } from "../../styles/index";
import { AntDesign } from "react-native-vector-icons";
import { colors } from "../../styles/color";

const SubscriptionPlans = () => {
  const data = [1, 3, 5, 8, 5];
  const renderItem = () => {
    return (
      <View style={styles.renderItem}>
        <Image
          source={require("../../../assets/images/background-white.png")}
          style={styles.image_bg}
        />
        <View style={styles.renderItem_descrption}>
            <View style={styles.icon} > 
          <AntDesign name="creditcard" size={22} color={colors.green} />
          </View>
          <View style={style.row}>
            <Text>1 Month - </Text>
            <Text style={{ color: colors.primary }}>₹1499</Text>
          </View>
          <View style={style.row}>
            <Image
              source={require("../../../assets/images/credit.png")}
              style={styles.credit_image}
            />
            <SemiBold style={style.mv_2}> 299 coins</SemiBold>
          </View>
          <View style={styles.btn}>
            <Text style={{ color: colors.primary }}>Subscribe</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.screen}>
      <FlatList
        renderItem={(item) => renderItem(item)}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={data}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  credit_image: {
    width: 22,
    height: 22,
  },
  renderItem: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 7,
    width: "48%",
    height: 170,
    shadowColor:"rgba(230,230,230,0.025)",
    shadowOpacity:1.9,
    elevation:1,
    shadowOffset:{ 
      width:0,
      height:4
    },

  },
  btn: {
    borderColor: colors.primary,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 15,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  image_bg: {
    width: "100%",
    height: 80,
    borderRadius:7

  },
  renderItem_descrption: {
    position: "absolute",
    top: 0,
    // height: 180,
    width: "100%",
    alignItems: "center",
    borderRadius: 7,
    paddingVertical: 15,
    justifyContent: "center",

  },
  icon:{
    backgroundColor:"#EBFFED",
    width:40,
    height:40,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    // borderColor:"#6f2da8",
    // borderWidth:1
  }
});
export default SubscriptionPlans;
