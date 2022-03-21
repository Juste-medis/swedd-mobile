import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { styleCourseItem as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import { showStars } from "../../../Helpers/Utils";
import Fetcher from "../../../API/fetcher";
import numeral from "numeral";
import CoursePlaceholderComponent from "../../Elements/placeholder/PlaceholderComponent";

const CoursesItem = React.memo((route) => {
  let { id } = route;
  const [cour, setcour] = useState({});
  function load_rest() {
    Fetcher.GetCourse_si2(id)
      .then((responseData) => {
        Fetcher.GetCourse_si(id)
          .then((response) => {
            Fetcher.GetCourse_co(id)
              .then((respon) => {
                setcour({
                  ...responseData,
                  ...responseData.meta[0],
                  ...response,
                  ...respon,
                });
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }
  useEffect(() => {
    load_rest();
    return () => {};
  }, []);
  if (!cour.c_author) {
    return <CoursePlaceholderComponent />;
  } else {
    let { ID, c_title, formator, c_corverurl, c_stars, c_price, c_status } =
      cour;
    return (
      <TouchableOpacity
        style={[styles.touchable_main, { height: 110 }]}
        onPress={() => {
          //route.navigation.pop();
          route.navigation.push("CourseOverview", {
            course: ID,
          });
        }}
        activeOpacity={0.7}
        key={`other_course${id}`}
      >
        <Image
          style={[
            styles.image,
            {
              height: "41%",
              width: "25%",
            },
          ]}
          source={{ uri: c_corverurl }}
          resizeMode="contain"
          resizeMethod="scale"
        />
        <View style={styles.right_container}>
          <TextW
            style={styles.title_text}
            text={c_title}
            seemorecolor="blue"
            seemore=" .."
            size={40}
          />
          <TextW style={styles.formator_text} text={formator} size={50} />

          <View style={styles.stars_container}>
            {showStars(c_stars.average)}
            <TextW style={styles.note_text} text={c_stars.notes} size={50} />
          </View>

          {c_status === "tocome" ? (
            <View style={styles.price_container}>
              <Text style={styles.to_come}>a venir</Text>
            </View>
          ) : (
            <View style={styles.price_container}>
              {c_price.current === 0 ? (
                <View style={{ backgroundColor: "green" }}>
                  <Text style={[styles.to_come, { backgroundColor: "green" }]}>
                    Gratuit
                  </Text>
                </View>
              ) : (
                <View style={styles.price_container}>
                  <Text style={styles.good_price}>
                    {numeral(c_price.current).format("0,0[.]00 ") + " CFA"}
                  </Text>
                  {c_price.promotion > 0 && (
                    <Text style={styles.bad_price}>
                      {numeral(c_price.promotion).format("0,0[.]00 ") + " CFA"}
                    </Text>
                  )}
                </View>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
});

export default CoursesItem;
