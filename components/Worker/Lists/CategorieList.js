import React from "react";
import { TouchableOpacity, View, ScrollView, Image } from "react-native";
import { styleDisplayCategorie as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import Globals from "../../../Ressources/Globals";
import Icon from "react-native-vector-icons/Ionicons";
export default function CategorieList(route) {
  let orientation = route.verticale === true ? false : true;
  const cali = [
    {
      id: 1,
      name: "Affiliation",
    },
    {
      id: 2,
      name: "Agence Marketing",
    },
    {
      id: 3,
      name: "Créateur de contenus",
    },
    {
      id: 4,
      name: "E-commerce",
    },
    {
      id: 5,
      name: "Marketing Digital ",
    },
    {
      id: 6,
      name: "Freelance",
    },
    {
      id: 7,
      name: "Réseaux Sociaux ",
    },
  ];
  const MainShow = cali.map((mes, index) => {
    const logo = Globals.IMAGES.CATEGORIES[index];
    return (
      <TouchableOpacity
        style={
          !orientation
            ? [
                styles.touchable_main_vert,
                { paddingBottom: index == cali.length - 1 ? 15 : null },
              ]
            : styles.touchable_main
        }
        onPress={() => {
          route.navigation.navigate("ExploreCourses", {
            category: mes.id,
            cate_name: mes.name,
          });
        }}
        activeOpacity={0.9}
        key={index}
      >
        <View style={styles.image}>
          <Image style={styles.imag} source={logo} resizeMode="contain" />
        </View>
        <TextW
          style={!orientation ? styles.title_text_vert : styles.title_text}
          text={mes.name}
          size={50}
        />
        {!orientation ? (
          <Icon
            name="md-caret-forward-outline"
            size={25}
            style={{ position: "absolute", right: 10 }}
          />
        ) : null}
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView
      style={styles.main_container}
      horizontal={orientation}
      showsHorizontalScrollIndicator={false}
    >
      {MainShow}
    </ScrollView>
  );
}
