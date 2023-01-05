import React from "react";
import { View ,StyleSheet,FlatList,Image} from "react-native";
import { SemiBold, Text } from "../../layout/Text";
import { style } from "../../styles/index";
import { colors } from "../../styles/color";
import {EvilIcons,Ionicons ,Feather,MaterialCommunityIcons} from 'react-native-vector-icons'



const MyActiveBids = ()=>{
    const data = [1,2,3,4,5,5,5]
    const renderItem = ()=>{
      return(
          <View style={styles.renderItem} >
              <Image source={require("../../../assets/images/user.jpg")} style={styles.image} />
             <View style={{width:"80%",...style.ml_2}} >
             <View style={{...style.row,...style.s_b}} > 
              <View style={style.row} >
                  <SemiBold style={{color:colors.green,...style.mv_1}} >₹794.00/</SemiBold><Text>kg</Text>
              </View>
              <Text>20 tonnes</Text>
              </View>
                 <View style={style.row} >
                    <Ionicons name='location-outline' size={18} color={colors.primary}  />
                    <Text style={style.ml_1} >Tamil Nadu</Text>
                   </View>
  
                   <View style={{...style.row,...style.mv_1}} >
                   <Feather name="truck" size={18} color={colors.primary} />
                    <Text style={style.ml_1} >Transport Available</Text>
                   </View>
  
                   <View style={style.row} >
                    <MaterialCommunityIcons name='office-building-outline' size={18} color={colors.primary}  />
                    <Text style={style.ml_1} >No site visited</Text>
                   </View>
              </View>
          </View>
      )
    }
    return(
        <View>
            <FlatList
            data={data}
            renderItem={(item)=> renderItem(item) }
             showsVerticalScrollIndicator={false}
             style={{paddingHorizontal:10}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:50,
        height:50
    },
    renderItem:{
        flexDirection:"row",
        backgroundColor:"#fff",
        borderRadius:7,
        paddingHorizontal:10,
        paddingVertical:8,
        marginVertical:7,
        alignItems:"center",
        shadowColor:"rgba(230,230,230,0.025)",
        shadowOpacity:1.9,
        elevation:1,
        shadowOffset:{ 
          width:0,
          height:4
        },
    }
})
export default MyActiveBids