import { colors } from "./color";
import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('window')

export const style = {
  primary: "#6F2DA8",
  header: {
    backgroundColor: colors.primary,
    flex:1,
  },
  inputText: {
    backgroundColor: colors.white,
    borderColor: "#D8D8D8",
    height: 54,
    
    width: "100%",
    padding: 10,
    borderRadius: 7,
    marginVertical: 6,
    borderColor: colors.borderColor,
    borderWidth: 1,
    fontSize: 16,
    fontFamily: "circular",
  },

  inputArea: {
    backgroundColor: colors.white,
    borderColor: "#999",
    height: 75,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginVertical: 12,
    borderColor: colors.borderColor,
    borderWidth: 2,
    fontSize: 16,
  },
  smallText: {
    fontSize: 10,
    fontWeight: "400",
    fontFamily: "circular",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "circular",
  },
  grayText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#808080",
    fontFamily: "circular",
  },
  semiBold: {
    fontWeight: "500",
    fontSize: 18,
    fontFamily: "circular",
  },
  mh_1:{
    marginHorizontal:10
  },
  bold: {
    fontWeight: "500",
    fontSize: 22,
    fontFamily: "circular",
  },
  x_bold:{
    fontWeight: "600",
    fontSize: 28,
    fontFamily: "circular",
  },
  safeAreaView: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundPrimary,
  },

  logo: {
    borderRadius: 50,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  ml_1: {
    marginLeft: 10,
  },
  ml_2:{
    marginLeft:20
  },
  column: {
    flexDirection: "column",
    alignItems: "start",
  },

  form: {
    width: "100%",
    marginVertical: 10,

  },
  footer: {
    bottom: 0,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  s_b: {
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  mt_1: {
    marginTop: 10,
  },
  mt_2: {
    marginTop: 20,
  },
  mb_1: {
    marginBottom: 20,
  },
  mr_1: {
    marginRight: 10,
  },
  mv_1: {
    marginBottom: 5,
    marginTop: 5,
  },
  mv_2: {
    marginBottom: 10,
    marginTop: 10,
  },
  mb_2:{
    marginBottom:20
  },
  usermage: {
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  notificationImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  border: {
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  screen: {
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor:"#f7f7f7",
  },
  start: {
    alignItems: "flex-start",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    paddingHorizontal:10
  },
  pt_2:{
   paddingTop:20
  },

  pv_1:{
    paddingVertical:10
  },
  appLogo:{
    width:140,
    height:140,
    marginVertical:20
  },

};
