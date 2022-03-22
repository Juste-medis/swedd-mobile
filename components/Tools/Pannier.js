import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { connect } from "react-redux";
import Globals from "../../Ressources/Globals";

function pannier(route) {
  if (Globals.USER_TYPE) {
    let pub = route.my_profil.account.cart.length;
    return (
      <TouchableOpacity
        style={styles.main_container}
        style={route.style}
        onPress={() => {
          route.navigation.navigate("MyPannier");
        }}
      >
        <Icon
          style={styles.icon}
          name={"basket"}
          size={27}
          color={Globals.COLORS.primary}
        />
        <Text
          style={[
            styles.price,
            {
              color: route.color ? route.color : "black",
              right: pub < 10 ? "35%" : "24%",
            },
          ]}
        >
          {pub < 10 ? pub : "9+"}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return <Text />;
  }
}
const styles = StyleSheet.create({
  main_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    alignSelf: "center",
  },
  price: {
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    fontSize: 10,
    alignSelf: "center",
    top: "25%",
  },
});

const mapStateToProps = (state) => {
  const { my_profil } = state;
  return { my_profil };
};

export default connect(mapStateToProps)(pannier);
