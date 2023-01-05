import React from "react";
import { View, StyleSheet, FlatList,Image,TouchableWithoutFeedback } from "react-native";
import { SemiBold, Text } from "../layout/Text";
import { colors } from "../styles/color";
import { style } from "../styles/index";
import { useNavigation } from "@react-navigation/native";

const ScrapsList = () => {
  const data = [1,2,3,2,2,2,2]
  const navigation = useNavigation()
  const renderItem = (item, index, separators) => {
    return (
      <TouchableWithoutFeedback onPress={()=> navigation.navigate('PostDetails')}> 
      <View
        style={styles.renderItem}
        key={item.key}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
      >
        <View>
            <Image
              source={require("../../assets/images/images.jpg")}
              style={styles.image}
            />
          <View style={styles.descrption} >
            <SemiBold style={{color:colors.white}} >Copper Wires</SemiBold>
            <Text style={{color:colors.white}} >Location: Tamil Nadu</Text>
            <Text style={{color:colors.white}} >Transport : Available</Text>
            <View style={{...style.row,...style.s_b,...style.mv_1}} >
              <View style={style.row}><SemiBold style={{color:colors.white}} >₹789</SemiBold><Text style={{color:colors.white}} >/kg</Text></View>
              <Text style={{color:colors.white}} >1 tonne</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={style.screen} > 
      <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
       numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index, separators }) =>
          renderItem(item, index, separators)
        }
      />
      </View>
  );
};

const styles = StyleSheet.create({
  image:{
    height:200,
    borderRadius:8, 
    resizeMode: 'contain',
    width:'100%'
  },
  descrption:{
    backgroundColor:"rgba(0, 0, 0, 0.6)",
    width:"100%",
    position:"absolute",
    bottom:0,
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    padding:5,
    height:100
  },
  renderItem:{
     marginVertical:8,
     width:"48%",
     
  }
});
export default ScrapsList;
