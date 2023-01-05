import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { style } from "../styles";
import { MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlasticScraps = () => {
  const navigate = useNavigation();
  const data1 = [1, 2, 3, 5];

  const renderItem = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigate.navigate("Cities")}>
        <View style={styles.listItem}>
          <View style={style.row}>
            <Image
              source={require("../../assets/images/user.jpg")}
              style={styles.image}
            />
            <Text style={style.ml_1}>Copper LDC (10 cities)</Text>
          </View>
          <MaterialIcons name="navigate-next" size={24} />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={style.screen}>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data1}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(photo) => photo.id}
        style={{ marginVertical: 20 }}
      />
    </View>
  );
};

export default PlasticScraps;

const styles = StyleSheet.create({
  renderItem: {
    backgroundColor: "#6f2da8",
    paddingHorizontal: 25,
    marginHorizontal: 5,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 60,
    padding: 8,
    borderRadius: 7,
    marginVertical: 5,
    shadowColor:"rgba(230,230,230,0.025)",
          shadowOpacity:1.9,
          elevation:1,
          shadowOffset:{ 
            width:0,
            height:4
          },
          marginBottom:10
  },

  image: {
    width: 55,
    height: 55,
  },
});
