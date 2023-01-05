import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { style } from '../../styles/index'
import { GrayText, SemiBold } from '../../layout/Text'

const AboutUs = () => {
  return (
    <View style={style}>
        {/* <Image source={require('../../assets/images/cerclex.png')}/> */}
      <SemiBold>Infinite Cercle Private Limited (CercleX)</SemiBold>
      <GrayText>Tech enabled waste management company</GrayText>
      <SemiBold>our mission creating a world without waste</SemiBold>
      <Text></Text>
    </View>
  )
}
const styles = StyleSheet.create({})

export default AboutUs
