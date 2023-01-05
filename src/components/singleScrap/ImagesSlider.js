import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const ImagesSlider = () => {
    const images =[
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree"
      ]
  return (
    <View style={styles.imagesSlider}>
    <SliderBox
      images={images}
      ImageComponentStyle={{
        borderRadius: 15,
        width: "95%",
        height:200,
        borderRadius:7
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "rgba(128, 128, 128, 0.92)",
      }}
      dotColor="#6f2da8"
      inactiveDotColor="#90A4AE"
    />
  </View>
  )
}

export default ImagesSlider

const styles = StyleSheet.create({
    imagesSlider: {
        marginVertical: 20,
      },
})