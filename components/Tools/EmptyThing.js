import React from "react";
import { Image, Text, View } from "react-native";
import { styleMyCoursesScreen as styles } from "../../Ressources/Styles";
import Globals from "../../Ressources/Globals";
import CategorieList from "../../Components/Worker/Lists/CategorieList";

export default function EmptyThing({ route }) {
  return (
    <View style={styles.empty_container}>
      <Image
        style={styles.image_empty}
        source={Globals.IMAGES.EMPTY_COURSE}
        resizeMode="contain"
      />
      <Text style={styles.head_title}>{Globals.STRINGS.course_here}</Text>
      <View style={styles.CategorieList}>
        <Text style={[styles.head_title, { fontWeight: "bold" }]}>
          {Globals.STRINGS.parcour_category}
        </Text>
        <CategorieList navigation={route.route.navigation} verticale={true} />
      </View>
    </View>
  );
}
