import React from "react";
import {
  View,
  StyleSheet,
  
  TouchableWithoutFeedback,
} from "react-native";
import { Text } from "../../layout/Text";
import TopMarketRate from "../../components/home/TopMarketRate";
import { ScrollView } from "react-native-virtualized-view";
import CreditCard from "../../components/purchaseCredits/CreditCard";
import { style } from "../../styles/index";
import Control from "../../components/Control";
import StatusCard from "../../components/purchaseCredits/StatusCard";
import HomeFooter from "../../components/home/HomeFooter";
import HomeScrapsList from "../../components/home/HomeScrapsList";
import { SemiBold, Bold } from "../../layout/Text";
import { colors } from "../../styles/color";
import { Entypo } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true} 
      style={{ backgroundColor: "#fff" }}
    >
      <View style={{ marginHorizontal: 10 }}>
        <Bold style={{ ...style.mt_1 }}>Let&apos;s find</Bold>
        <View style={{ ...style.row }}>
          <Bold style={{ color: colors.primary }}>Scrap&nbsp;</Bold>
          <Bold>for You!</Bold>
        </View>
        <CreditCard />
        <Control />
        <StatusCard />
        <View style={{ ...style.row, ...style.s_b, ...style.mv_2 }}>
          <SemiBold>Top market rates</SemiBold>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("market-price")}
          >
            <View style={style.row}>
              <Text style={{ color: colors.primary }}>View All</Text>
              <Entypo name="chevron-small-right" size={24} color="#6f2da8" />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TopMarketRate />
      </View>
      <HomeScrapsList />
      <HomeFooter />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default Home;
