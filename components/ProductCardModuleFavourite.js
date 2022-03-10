import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Button from "./Button";
import Labels from "./Labels";
import Rating from "./ProductRating";

const width = Dimensions.get("screen").width;
// console.log(width);
export default function ProductCardModuleFavourite({
  color = "Black",
  Size = "L",
  price = 50,
  rating = 4,
  name = "Shirt",
  newProduct = false,
  discount = "-30%",
  prevPrice = "50$",
  discountPrice = "30$",
  itemSoldOut = false,
  image = "https://picsum.photos/200",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageCard}>
          <Image source={{ uri: image }} style={styles.imageStyle} />
          <View style={styles.itemStatus}>
            {itemSoldOut ? null : newProduct ? (
              <Labels text="New" bgColor="black" />
            ) : discount ? (
              <Labels
                discount={discountPrice}
                prevPrice={prevPrice}
                text={discount}
                bgColor="#DB3022"
              />
            ) : null}
          </View>
          <View style={styles.close}>
            <Pressable
              onPress={() => {
                console.log("Close Pressed");
              }}
            >
              <AntDesign name="close" size={20} color="black" />
            </Pressable>
          </View>
          {itemSoldOut ? null : (
            <View style={styles.addToBagSmall}>
              <Button.AddToBagSmall onPress={console.log("ButtonPressed")} />
            </View>
          )}
        </View>

        <View style={styles.content}>
          <View style={styles.rating}>
            <Rating rating={rating} />
            <Text> ({rating})</Text>
          </View>
          <Text style={styles.lime}>Lime</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.colorAndSizeView}>
            <Text style={styles.colorAndSize}>
              <Text style={styles.colorAndSizeColor}>Color:</Text> {color}
            </Text>
            <Text style={styles.colorAndSize}>
              {" "}
              <Text style={styles.colorAndSizeColor}>Size:</Text> {Size}
            </Text>
          </View>
          <View style={styles.value}>
            {itemSoldOut ? (
              <Text style={styles.itemSoldOutPrice}>{price}$</Text>
            ) : discount ? (
              <View style={styles.prevPriceView}>
                <Text style={styles.prevPrice}>{prevPrice}</Text>

                <Text style={styles.discountPrice}>
                  {"  "}
                  {discountPrice}
                </Text>
              </View>
            ) : (
              <Text style={styles.price}>{price}$</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFF",
    width: width / 2 - 20,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "flex-start",
    elevation: 2,
  },
  imageCard: { width: width / 2 - 20 },
  imageStyle: { height: 200, width: width / 2 },
  itemStatus: { position: "absolute", top: 5, left: 5 },
  close: { position: "absolute", top: 10, right: 10 },
  addToBagSmall: { position: "absolute", right: 0, bottom: -15 },
  content: { padding: 5, width: "100%" },
  rating: { flexDirection: "row", alignItems: "center" },
  lime: { fontSize: 11, color: "#9B9B9B" },
  name: { fontSize: 16 },
  colorAndSizeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  colorAndSize: { fontSize: 11 },
  colorAndSizeColor: { color: "#9B9B9B" },
  itemSoldOutPrice: { color: "black", fontSize: 14 },
  prevPriceView: { flexDirection: "row" },
  prevPrice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  discountPrice: { color: "#DB3022", fontSize: 14 },
  price: { color: "black", fontSize: 14 },
});
