import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Bold, SemiBold } from "../../layout/Text";
import AppIntroSlider from "react-native-app-intro-slider";
import { style } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/color";

const IntroApp = () => {
  const navigate = useNavigation();
  const slides = [
    {
      key: 1,
      title: "Sell your scraps",
      text: "You can sell your scraps using credits by just simply entering the quantity and price with the images.",
      image: require("../../../assets/images/intro1.png"),
    },
    {
      key: 2,
      title: "Bid on scraps",
      text: "For the material which you wish to buy, can bid on by using credits based on the market prices in order to buy.",
      image: require("../../../assets/images/intro2.png"),
      backgroundColor: "#febe29",
    },
    {
      key: 3,
      title: "Buy the scraps",
      text: "You can buy scraps in simple steps of entering materials, quantity and price by comparing with estimated cost.",
      image: require("../../../assets/images/intro3.png"),
      backgroundColor: "#22bcb5",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView
        style={{
          height: "100%",
          ...style.screen,
          ...styles.introScreen,
          alignContent: "center",
          ...style.mt_2
        }}
      >
        <Bold style={{ color:colors.primary }}>SCRAP MARKET</Bold>
        <Image source={item.image} style={styles.image} />
        <View style={styles.itemDescrption}>
          <Bold style={style.x_bold}>{item.title}</Bold>
          <SemiBold style={{ ...styles.center, color: "#3A363E" }}>
            {item.text}
          </SemiBold>
        </View>
      </SafeAreaView>
    );
  };

  const onDone = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigate.navigate("Login")}>
        <View style={{ padding: 12 }}>
          <SemiBold>Done</SemiBold>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const buttonLabel = (text) => {
    return (
      <View style={{ padding: 12 }}>
        <SemiBold style={{ color: "#000" }}>{text}</SemiBold>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        showSkipButton
        activeDotStyle={{ backgroundColor: "#6f2da8", width: 22 }}
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => onDone()}
        style={styles.appIntro}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appIntro: {
    flex: 1,
  },
  itemDescrption: {
    alignItems: "center",
    marginTop: 10,
  },

  image: {
    width: "80%",
    height: "50%",
    resizeMode: "contain",
    // marginVertical: 40,
  },
  center: {
    textAlign: "center",
  },
  introScreen: {
    backgroundColor: "#ffff",
    alignItems: "center",
  },
});
export default IntroApp;
