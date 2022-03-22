import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Globals from "../../../Ressources/Globals";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  unity_View(icon_name, text, k) {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginVertical: 5,
        }}
        key={k}
      >
        <Icon name={icon_name} size={18} color={"#483737"} />
        <Text
          style={{
            fontSize: 14,
            marginLeft: 6,
            marginRight: 20,
            color: Globals.COLORS.arsenic,
            fontFamily: "Neogrotesk",
          }}
        >
          {text}
        </Text>
      </View>
    );
  }
  willLearn_View() {
    const showContent = [];
    const overContent = [];
    this.state.data.map((mes, index) => {
      index < 4
        ? showContent.push(this.unity_View("checkmark-circle", mes, index))
        : overContent.push(this.unity_View("checkmark-circle", mes, index));
    });
    return (
      <View
        style={{
          flexDirection: "column",
          width: "100%",
        }}
      >
        {showContent.length > 1 ? showContent : null}
        {overContent.length > 1 ? (
          <View style={{}}>
            <View
              style={{
                height: this.state.expanded ? null : 0,
                overflow: "hidden",
              }}
            >
              {overContent}
            </View>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                this.setState({ expanded: !this.state.expanded });
              }}
            >
              <Text
                style={{
                  color: Globals.COLORS.primary_pure,
                  fontSize: 18,
                  margin: 10,
                }}
              >
                {this.state.expanded ? "Voir moins" : "Voir plus"}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
  render() {
    return <View style={styles.main_container}>{this.willLearn_View()}</View>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    maxWidth: "90%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  main_container: {
    paddingHorizontal: 10,
  },
});
