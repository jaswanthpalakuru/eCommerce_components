import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Rating from "./ProductRating";
import Buttons from "./Button";
import { AntDesign } from "@expo/vector-icons";
import Labels from "./Labels";

export default function ProductCardListFavourites({
  color = "Black",
  size = "L",
  price = 50,
  rating = 4,
  name = "Shirt",
  newProduct = false,
  discount = "-30%",
  prevPrice = "50$",
  discountPrice = "30$",
  itemSoldOut = true,
  image = "https://picsum.photos/200",
  onPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.card} pointerEvents={itemSoldOut ? "none" : "auto"}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.discountView}>
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
          <View style={styles.content}>
            <View style={styles.limeClose}>
              <Text style={styles.subcontent}>Lime</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("Close Pressed");
                }}
              >
                <AntDesign name="close" size={12} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.textFive}>{name}</Text>
            <View style={styles.colorSizeRating}>
              <View style={styles.pricePrevPrice}>
                <Text>
                  <Text style={styles.textFour}>Color: </Text> {color}
                </Text>
                <View style={styles.value}>
                  {itemSoldOut ? (
                    <Text style={styles.textOne}>{price}$</Text>
                  ) : discount ? (
                    <View style={styles.discountPrice}>
                      <Text style={styles.prevPrice}>{prevPrice}</Text>

                      <Text style={styles.textTwo}>
                        {"  "}
                        {discountPrice}
                      </Text>
                    </View>
                  ) : (
                    <Text style={styles.textOne}>{price}$</Text>
                  )}
                </View>
              </View>
              <View style={styles.sizeAndRating}>
                <Text>
                  <Text style={styles.textFour}>Size: </Text> {size}
                </Text>
                <Rating rating={rating} />
              </View>
            </View>
          </View>
        </View>
        {itemSoldOut ? (
          <Text style={styles.textThree}>
            Sorry, currently this item is soldout
          </Text>
        ) : (
          <View style={styles.addtoCart}>
            <Buttons.AddToBagSmall onPress={onPress} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "red",
  },
  discountPrice: { flexDirection: "row" },
  card: {
    height: 104,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
    flexDirection: "row",
  },
  pricePrevPrice: { flex: 1, justifyContent: "space-between" },
  content: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
  },
  subcontent: {
    color: "#C0C0C0",
    fontSize: 11,
    alignItems: "center",
  },
  addtoCart: {
    position: "absolute",
    bottom: -15,
    right: 10,
    // overflow: "visible",
    zIndex: 3,
    elevation: 6,
  },
  limeClose: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
  },
  view: { marginVertical: 10, marginHorizontal: 10 },
  image: { height: 104, width: 104 },
  discountView: { position: "absolute", top: 5, left: 5 },
  sizeAndRating: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textOne: { color: "black", fontSize: 14 },
  textTwo: { color: "#DB3022", fontSize: 14 },
  textThree: { color: "grey" },
  textFour: { color: "#C0C0C0" },
  textFive: { fontSize: 16 },
  textSix: { color: "black", fontSize: 14 },
  colorSizeRating: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
  prevPrice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
