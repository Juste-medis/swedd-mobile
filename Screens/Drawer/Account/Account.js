import React from "react";
import {
  ScrollView,
  Text,
  View,
  Linking,
  ActivityIndicator,
} from "react-native";
import Globals from "../../../Ressources/Globals";
import { styleAccount as styles } from "../../../Ressources/Styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddProfilItem } from "../../../Store/Actions";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import Storer from "../../../API/storer";
import RNReastart from "react-native-restart";
import { alert_message, onShare, toast_message } from "../../../Helpers/Utils";
import fetcher from "../../../API/fetcher";
import { Image } from "react-native-elements";

function Account(route) {
  let profil = route.my_profil.account;

  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);

  let menugen = [
    {
      icon: "ios-person-circle-sharp",
      title: Globals.STRINGS.personal_informations,
      onclick: () => {
        route.navigation.navigate("Personal");
      },
    },
    {
      icon: "md-basket",
      title: Globals.STRINGS.Commands,
      onclick: () => {
        Globals.INTERNET
          ? route.navigation.navigate("Command")
          : toast_message(Globals.STRINGS.no_internet);
      },
    },
    {
      icon: "ios-notifications-sharp",
      title: Globals.STRINGS.Notification,
      onclick: () => {
        route.navigation.navigate("Notification");
      },
      value: profil.notifications,
    },
    {
      icon: "ios-key-sharp",
      title: Globals.STRINGS.security,
      onclick: () => {
        Globals.INTERNET
          ? route.navigation.navigate("Security")
          : toast_message(Globals.STRINGS.no_internet);
      },
    },
    {
      icon: "md-heart-circle",
      title: Globals.STRINGS.Favorites,
      onclick: () => {
        route.navigation.navigate("FavStack");
      },
    },
    {
      icon: "reader",
      title: Globals.STRINGS.remarques,
      onclick: () => {
        route.navigation.navigate("Notes");
      },
    },
  ];

  let menuoth = [
    {
      icon: "chatbubbles",
      title: Globals.STRINGS.faq,
      onclick: () => {
        Linking.openURL("https://sedami.com/faqs/");
        //route.navigation.navigate("About");
      },
    },
    {
      icon: "body",
      title: Globals.STRINGS.terms_and_conditions,
      onclick: () => {
        Linking.openURL(
          "https://sedami.com/condition-dutilisation-generale-et-mentions-legales/"
        );
        //route.navigation.navigate("About");
      },
    },
    {
      icon: "md-phone-portrait",
      title: Globals.STRINGS.About,
      onclick: () => {
        Linking.openURL("https://sedami.com/about-us/");
        //route.navigation.navigate("About");
      },
    },
    {
      icon: "share",
      title: Globals.STRINGS.share,
      onclick: () => {
        onShare("Sedami | tres cool");
      },
    },
  ];

  const menu_main = (data) => {
    return (
      <View style={{ backgroundColor: "white", width: "100%" }}>
        {data.map((item, index) => {
          return (
            <Button
              style={[
                styles.menu_item,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: Globals.COLORS.co_gris,
                },
              ]}
              onPress={() => {
                item.onclick();
              }}
              key={index}
            >
              <View style={styles.menu_item}>
                <Icon
                  name={item.icon}
                  size={25}
                  color={Globals.COLORS.secondary}
                />
                <Text
                  style={[
                    styles.pressable_title,
                    { color: Globals.COLORS.arsenic, marginStart: 12 },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              {!item.value ? (
                <Icon name="ios-chevron-forward-sharp" size={20} color="grey" />
              ) : (
                <Text style={styles.prop_unity_value}>{item.value}</Text>
              )}
            </Button>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.main_container}>
        {Globals.USER_TYPE ? (
          <View style={{ width: "100%", alignItems: "center" }}>
            {profil.photourl != "" ? (
              <Image
                source={{ uri: profil.photourl }}
                containerStyle={styles.item}
                style={styles.image_avatar}
                PlaceholderContent={<ActivityIndicator />}
              />
            ) : (
              <View style={styles.def_avatar}>
                <Text
                  style={{ color: "white", fontSize: 50, fontWeight: "bold" }}
                >
                  {profil.username.substr(0, 2)}
                </Text>
              </View>
            )}

            <Text style={styles.name_title}>
              {profil.user_lastname +
                " " +
                profil.user_firtname.toUpperCase().charAt(0) +
                "."}
            </Text>
            <Button
              style={[
                styles.pressable_cash,
                {
                  backgroundColor: Globals.COLORS.secondary,
                  elevation: 8,
                  borderRadius: 8,
                  width: "90%",
                },
              ]}
              onPress={() => {
                console.log("todo");
              }}
            >
              <Text style={[styles.pressable_title, { color: "white" }]}>
                {profil.username}
              </Text>
              <Text style={[styles.pressable_subtitle, { color: "white" }]}>
                {Globals.STRINGS.student_profil}
              </Text>
            </Button>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 15,
                marginHorizontal: 20,
              }}
            >
              <Button
                style={[
                  styles.pressable_cash,
                  {
                    backgroundColor: Globals.COLORS.white,
                    elevation: 2,
                    borderRadius: 8,
                    flex: 1,
                    marginEnd: 20,
                  },
                ]}
                onPress={() => {
                  console.log("todo");
                }}
              >
                <Text style={[styles.pressable_title, { color: "grey" }]}>
                  <Icon
                    name="book"
                    size={15}
                    color={Globals.COLORS.secondary}
                  />
                  {"  " + profil.courses.length}
                </Text>
                <Text
                  style={[
                    styles.pressable_subtitle,
                    { color: Globals.COLORS.primary },
                  ]}
                >
                  {Globals.STRINGS.courses}
                </Text>
              </Button>
              <Button
                style={[
                  styles.pressable_cash,
                  {
                    backgroundColor: Globals.COLORS.white,
                    elevation: 2,
                    borderRadius: 8,
                    flex: 1,
                  },
                ]}
                onPress={() => {
                  console.log("todo");
                }}
              >
                <Text style={[styles.pressable_title, { color: "grey" }]}>
                  <Icon
                    name="bookmark"
                    size={15}
                    color={Globals.COLORS.secondary}
                  />
                  {"  " + profil.certificates}
                </Text>
                <Text
                  style={[
                    styles.pressable_subtitle,
                    { color: Globals.COLORS.primary },
                  ]}
                >
                  {Globals.STRINGS.certificates}
                </Text>
              </Button>
            </View>
            <Text
              style={[
                styles.menu_title,
                { color: Globals.COLORS.secondary, alignSelf: "flex-start" },
              ]}
            >
              {Globals.STRINGS.general.toUpperCase()}
            </Text>
            {menu_main(menugen)}
            <Text
              style={[
                styles.menu_title,
                {
                  color: Globals.COLORS.secondary,
                  alignSelf: "flex-start",
                  fontFamily: "Montserrat",
                },
              ]}
            >
              {Globals.STRINGS.other.toUpperCase()}
            </Text>
          </View>
        ) : (
          <View
            style={{ width: "100%", alignItems: "center", marginBottom: 50 }}
          >
            <View style={styles.def_avatar}>
              <Icon name="person" size={100} color="white" />
            </View>

            <Button
              style={[
                styles.pressable_cash,
                {
                  backgroundColor: Globals.COLORS.secondary,
                  elevation: 8,
                  borderRadius: 8,
                  marginVertical: 50,
                  width: "90%",
                },
              ]}
              onPress={() => {
                route.navigation.push("SignIn");
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  padding: 10,
                  fontSize: 16,
                }}
              >
                {Globals.STRINGS.connection}
              </Text>
            </Button>
          </View>
        )}

        {menu_main(menuoth)}
        {Globals.USER_TYPE ? (
          <Button
            style={styles.buts_style}
            onPress={() => {
              alert_message(
                "déconnexion",
                Globals.STRINGS.sur_deconnect,
                Globals.STRINGS.deconnexion,
                () => {
                  fetcher
                    .Signout()
                    .then((resi) => {
                      if (resi.data === 1) {
                        Storer.removeData();
                        RNReastart.Restart();
                      } else {
                        alert(Globals.STRINGS.Ocurred_error);
                      }
                    })
                    .catch((err) => {
                      if (!Globals.INTERNET) {
                        toast_message(Globals.STRINGS.no_internet);
                        route.navigation.goBack();
                      } else {
                        toast_message(`${err}`);
                      }
                    });
                }
              );
            }}
          >
            <Text style={styles.boldText_touchable}>
              {Globals.STRINGS.deconnexion}
            </Text>
          </Button>
        ) : null}
      </View>
    </ScrollView>
  );
}
const mapStateToProps = (state) => {
  const { my_profil } = state;
  return { my_profil };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ AddProfilItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
