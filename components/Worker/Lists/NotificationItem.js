import React from "react";
import { View, Text, Image } from "react-native";
import Globals from "../../../Ressources/Globals";
import { styleNotificationItem as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import { date_to_string } from "../../../Helpers/Utils";
import { Button } from "react-native-elements";
function NotificationItem(route) {
  const {
    ID,
    date_envoi,
    objet,
    content,
    uri,
    date_lecture,
    id_expe,
    id_desti,
  } = route.inter_notification;
  let { onclick } = route,
    read = date_lecture.length > 0;
  return (
    <Button
      style={[
        styles.main_Button,
        {
          backgroundColor: read ? Globals.COLORS.white : "#eceff5",
        },
      ]}
      onPress={() => {
        onclick({ ID });
      }}
    >
      {uri != "" && uri.length > 1 && (
        <Image
          style={[styles.image]}
          source={{ uri: uri }}
          resizeMode="contain"
        />
      )}
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <TextW
            style={[
              styles.notification_title,
              {
                color: read
                  ? Globals.COLORS.blue_grey
                  : Globals.COLORS.blue_dark,
              },
            ]}
            text={objet}
            size={50}
          />
          <Text
            style={{
              textDecorationStyle: "double",
              textDecorationLine: "underline",
            }}
          >
            {date_to_string(date_envoi)}
          </Text>
        </View>
        <View style={styles.desciption_container}>
          <TextW
            style={styles.notification_description}
            text={content.replace(/(<([^>]+)>)/gi, "")}
            size={150}
          />
        </View>
      </View>
    </Button>
  );
}

export default NotificationItem;
