import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Globals from "../../../Ressources/Globals";
import { styleWelcomeCard as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import OpenPubSlider from "../../../Components/Tools/OpenPubSlider";

export default function WelcomCard(route) {
  let data = route.data;
  const title = data.t1;
  const content_text = data.t2;
  //toto remove this and  put defaultSource={Globals.IMAGES.PLACEHOLDER} on release
  return (
    <TouchableOpacity
      style={[styles.touchable_main, { height: null }]}
      onPress={() => {
        route.navigation.navigate("PubExplorer", { pub: route.data });
      }}
      activeOpacity={0.9}
    >
      <Image
        style={[
          {
            height: 250,
            width: "100%",
          },
          styles.Image,
        ]}
        source={{ uri: data.imgurl }}
        resizeMode="cover"
      />
      <View
        style={[
          styles.bottom_container,
          {
            position: "relative",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          },
        ]}
      >
        <TextW
          style={[styles.title_text, { color: Globals.COLORS.arsenic }]}
          seemorecolor={Globals.COLORS.blue_dark}
          text={title}
          size={60}
          seemore=" .."
        />
        <TextW
          style={[styles.text_content, { color: Globals.COLORS.arsenic }]}
          seemorecolor={Globals.COLORS.blue_dark}
          text={content_text}
          size={50}
          seemore=" .."
        />
        <OpenPubSlider />
      </View>
    </TouchableOpacity>
  );
}
