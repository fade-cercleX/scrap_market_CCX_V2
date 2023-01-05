import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import { Text, SemiBold } from "../../layout/Text";
import { SafeAreaView } from "react-native-safe-area-context";

const TopMarketRate = () => {
  const data = [1, 2,1, 3];

  const renderItem = (item, index, separators) => {
    return (
      <View
        style={styles.renderItem}
        key={item.key}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
      >
        <View style={{...style.row,...style.s_b}}>
          <View style={{ ...style.row }}>
            <Image source={require('../../../assets/images/user.jpg')} style={styles.image}  />
            <Text style={style.ml_1} >Copper Wire</Text>
          </View>
          <Text style={{color:colors.green}} >₹789</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.topMarketPrice}>
    
      <View style={{...style.box,...style.mv_2}} > 
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index, separators }) =>
          renderItem(item, index, separators)
        }
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    image:{
        width:30,
        height:30,
        borderRadius:8
    },
    renderItem:{
        marginBottom:1,
        paddingVertical:8
      },
      topMarketPrice:{
        borderRadius:7,
        backgroundColor:"#fff",
        borderColor:"#f7f7f7",
        borderWidth:0.9,
        paddingHorizontal:10,
        paddingVertical:7,
        shadowColor:colors.gray,
        shadowOpacity:0.8,
        elevation:0.5,
        shadowOffset:{ 
          width:0,
          height:1
        },
      }
});
export default TopMarketRate;
