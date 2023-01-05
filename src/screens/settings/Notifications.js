import React from "react";
import {View,StyleSheet,FlatList ,RefreshControl } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../../styles";
import { Text,GrayText, SemiBold,Bold } from "../../layout/Text";
import { colors } from "../../styles/color";
import {Ionicons} from 'react-native-vector-icons'


const Notification =()=>{
    const renderItem = (item)=>{
        return(
            <View
              style={styles.renderItem}>
            <Ionicons name='notifications' color={colors.primary} size={24}  />
             <View style={{...style.flex,width:"100%",...style.row,...style.start}}>
             <View style={styles.content} >
              <SemiBold>Bid accepted by the seller</SemiBold>
              <GrayText>Your bid on Copper-wire of 20Tonnes has been accepted. Now you can see the contact details of the seller.</GrayText>
            </View>
            <View>
                <Text>1/09/2022</Text>
            </View>
            </View>
          </View>
        )
    }


    return(
        <View  style={{...style.screen}} >
           <FlatList
           showsVerticalScrollIndicator={false}
         data={[1,1,141,4,4]}
         renderItem={({ item,  }) => renderItem(item)}
       />
        </View >
    )
}

const styles = StyleSheet.create({
    renderItem:{
        flexDirection:"row",
        paddingVertical:12,
        alignItems:"center",
        marginVertical:5,
        paddingHorizontal:8,
        width:"100%",
        borderBottomColor:colors.borderColor,
        borderBottomWidth:1
        },
        content:{
            alignItems:"flex-start",
            justifyContent:"flex-start",
            width:"80%",
            paddingHorizontal:5
        },

})
export default Notification