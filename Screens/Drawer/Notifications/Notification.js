/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Modal,
  Text,
  ScrollView,
  View,
} from 'react-native';
import NotificationItem from '../../../components/Worker/Lists/NotificationItem';
import Globals from '../../../Ressources/Globals';
import Fetcher from '../../../API/fetcher';
import {styleNotificationItem as styles} from '../../../Ressources/Styles';
import Storer from '../../../API/storer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import {date_to_local_string, toast_message} from '../../../Helpers/Utils';
import EmptyThing from '../../../components/Gadgets/EmptyThing';
import LoadingDot from '../../../components/Gadgets/Loading';
import Icon from 'react-native-vector-icons/Ionicons';

let notides = {uri: '', text: 'toto'};
function Notification(route) {
  const [notifications, setnotifications] = React.useState([]);
  const [spinner, setspinner] = React.useState(true);
  const [modalVisible, setmodalVisible] = React.useState(false);
  React.useEffect(() => {
    _onSubmmitClick();
    return () => {};
  }, []);

  const _show_content = notif => {
    notides = notif;
    setmodalVisible(true);
  };
  function _onSubmmitClick() {
    Fetcher.GetMessages('notifications')
      .then(res => {
        if (res['@type'] === 'hydra:Error') {
          toast_message(res['hydra:description']);
        } else {
          setnotifications(res.messages);
          Storer.storeData('@NOTIFICATIONS', res.messages);
          route.AddProfilItem({key: 'notifications', data: 0});
        }
        setspinner(false);
      })
      .catch(async err => {
        setspinner(false);
        if (!Globals.INTERNET) {
          const cached = await Storer.getData('@NOTIFICATIONS');
          if (!cached) {
            toast_message(Globals.STRINGS.no_internet);
          } else {
            setnotifications(cached);
          }
        } else {
          toast_message(`${err}`);
        }
      });
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: Globals.COLORS.light_grey,
        flex: 1,
      }}>
      {spinner ? (
        <LoadingDot />
      ) : (
        <FlatList
          style={{flex: 1, backgroundColor: Globals.COLORS.light_grey}}
          data={notifications}
          ListEmptyComponent={
            <EmptyThing
              style={{marginTop: 50}}
              message="Aucune notification !"
            />
          }
          keyExtractor={item => `notitem${item.id}`}
          renderItem={({item}) => (
            <NotificationItem
              inter_notification={item}
              onclick={_show_content}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
        />
      )}
      <Modal
        style={{position: 'absolute', bottom: 0}}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{paddingTop: 40, paddingHorizontal: 20}}>
          <Icon
            style={{marginBottom: 30}}
            name="arrow-back"
            size={30}
            color="black"
            onPress={e => {
              setmodalVisible(!modalVisible);
            }}
          />
          <View style={styles.notif_meta_container}>
            <Text style={styles.notification_title}>De: </Text>
            <Text style={styles.notif_infotag}>{notides?.expediteur}</Text>
          </View>
          <View style={{...styles.notif_meta_container, marginBottom: 50}}>
            <Text style={styles.notification_title}>Date: </Text>
            <Text style={styles.notif_infotag}>
              {date_to_local_string(notides?.date_envoi)}{' '}
            </Text>
          </View>
          <Text style={styles.notification_description}>
            {notides?.description}
          </Text>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}
const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({AddProfilItem}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
