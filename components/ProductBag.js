import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductBag({
  productName = "PullOver",
  productColor = "Black",
  productSize = "L",
  price = 50,
  onPress,
  image = "https://thumbs.dreamstime.com/b/fashion-portrait-pretty-sweet-young-woman-blowing-red-lips-wearing-black-hat-sunglasses-coat-over-grey-background-79064183.jpg",
}) {
  const [number, setNumber] = useState(1);
  const [disableAdd, setDisableAdd] = useState(false);
  const [disableRemove, setDisableRemove] = useState(false);

  function itemAdd() {
    if (number < 10) {
      setNumber(number + 1);
    } else {
      alert("Max Items allowed is 10");
    }
  }
  function itemRemove() {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      alert("select atleast one item");
    }
  }
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
          width: 104,
          height: 104,
        }}
      />
      <View style={styles.content}>
        <View style={styles.secondaryContent}>
          <View>
            <Text>{productName}</Text>
            <View style={styles.data}>
              <View style={styles.viewOne}>
                <Text style={styles.textOne}>
                  Color: <Text style={styles.textTwo}>{productColor}</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.textOne}>
                  Size: <Text style={styles.textTwo}>{productSize}</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => {
                itemRemove();
                onPress();
                console.log("Item Deleted");
              }}
            >
              <MaterialIcons name="remove" size={25} color="grey" />
            </TouchableOpacity>
            <Text style={styles.textThree}>{number}</Text>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => {
                itemAdd();
                onPress();
                console.log("Item Added");
              }}
            >
              <MaterialIcons name="add" size={25} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.secondaryContent2}>
          <TouchableOpacity
            onPress={() => {
              console.log("Menu Pressed");
            }}
          >
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </TouchableOpacity>
          <Text>{price * number}$</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 104,
    backgroundColor: "#FFF",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    marginVertical: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-between",
  },
  data: {
    flexDirection: "row",
  },
  icons: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 5,
    backgroundColor: "#FFF",
  },
  quantity: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondaryContent: {
    flex: 2,
    justifyContent: "space-between",
  },
  secondaryContent2: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  textOne: { color: "grey", fontSize: 11 },
  textTwo: { color: "black" },
  viewOne: { marginRight: 20 },
  textThree: { fontSize: 14 },
});
