import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Tag1({ onPress }) {
  const [click, setClick] = useState(false);
  return (
    <Pressable
      style={click ? styles.tag1 : styles.container1}
      android_ripple={{ color: "rgba(255,255,255, 0.4)", borderless: true }}
      onPress={() => {
        setClick(!click);
        onPress();
      }}
    >
      <Text style={styles.tagText}>Tag</Text>
    </Pressable>
  );
}
function Tag2({ onPress }) {
  const [click, setClick] = useState(false);
  return (
    <Pressable
      style={click ? styles.tag2 : styles.container2}
      android_ripple={{ color: "rgba(255,255,255, 0.4)", borderless: false }}
      onPress={() => {
        setClick(!click);
        onPress();
      }}
    >
      <Text style={styles.tagText}>Tag</Text>
    </Pressable>
  );
}

export default { Tag1, Tag2 };
const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9B9B9B",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#9B9B9B",
  },
  tag1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DF4538",
    color: "#FFF",
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
  },
  tag2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
    color: "#FFF",
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 100,
  },
  tagText: click ? { color: "#FFF" } : { color: "#222222" },
});
