import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  name: {
    color: "white",
    fontSize: 15,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2B2B2B",
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginBottom: 20
  },
  candleStickText: {
    color: "white",
    fontWeight: "700",
  },
  candleStickDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 20,
  },
  candleStickTextLabel: {
    color: 'grey',
    fontSize: 13
  },
  bodyColor: {
    backgroundColor: "#fff",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    justifyContent: "center",
    alignItems: "center",
    width:'50%'
  },
  flexEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  flexEven: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    marginVertical:10,
  },
  largeTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: 10
  },
  listWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical:10,
  },
  leftWrapper: {
    flexDirection: "row"
  },
  image: {
    height:100,
    width: 100,
    resizeMode: "contain"
  },
  title: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: 10,
  },
  subTitle: {
    fontFamily: "Archivo-Regular",
    fontSize: 10,
  },
  rightWrapper: {
    alignItems: "flex-end"
  },
  modalImage: {
    height:100,
    width: 100,
    resizeMode: "contain"
  },
  modalBoldTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: 10,
  },
  modalRegularTitle: {
    fontFamily: "Archivo-Regular",
    fontSize: 10,
  },
  modalPriceText:{
    fontSize: 24 ,
    color: 'green',
    fontWeight:"bold"
  },
  modalPriceSubText:{
    fontSize: 14,
    color: 'white'
  },
  rateText:{
    fontSize: 24,
    fontWeight:"bold"
  },
});

export default styles;
