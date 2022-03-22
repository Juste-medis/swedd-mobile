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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedVideo } from "../../../Store/Actions";
import { styleAccordian as styles } from "../../../Ressources/Styles";
import { computeTime, hour_to_string } from "../../../Helpers/Utils";
import Fetcher from "../../../API/fetcher";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.courid = props.courid;
    this.async_cour = props.async_cour;
    this.selected = props.my_profil.account.courses.find(
      (el) => el.id == props.courid
    );
    this.uno = props.uno;
    this.state = {
      data: props.data,
      expanded: false,
      selected: 0,
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  sectionClick(no, content) {
    if (this.async_cour) {
      console.log(content);
      this.props.setSelectedVideo(content);
      this.setState({ selected: no });
    } else
      Fetcher.GetLesson(this.courid, content.ID, "student")
        .then((res) => {
          if (res) {
            if (!res.post_content) res.post_content = "Aucune Description";
            this.props.setSelectedVideo(res);
            this.setState({ selected: no });
          }
        })
        .catch((err) => {
          console.log("err1 => ", err);
        });
  }

  show_Main = () => {
    return this.state.data.map((item, index) => {
      let sel = index + 1;
      let comp = Globals.USER_TYPE && this.props.signed ? item.completed : null;
      if (item.ID === this.uno && Globals.TEMP !== 10) {
        this.toggleExpand();
        Globals.TEMP = 10;
        this.sectionClick(sel, item);
      }
      return (
        <Ripple
          style={[
            styles.main_touchable,
            {
              backgroundColor:
                sel == this.state.selected ? "rgba(238, 108, 59,0.1)" : null,
            },
          ]}
          onPress={
            Globals.USER_TYPE && this.props.signed
              ? () => {
                  this.sectionClick(sel, item);
                }
              : null
          }
          activeOpacity={Globals.USER_TYPE ? 0.5 : 1}
          key={`accoit${this.props.section_id}-${sel}`}
        >
          <View style={styles.touchable_container}>
            <Text style={styles.index_text}>{sel}</Text>
            <View style={styles.right_toucha}>
              <View style={styles.pos_comp}>
                {comp && (
                  <Icon
                    name={"checkmark-circle"}
                    size={20}
                    color={Globals.COLORS.green}
                  />
                )}
                <TextW
                  style={[
                    styles.title_lesson,
                    {
                      fontWeight: sel == this.state.selected ? "bold" : null,
                      fontFamily:
                        sel == this.state.selected ? "bold" : "Helvetica",
                    },
                  ]}
                  text={item.post_title.trim()}
                  size={30}
                />
              </View>

              <Text style={styles.sub_title}>
                {`${hour_to_string(computeTime(item.duration))}`}
              </Text>
            </View>
          </View>
          <Icon
            name={
              sel == this.state.selected ? "play-circle" : "play-circle-outline"
            }
            size={30}
            color={Globals.COLORS.primary}
          />
        </Ripple>
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
              paddingVertical: 4,
            },
          ]}
          activeOpacity={1}
          onPress={() => this.toggleExpand()}
          key={`section${this.props.section_id}`}
        >
          <View
            style={[
              styles.top_cont,
              { maxWidth: "70%", justifyContent: null, paddingVertical: 10 },
            ]}
          >
            <Text
              style={[
                styles.title,
                {
                  fontWeight: this.state.expanded ? "600" : "450",
                  fontSize: 12,
                  color: Globals.COLORS.arsenic2,
                },
              ]}
            >
              {"Section " + this.props.ni + " : "}
            </Text>
            <TextW
              style={[
                styles.des_title,
                {
                  fontWeight: this.state.expanded ? "600" : "450",
                  fontSize: 12,
                  color: Globals.COLORS.arsenic2,
                },
              ]}
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
              borderBottomWidth: this.state.expanded ? 4 : 0,
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

const mapStateToProps = (state) => {
  const { my_profil } = state;
  return { my_profil };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setSelectedVideo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Accordian);
