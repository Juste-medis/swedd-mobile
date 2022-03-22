import React from "react";
import { View, Text } from "react-native";
import { styleNoInternet as styles } from "../../Ressources/Styles";
import Globals from "../../Ressources/Globals";
import Spinner from "react-native-spinkit";
export default function NoInternet({ spinner, reload, animation }) {
  return (
    <View style={styles.main_container}>
      {spinner ? (
        <Spinner
          color={Globals.COLORS.primary_pure}
          isVisible={spinner}
          style={{ backgroundColor: "white" }}
          size={70}
          type={animation || "ChasingDots"}
        />
      ) : (
        <View style={styles.err_cont}>
          {!Globals.INTERNET ? (
            <Text>{Globals.STRINGS.no_internet}</Text>
          ) : (
            <Text>{Globals.STRINGS.unknow_error}</Text>
          )}
          <Text
            style={styles.retry_text}
            onPress={() => {
              reload();
            }}
          >
            {Globals.STRINGS.retry}
          </Text>
        </View>
      )}
    </View>
  );
}
