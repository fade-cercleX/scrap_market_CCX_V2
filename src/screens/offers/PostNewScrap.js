import React from "react";
import {
  View,
  Switch,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SemiBold, Text, GrayText } from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import { Button } from "../../layout/Button";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostScrap = () => {
  const navigate = useNavigation();
  return (
    <ScrollView style={{ ...style.container, ...style.screen, ...style.pt_2 }}>
      <Text>What scrap do you want to sell? </Text>
      <TextInput style={style.inputText} placeholder="Search scraps..." />
      <Text>Available Quantity (in tonnes)</Text>
      <TextInput style={{ ...style.inputText }} placeholder="Ex: 20 Tonnes" />
      <Text>Ex-factory Price (per kg)</Text>
      <TextInput style={style.inputText} placeholder="Ex: 40/kg" />

      <View style={{ ...style.row, ...style.s_b, ...style.mv_2 }}>
        <Text>Estimated Cost</Text>
        <Text style={{ color: colors.green }}>₹ 0.00</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => navigate.navigate("SelectLocation")}
      >
        <View style={{ ...style.row, ...style.s_b, ...style.inputText }}>
          <View style={{ ...style.row }}>
            <Ionicons
              name="location-outline"
              size={20}
              color={colors.primary}
            />
            <GrayText>Select your location</GrayText>
          </View>
          <MaterialIcons name="navigate-next" size={24} />
        </View>
      </TouchableWithoutFeedback>

      <View style={{ ...style.row, ...style.s_b, ...style.mt_1 }}>
        <View style={{ ...style.row }}>
          <Feather name="truck" size={24} color={colors.primary} />
          <Text style={style.ml_1}>Can you arrange for transportation</Text>
        </View>
        <Switch />
      </View>
      <View style={{ ...style.row, ...style.s_b }}>
        <View style={{ ...style.row }}>
          <MaterialCommunityIcons
            name="office-building-outline"
            size={24}
            color={colors.primary}
          />
          <Text style={style.ml_1}>Need site inspection?</Text>
        </View>
        <Switch />
      </View>
      <Button>
        {" "}
        <SemiBold>Post requirements for seller to bid</SemiBold>
      </Button>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default PostScrap;
