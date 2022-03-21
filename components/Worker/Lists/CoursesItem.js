import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styleCourseItem as styles } from "../../../Ressources/Styles";
import TextW from "../../Tools/TextW";
import { showStars } from "../../../Helpers/Utils";
import numeral from "numeral";

class CoursesItem extends React.PureComponent {
  render() {
    let cour = this.props.cour;
    cour = { ...cour, ...cour.meta[0] };
    delete cour.meta;
    let { ID, c_title, formator, c_corverurl, c_stars, c_price, c_status } =
      cour;

    return (
      <TouchableOpacity
        style={[styles.touchable_main, { height: 110 }]}
        onPress={() => {
          this.props.navigation.navigate("CourseOverview", {
            course: cour,
          });
        }}
        activeOpacity={0.7}
        key={`explorecourse${ID}`}
      >
        <Image
          style={[
            styles.image,
            {
              height: "60%",
              width: "30%",
            },
          ]}
          source={{ uri: c_corverurl }}
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
}
export default CoursesItem;
