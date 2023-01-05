import react from "react";
import {View,StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AdditionalCredits from './AdditionalCredits'
import SubscriptionPlans from "./SubscriptionPlans";
import { colors } from "../../styles/color";



const Tab = createMaterialTopTabNavigator();
const PurchaseCredits = ()=>{
    return(
        <View style={{height:"100%"}}>  
        <Tab.Navigator
             tabBarOptions={{
              activeTintColor: "#fff",
              labelStyle: {
                textTransform: "uppercase",
              },
              inactiveTintColor: colors.black,
              indicatorStyle: {
                height: null,
                top: "0%",
                bottom: "0%",
                width: "52%",
                right:"0%",
                left: "0%",
                borderRadius: 30,
                backgroundColor: "#6f2da8",
              },
              style: {
                alignSelf: "center",
                width: "90%",
                borderRadius: 30,
                shadowColor:"rgba(230,230,230,0.025)",
                shadowOpacity:1.9,
                elevation:1,
                shadowOffset:{ 
                  width:0,
                  height:4
                },
                marginBottom:10
              },
              tabStyle: {
                borderRadius: 100,
              },
            }}
            swipeEnabled={true}
            style={{ with: "80%", paddingVertical: 10,backgroundColor:"#f7f7f7"}}
        >
          <Tab.Screen name="Additional Credits" component={AdditionalCredits} options={{ 
            tabBarItemStyle:{borderRadius:10},
           }}/>
          <Tab.Screen name="Subscription Plans" component={SubscriptionPlans} />
        </Tab.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({})
export default PurchaseCredits
