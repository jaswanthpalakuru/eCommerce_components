import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

function Button({ children, onPress, style }) {
  return (
    <Pressable
      style={styles.button}
      android_ripple={{ borderless: true, color: "#FFF" }}
      android_disableSound={true}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

function SearchButton({ onPress }) {
  return (
    <Button onPress={onPress}>
      <View style={styles.addToBagView}>
        <FontAwesome name="search" size={15} color="white" />
      </View>
    </Button>
  );
}

function CameraButton({ onPress }) {
  return (
    <Button onPress={onPress}>
      <View style={styles.addToBagView}>
        <FontAwesome5 name="camera" size={15} color="white" />
      </View>
    </Button>
  );
}

function AddToBagSmall({ onPress }) {
  return (
    <Button
      onPress={() => {
        onPress;
        console.log("AddtoBag Pressed");
      }}
    >
      <View style={styles.addToBagView}>
        <Fontisto name="shopping-bag" size={15} color="white" />
      </View>
    </Button>
  );
}

function AddToFavourites({ onPress }) {
  return (
    <Button onPress={onPress}>
      <View style={styles.addFavouriteView}>
        <AntDesign name="heart" size={15} color="white" />
      </View>
    </Button>
  );
}

function AddToFavouritesWhite({ onPress }) {
  const [heart, setHeart] = useState(true);
  return (
    <Button onPress={(_) => setHeart(!heart)}>
      <View style={styles.addFavouriteWhiteView}>
        {heart ? (
          <AntDesign name="hearto" size={15} color="black" />
        ) : (
          <AntDesign name="heart" size={15} color="#DF4538" />
        )}
      </View>
    </Button>
  );
}

function AddButton({ onPress, add }) {
  return (
    <Button onPress={onPress}>
      <View style={styles.addButtonView}>
        {add ? (
          <Ionicons name="add" size={24} color="black" />
        ) : (
          <Ionicons name="add-circle" size={24} color="black" />
        )}
      </View>
    </Button>
  );
}

function SocialMediaGoogle({ onPress }) {
  return (
    <Button onPress={onPress}>
      <View style={styles.socialMediaButtonView}>
        <AntDesign name="google" size={24} color="black" />
      </View>
    </Button>
  );
}
function SocialMediaFacebook({ onPress }) {
  return (
    <Button onPress={onPress}>
      <View style={styles.socialMediaButtonView}>
        <AntDesign name="facebook-square" size={24} color="black" />
      </View>
    </Button>
  );
}

export default {
  // Button,
  SearchButton,
  CameraButton,
  AddToBagSmall,
  AddToFavourites,
  AddToFavouritesWhite,
  AddButton,
  SocialMediaGoogle,
  SocialMediaFacebook,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 36,
    height: 36,
  },
  aroundMargin: {
    margin: 17,
  },
  cameraButton: {
    backgroundColor: "red",
    borderRadius: 100,
  },
  addToBagView: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DF4538",
    borderRadius: 100,
  },

  addFavouriteView: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DF4538",
    borderRadius: 100,
  },
  addFavouriteWhiteView: {
    backgroundColor: "#FFF",
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  addButtonView: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  socialMediaButtonView: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 92,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
