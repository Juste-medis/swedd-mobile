import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Modal,
  Text,
  Image,
  ScrollView,
  View,
} from "react-native";
import NotificationItem from "../../../components/Worker/Lists/NotificationItem";
import Globals from "../../../Ressources/Globals";
import Fetcher from "../../../API/fetcher";
import { styleAccount as styles } from "../../../Ressources/Styles";
import Storer from "../../../API/storer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddProfilItem } from "../../../Store/Actions";
import ToolItemLength from "../../../components/Tools/ToolItemLength";
import { htmlSafe } from "../../../Helpers/Utils";

let notides = { uri: "", text: "toto" };
function Notification(route) {
  const [notifications, setnotifications] = React.useState([]);
  const [spinner, setspinner] = React.useState(true);
  const [modalVisible, setmodalVisible] = React.useState(false);

  React.useEffect(() => {
    _onSubmmitClick();
    return () => {};
  }, []);

  const _show_content = (text) => {
    Fetcher.GetUnityMessage(text.ID)
      .then((res) => {
        if (res.message) {
          window.alert(res.message);
        } else {
          notides = res.messages;
          setmodalVisible(true);
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
  };

  function _onSubmmitClick() {
    Storer.getData(`@NOTIFICATIONS`)
      .then((data) => {
        if (data) {
          setnotifications(data);
          route.AddProfilItem({ key: "notifications", data: 0 });
          setspinner(false);
        } else {
          Fetcher.GetMessages("notifications")
            .then((res) => {
              setnotifications(res.messages);
              if (!res.message) {
                Storer.storeData(`@NOTIFICATIONS`, res);
                route.AddProfilItem({ key: "notifications", data: 0 });
                setspinner(false);
              }
            })
            .catch((err) => {
              setspinner(false);
              if (!Globals.INTERNET) {
                toast_message(Globals.STRINGS.no_internet);
                route.navigation.goBack();
              } else {
                toast_message(`${err}`);
              }
            });
        }
      })
      .catch((err) => {
        setspiner(false);
        if (!Globals.INTERNET) {
          toast_message(Globals.STRINGS.no_internet);
          route.navigation.goBack();
        } else {
          toast_message(`${err}`);
        }
      });
  }
  function onShouldStartLoadWithRequest(navigator) {
    if (navigator.url.indexOf("sedami.com") === -1) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <SafeAreaView style={{ padding: 8, paddingBottom: 50 }}>
      {spinner ? (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color={Globals.COLORS.primary_pure}
        />
      ) : notifications.length > 1 ? (
        <FlatList
          data={notifications}
          ListHeaderComponent={
            <View style={styles.head_title_container}>
              {ToolItemLength({
                value: notifications.length || 0,
                label: "Notifications",
              })}
            </View>
          }
          keyExtractor={(item) => `notitem${item.ID}`}
          renderItem={({ item }) => (
            <NotificationItem
              inter_notification={item}
              onclick={_show_content}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
        />
      ) : (
        <View style={styles.err_cont}>
          {!Globals.INTERNET ? (
            <Text>{Globals.STRINGS.no_internet}</Text>
          ) : (
            <Text>{Globals.STRINGS.unknow_error}</Text>
          )}
          <Text
            style={styles.retry_text}
            onPress={() => {
              setspiner(true);
              _onSubmmitClick();
            }}
          >
            {Globals.STRINGS.retry}
          </Text>
        </View>
      )}
      <Modal
        style={{ position: "absolute", bottom: 0 }}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          {Globals.INTERNET && notides.uri !== "" && (
            <Image
              style={{ width: "98%", height: 300, margin: "1%" }}
              source={{ uri: notides.uri }}
              resizeMode="cover"
            />
          )}
          <Text style={styles.text_object}>{htmlSafe(notides.objet)}</Text>
          <Text style={styles.text_main}>{htmlSafe(notides.content)}</Text>
          <Text>notides.content</Text>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  const { my_profil } = state;
  return { my_profil };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ AddProfilItem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
