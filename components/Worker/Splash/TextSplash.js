import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Globals from "../../../Ressources/Globals";
import { styleWelcomeCard as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import Fetcher from "../../../API/fetcher";

export default function WelcomCard(route) {
  const { title } = route;
  return (
    <TouchableOpacity
      style={[styles.touchable_main, { height: 70 }]}
      disabled={true}
      onPress={() => {
        if (title.ids.length > 1) {
          route.navigation.navigate("PubExplorer", { pub: data });
        } else {
          Fetcher.GetCourse_si(title.ids[0])
            .then((res) => {
              route.navigation.navigate("CourseOverview", {
                course: JSON.parse(res),
              });
            })
            .catch((err) => {
              console.log("errpu => ", err);
            });
        }
      }}
      activeOpacity={0.9}
    >
      <Image
        style={[
          {
            height: "100%",
            width: "100%",
          },
          styles.Image,
        ]}
        source={Globals.IMAGES.TEXTSPLASH}
        resizeMode="cover"
      />
      <View
        style={[
          styles.bottom_container,
          {
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
          },
        ]}
      >
        <TextW
          style={[
            styles.title_text,
            {
              paddingTop: 5,
              textAlign: "center",
              fontSize: 14,
            },
          ]}
          seemorecolor={Globals.COLORS.yellow}
          text={title || ""}
          size={200}
          seemore=" .."
        />
      </View>
    </TouchableOpacity>
  );
}
