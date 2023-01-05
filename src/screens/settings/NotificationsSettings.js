import React from 'react'
import{ View,Switch,StyleSheet } from 'react-native'
import { style } from '../../styles/index'
import { Text,Bold ,SemiBold,GrayText} from '../../layout/Text'
import {Ionicons,Fontisto} from 'react-native-vector-icons'
import { colors } from '../../styles/color'

const NotificationSetting = ()=>{
    return(
        <View style={style.screen}>
            <View style={{...style.border,...styles.pb_2}}>
              <Bold>What you will receive?</Bold>
              <GrayText style={style.mt_1} >CercleX may still send you important notification about your account and content outside your preferred notification settings.</GrayText>
           </View>

           <View style={style.mv_2}>
             <View>
               <Bold>Updates</Bold>
               <GrayText style={style.mt_1}>You will receive notifications for requested and remaining qr codes, total qr scanned on each day etc.,</GrayText>
             </View>

             <View style={{...style.row,...style.s_b}}>
                <View style={style.row}> 
                  <Ionicons name='notifications-outline' color={colors.primary} size={24} />
                  <SemiBold style={style.ml_1}>Push Notifications</SemiBold>
                </View>
                <Switch/>
             </View>

             <View style={{...style.row,...style.s_b}}>
                <View style={style.row}> 
                  <Fontisto name='email' color={colors.primary} size={24} />
                  <SemiBold style={style.ml_1} >Email</SemiBold>
                </View>
                <Switch/>
             </View>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pb_2:{
        paddingBottom:20
    }
})
export default NotificationSetting