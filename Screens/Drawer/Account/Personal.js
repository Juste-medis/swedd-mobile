import React from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Globals from "../../../Ressources/Globals";
import { styleAccount as styles } from "../../../Ressources/Styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setProfil } from "../../../Store/Actions";
import Icon from "react-native-vector-icons/Ionicons";
import Storer from "../../../API/storer";
import Fetcher from "../../../API/fetcher";
import { toast_message, UriEncoder } from "../../../Helpers/Utils";

function Personal(route) {
  let profil = route.my_profil.account;
  let modifying = {};
  const [modibool, setmodibool] = React.useState(false);
  const [spinner, setspinner] = React.useState(false);
  React.useEffect(() => {}, []);
  let menuoth = [
    {
      icon: "person-circle",
      title: Globals.STRINGS.username,
      value: profil.username,
      key: "username",
    },
    {
      icon: "person-circle",
      title: Globals.STRINGS.firstname,
      value: profil.user_firtname,
      key: "user_firtname",
    },
    {
      icon: "person-circle-outline",
      title: Globals.STRINGS.lastname,
      value: profil.user_lastname,
      key: "user_lastname",
    },
    {
      icon: "at-circle",
      title: Globals.STRINGS.mail,
      value: profil.user_email,
      key: "user_email",
    },
    {
      icon: "person-circle-outline",
      title: Globals.STRINGS.display_name,
      value: profil.display_name,
      key: "display_name",
    },
    {
      icon: "briefcase",
      title: Globals.STRINGS.profession,
      value: profil.job,
      key: "job",
    },
    {
      icon: "link",
      title: Globals.STRINGS.link,
      value: profil.user_url,
      key: "user_url",
    },
    {
      icon: "md-alert-circle",
      title: Globals.STRINGS.About,
      value: profil.description,
      key: "description",
    },
  ];

  function submit_modi() {
    setmodibool(!modibool);
    if (modibool) {
      setspinner(true);
      Fetcher.UpdateData(UriEncoder(modifying))
        .then((res) => {
          if (res.message) {
            toast_message(res.message);
          } else {
            toast_message(Globals.STRINGS.sucess_Update);
            setspinner(false);
            route.setProfil(modifying);
            Storer.StoreProfil();
          }
        })
        .catch((err) => {
          setspinner(false);
          toast_message(`${err}`);
        });
    }
  }

  const menu_main = (data) => {
    return (
      <View style={{ backgroundColor: "white", width: "100%" }}>
        {data.map((item, index) => {
          return (
            <View
              style={[
                styles.menu_item,
                {
                  borderRadius: 8,
                  flexDirection: "column",
                  marginBottom: 10,
                  backgroundColor: Globals.COLORS.white,
                  elevation: 1,
                },
              ]}
              key={index}
            >
              <View
                style={{
                  backgroundColor: Globals.COLORS.white,
                  flexDirection: "row",
                  zIndex: 1,
                  alignSelf: "flex-start",
                }}
              >
                <Icon
                  name={item.icon}
                  size={25}
                  color={Globals.COLORS.secondary}
                />
                <Text
                  style={[
                    styles.pressable_title,
                    {
                      color: Globals.COLORS.secondary,
                      marginStart: 12,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <TextInput
                style={{
                  width: "90%",
                  color: Globals.COLORS.blue_grey,
                  fontWeight: modibool ? "normal" : "bold",
                }}
                defaultValue={item.value}
                onChangeText={(name) => (modifying[item.key] = name)}
                multiline={item.title === Globals.STRINGS.About ? true : false}
                placeholder={item.value}
                placeholderTextColor={Globals.COLORS.arsenic2}
                editable={modibool}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={[styles.main_container]}>
        {menu_main(menuoth)}
        <TouchableOpacity
          style={styles.buts_style}
          onPress={() => {
            submit_modi();
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.boldText_touchable}>
            {!modibool ? Globals.STRINGS.modify : Globals.STRINGS.submit}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const mapStateToProps = (state) => {
  const { my_profil } = state;
  return { my_profil };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setProfil }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
