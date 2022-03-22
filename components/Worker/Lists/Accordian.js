import React, { Component } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from "react-native";
import Globals from "../../../Ressources/Globals";
import Icon from "react-native-vector-icons/Ionicons";
import TextW from "../../Tools/TextW";
import Ripple from "../../Elements/Touchable/index";
import { styleAccordian as styles } from "../../../Ressources/Styles";
import { computeTime, hour_to_string } from "../../../Helpers/Utils";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.courid = props.courid;
    this.state = {
      data: props.data,
      expanded: false,
      selected: 0,
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  show_Main = () => {
    return this.state.data.map((item, index) => {
      let sel = index + 1;

      return (
        <View
          style={styles.main_touchable}
          key={`accoit${this.props.section_id}-${sel}`}
        >
          <View style={styles.touchable_container}>
            <Text style={styles.index_text}>{sel}</Text>
            <View style={styles.right_toucha}>
              <TextW
                style={styles.title_lesson}
                text={item.post_title.trim()}
                size={35}
              />
              <Text style={styles.sub_title}>
                {hour_to_string(computeTime(item.duration))}
              </Text>
            </View>
          </View>
          <Icon
            name="play-circle-outline"
            size={30}
            color={Globals.COLORS.primary}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
          style={[
            styles.row,
            {
              paddingVertical: 10,
              backgroundColor: this.state.expanded
                ? Globals.COLORS.aliceblue
                : Globals.COLORS.white,
            },
          ]}
          activeOpacity={1}
          key={`section${this.props.section_id}`}
          onPress={() => this.toggleExpand()}
        >
          <View
            style={[
              styles.top_cont,
              { maxWidth: "70%", justifyContent: null, paddingVertical: 5 },
            ]}
          >
            <Text style={styles.title}>
              {"Section " + this.props.ni + " : "}
            </Text>
            <TextW
              style={styles.des_title}
              text={this.props.title.trim()}
              size={50}
            />
          </View>
          <Icon
            name={
              this.state.expanded ? "caret-down-sharp" : "caret-forward-sharp"
            }
            size={18}
            color={Globals.COLORS.primary}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.lesson_heberger,
            {
              height: this.state.expanded ? null : 0,
            },
          ]}
        >
          {this.show_Main()}
        </View>
      </View>
    );
  }
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}
export default Accordian;
