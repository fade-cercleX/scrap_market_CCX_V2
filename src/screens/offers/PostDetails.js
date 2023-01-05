import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import ImagesSlider from '../../components/singleScrap/ImagesSlider'
import ScrapDetails from "../../components/singleScrap/ScrapDetails";
import { style } from "../../styles";
import BidsOnPost from "../../components/singleScrap/BidsOnPost";
import { ScrollView } from "react-native-virtualized-view";

const PostDetails = () => {


  return (
    <View>
      <ScrollView> 
      <ImagesSlider/>
      <View style={style.screen} > 
       <ScrapDetails/>
       <BidsOnPost/>

       </View>
       </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({

});
export default PostDetails;
