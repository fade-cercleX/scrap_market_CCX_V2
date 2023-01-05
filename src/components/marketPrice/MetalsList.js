import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableNativeFeedbackBase,
  TouchableOpacity
} from "react-native";
import React from "react";
import { style } from "../../styles";
import { MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const MetalsList = () => {
  const data1 = [1, 2, 3, 5, 5, 5, 5];
  const navigation = useNavigation();

  const renderItem = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Cities")}
      >
        <View style={styles.listItem}>
          <View style={style.row}>
            <Image
              source={require("../../../assets/images/user.jpg")}
              style={styles.image}
            />
            <Text style={style.ml_1}>Copper LDC (10 cities)</Text>
          </View>
          <MaterialIcons name="navigate-next" size={24} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ ...style.screen }}>
      <FlatList
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data1}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(photo) => photo.id}
      />
    </View>
  );
};

export default MetalsList;

const styles = StyleSheet.create({
  renderItem: {
    backgroundColor: "#6f2da8",
    paddingHorizontal: 25,
    marginHorizontal: 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 55,
    padding: 8,
    borderRadius: 3,
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 0.4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    marginVertical: 4,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 7,
  },
});
