import { StyleSheet,  View , Image,TouchableWithoutFeedback , } from 'react-native'
import React from 'react'
import { Text  ,SemiBold } from '../../layout/Text'
import { colors } from '../../styles/color';
import { style } from '../../styles';
import { useNavigation } from '@react-navigation/native';

const SingleScrapPost = ({item}) => {
    const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate("PostDetails")}
      >
        <View style={styles.renderItem} key={item.key}>
          <View>
            <Image
              source={require("../../../assets/images/images.jpg")}
              style={styles.image}
            />
            <View style={styles.descrption}>
              <SemiBold style={{ color: colors.white }}>Copper Wires</SemiBold>
              <Text style={{ color: colors.white }}>Location: Tamil Nadu</Text>
              <Text style={{ color: colors.white }}>Transport : Available</Text>
              <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
                <View style={style.row}>
                  <SemiBold style={{ color: colors.white }}>₹789</SemiBold>
                  <Text style={{ color: colors.white }}>/kg</Text>
                </View>
                <Text style={{ color: colors.white }}>1 tonne</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  )
}

export default SingleScrapPost

const styles = StyleSheet.create({
  image: {
    height: 200,
    borderRadius: 8,
    resizeMode: "contain",
    width: "100%",
  },
  descrption: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    padding: 5,
    height: 100,
  },
  renderItem: {
    margin: 8,
    width: "93%",
  },
})