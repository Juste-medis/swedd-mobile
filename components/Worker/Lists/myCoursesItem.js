import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { styleCourseItem as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import Fetcher from "../../../API/fetcher";
import Globals from "../../../Ressources/Globals";
import Ripple from "../../Elements/Touchable/index";
import Storer from "../../../API/storer";
import { computeTime, hour_to_string } from "../../../Helpers/Utils";
import CoursePlaceholderComponent from "../../Elements/placeholder/PlaceholderComponent";

const CoursesItem = React.memo((route) => {
  let { data, dow } = route;
  const [cour, setcour] = useState({});
  let percent = 1,
    c_skill_levels,
    c_duration;
  if (cour.c_title) {
    c_duration = hour_to_string(computeTime(cour.c_duration));
    c_skill_levels = Globals.Matchers.skills[Number(cour.c_skill_levels)];
    percent = cour.percent;
  }
  function load_rest() {
    if (!dow) {
      Fetcher.GetMyCourseUnity(Number(data.id), "student")
        .then((res) => {
          setcour(res);
        })
        .catch((err) => {
          console.log("err2 => ", err);
        });
    } else {
      Storer.getData("@SAVED_COURSES").then((sacou) => {
        if (sacou) {
          //sacou = [{a: cour, b: async_cour },..,..};
          let saved = sacou.find((e) => (e.a.ID = data));
          setcour({ ...saved.a, async_cour: true });
        }
      });
    }
  }
  useEffect(() => {
    load_rest();
    return () => {};
  }, []);

  if (!cour.c_title) {
    return <CoursePlaceholderComponent />;
  } else {
    let { ID, formator, c_title, c_corverurl, percent } = cour;
    return (
      <Ripple
        style={styles.touchable_main}
        onPress={() => {
          route.navigation.navigate("Reader", {
            course: cour,
            c_title,
            formator,
          });
        }}
        activeOpacity={0.7}
        key={`mycourse${ID}`}
      >
        <Image
          style={styles.image}
          source={{ uri: c_corverurl }}
          resizeMode="contain"
        />
        <View style={[styles.right_container, { width: dow ? "80%" : "80%" }]}>
          <TextW
            style={styles.title_text}
            text={c_title}
            seemorecolor="blue"
            seemore=" .."
            size={100}
          />
          <TextW style={styles.formator_text} text={formator} size={50} />
          {percent != null ? (
            <View style={[styles.price_container, { flexDirection: "column" }]}>
              <View style={styles.indi_cont}>
                <View
                  style={{
                    backgroundColor: Globals.COLORS.primary,
                    width: `${percent * 100}%`,
                    height: "100%",
                    borderRadius: 10,
                  }}
                />
              </View>
              <TextW
                style={styles.formator_text}
                text={`${percent.toFixed(2) * 100}% ${
                  Globals.STRINGS.terminated
                }`}
                size={50}
              />
            </View>
          ) : null}
        </View>
      </Ripple>
    );
  }
});

export default CoursesItem;
