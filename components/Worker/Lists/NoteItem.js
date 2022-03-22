import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Globals from "../../../Ressources/Globals";
import TextW from "../../Tools/TextW";
import { secondTotime } from "../../../Helpers/Utils";
import { styleAccount as styles } from "../../../Ressources/Styles";
import GlobaWorker from "../../../Ressources/GlobaWorker";

function NoteItem(route) {
  let { time, section, content, date } = route.note;
  let id =  route.id
  return (
    <TouchableOpacity
      style={styles.note_main_container}
      activeOpacity={0.5}
      onPress={() => {
        GlobaWorker.TEMP.note = route.note;
        route.go_note_complete(id);
      }}
    >
      <Text
        style={[
          styles.pressable_title,
          {
            color: Globals.COLORS.primary_pure,
            marginStart: 8,
          },
        ]}
      >
        {secondTotime(time)}
      </Text>
      <TextW style={styles.note_title} text={section} size={70} />
      <TextW style={styles.note_content} text={content} size={200} />
      <Text style={styles.note_date}>{date}</Text>
    </TouchableOpacity>
  );
}

export default NoteItem;
