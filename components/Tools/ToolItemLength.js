import React from "react";
import { Text, View } from "react-native";
import { styletoollength as styles } from "../../Ressources/Styles";
export default function ToolItemLength(data) {
  let { style } = data;
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          padding: 10,
          justifyContent: "center",
          elevation: 10,
          backgroundColor: "#fff",
          width: 60,
          height: 60,
          borderRadius: 70,
          padding: 10,
          zIndex: 1,
          ...style,
        }}
      >
        <Text
          style={{
            ...styles.learnig_display_text,
            color: "#f4440cff",
            fontWeight: "bold",
            fontSize: 30,
            color: style && style.color ? style.color : "#000",
          }}
        >
          {data.value}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#f4440cff",
          marginLeft: -10,
          borderTopEndRadius: 50,
          borderBottomRightRadius: 50,
          width: "100%",
        }}
      >
        <Text
          style={{
            ...styles.learnig_display_text,
            backgroundColor: "#f4440cff",
            padding: 5,
            paddingLeft: 20,
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          {data.label}
        </Text>
      </View>
    </View>
  );
}
