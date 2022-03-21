import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Globals from "../../../Ressources/Globals";
import Icon from "react-native-vector-icons/Ionicons";
import TextW from "../../Tools/TextW";
import Ripple from "../../Elements/Touchable/index";
import {
  styleAccordian as styles,
  styleAccount as styla,
} from "../../../Ressources/Styles";
import GlobaWorker from "../../../Ressources/GlobaWorker";

class NoteAccordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  sectionClick(nono) {
    GlobaWorker.TEMP.note = nono;
    this.props.go_note_complete(this.props.id);
  }
  show_Main = () => {
    return this.state.data.map((item, index) => {
      let sel = index + 1;
      let { section, content } = item;
      console.log(section, content);
      return (
        <Ripple
          style={styles.main_touchable}
          onPress={() => {
            this.sectionClick(item);
          }}
          activeOpacity={Globals.USER_TYPE ? 0.5 : 1}
          key={sel}
        >
          <View
            style={[
              styles.right_toucha,
              {
                borderLeftWidth: 2,
                borderLeftColor: Globals.COLORS.secondary,
                padding: 10,
                marginBottom: 5,
              },
            ]}
          >
            <TextW style={styles.title_lesson} text={section} size={40} />
            <TextW style={styles.sub_title} text={content} size={100} />
          </View>
        </Ripple>
      );
    });
  };
  render() {
    return (
      <View style={styles.main_container}>
        <TouchableOpacity
          style={[styles.row, { flexDirection: "column" }]}
          activeOpacity={1}
          onPress={() => this.toggleExpand()}
          key={this.props.ni}
        >
          <View style={styles.top_cont}>
            <TextW style={styles.title} text={this.props.title} size={50} />
            <Icon
              name={
                this.state.expanded
                  ? "caret-down-circle-sharp"
                  : "caret-forward-circle"
              }
              size={20}
              color={Globals.COLORS.primary}
            />
          </View>
          <View style={styles.top_cont}>
            <Text
              style={[
                styles.index_text,
                {
                  color: Globals.COLORS.primary,
                  fontWeight: "bold",
                  margin: 0,
                },
              ]}
            >
              {this.state.data.length + "  "}
              <TextW style={styles.title} text="Note(s)" size={70} />
            </Text>
          </View>
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

export default NoteAccordian;
