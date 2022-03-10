import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import {  } from "expo-status-bar";
// import fonts from "./assets/fonts";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Button from "./components/Button";
// import Filters from "./components/Filters";
// import Labels from "./components/Labels";
// import Header from "./components/NavigationHeaders";
// import PlayGround from "./components/PlayGround";
// import RangeSlider from "./components/SingleRangeSlider";
// import Rating from "./components/Rating";
// import Switch from "./components/Switch";
// import Tags from "./components/Tags";
// import ProductBag from "./components/ProductBag";
// import ProductCartListCatalog from "./components/ProductCartListCatalog";
// import ProductCartListOrderInformation from "./components/ProductCartListOrderInformation";
// import CategoryCard from "./components/CategoryCard";
// import ProductCardListFavourites from "./components/ProductCardListFavourites";
// import PromoCodeCard from "./components/PromoCodeCard";
// import ProductCardModuleFavourite from "./components/ProductCardModuleFavourite";
// import ProductCardModuleCatalog from "./components/ProductCardModuleCatalog";
// import AddressCard from "./components/AddressCards";
// import OrderCard from "./components/OrderCard";

export default function App() {
  // const [heart, setHeart] = useState(true);
  const [add, setAdd] = useState(true);
  const [click, setClick] = useState(false);
  return (
    <View style={styles.container}>
      {/* <OrderCard /> */}
      <Button.CameraButton />
      <Button.AddButton />
      <Button.SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 10,
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "PoppinsRegular",
  },
});
