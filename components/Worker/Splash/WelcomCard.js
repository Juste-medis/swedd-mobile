import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Globals from "../../../Ressources/Globals";
import { styleWelcomeCard as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import Fetcher from "../../../API/fetcher";
import { toast_message } from "../../../Helpers/Utils";

export default function WelcomCard(route) {
  let data = route.data;
  const title = data.t1,
    content_text = data.t2,
    ids = data.ids;

  return (
    <TouchableOpacity
      style={[styles.touchable_main]}
      disabled={true}
      onPress={() => {
        if (data.ids.length > 1) {
          route.navigation.navigate("PubExplorer", { pub: data });
        } else {
          Fetcher.GetCourse_si(ids[0])
            .then((res) => {
              route.navigation.navigate("CourseOverview", {
                course: res,
              });
            })
            .catch((err) => {
              if (!Globals.INTERNET) {
                toast_message(Globals.STRINGS.no_internet);
              } else {
                toast_message(`${err}`);
              }
              Storer.StoreProfil();
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
        source={{ uri: data.imgurl }}
        resizeMode="cover"
        resizeMethod="resize"
      />
      <View
        style={[styles.bottom_container, { backgroundColor: "rgba(0,0,0,.5)" }]}
      >
        <TextW
          style={styles.title_text}
          seemorecolor={Globals.COLORS.yellow}
          text={title}
          size={60}
          seemore=" .."
        />
        <TextW
          style={styles.text_content}
          seemorecolor={Globals.COLORS.yellow}
          text={content_text}
          size={50}
          seemore=" .."
        />
      </View>
    </TouchableOpacity>
  );
}
