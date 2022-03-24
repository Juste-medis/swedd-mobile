import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Linking,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import Icon from 'react-native-vector-icons/Ionicons';
import Storer from '../../../API/storer';
import RNReastart from 'react-native-restart';
import {alert_message, onShare, toast_message} from '../../../Helpers/Utils';
import fetcher from '../../../API/fakeApi';
import {Image} from 'react-native-elements';
import SimpleRipple from '../../../components/Touchable/SimpleRipple';

function Account(route) {
  let profil = route.my_profil.account;
  React.useEffect(() => {
    //route.AddProfilItem({ key: "visitedcourses", data: "^^^^^^^^^^^^^^^^^" });
  }, []);

  let menugen = [
    {
      icon: 'ios-person-circle-sharp',
      title: Globals.STRINGS.personal_informations,
      onclick: () => {
        route.navigation.navigate('Personal');
      },
    },
    {
      icon: 'reader',
      title: 'Fiches',
      onclick: () => {
        Globals.INTERNET
          ? route.navigation.navigate('Command')
          : toast_message(Globals.STRINGS.no_internet);
      },
    },
    {
      icon: 'ios-notifications-sharp',
      title: Globals.STRINGS.Notification,
      onclick: () => {
        route.navigation.navigate('Notification');
      },
      value: profil.notifications.length,
    },
    {
      icon: 'ios-key-sharp',
      title: 'Sécurité',
      onclick: () => {
        Globals.INTERNET
          ? route.navigation.navigate('Security')
          : toast_message(Globals.STRINGS.no_internet);
      },
    },
    {
      icon: 'people-outline',
      title: 'Responsable superviseur Niveau 2',
      onclick: () => {
        route.navigation.navigate('Notes');
      },
    },
  ];

  let menuoth = [
    {
      icon: 'chatbubbles',
      title: 'Faq',
      onclick: () => {
        Linking.openURL('https://swedd.bj/faq/');
      },
    },
    {
      icon: 'body',
      title: 'Contactez SweddBenin',
      onclick: () => {
        Linking.openURL('https://swedd.bj/contact/');
        //route.navigation.navigate("About");
      },
    },
    {
      icon: 'md-phone-portrait',
      title: Globals.STRINGS.About,
      onclick: () => {
        Linking.openURL('https://swedd.bj/presentation-du-projet/');
        //route.navigation.navigate("About");
      },
    },
    {
      icon: 'share',
      title: 'Partager',
      onclick: () => {
        onShare('SweddMobile | tres cool');
      },
    },
  ];

  const menu_main = data => {
    return (
      <View style={{width: '100%'}}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <SimpleRipple
                style={[styles.menu_item, {alignItems: 'center'}]}
                onPress={() => {
                  item.onclick();
                }}
                key={index}>
                <View style={[styles.menu_item, {alignItems: 'center'}]}>
                  <Icon
                    name={item.icon}
                    size={25}
                    color={Globals.COLORS.secondary}
                  />
                  <Text
                    style={{
                      color: Globals.COLORS.arsenic,
                      marginStart: 12,
                      fontWeight: '500',
                      fontSize: 16,
                    }}>
                    {item.title}
                  </Text>
                </View>
                {!item.value ? (
                  <Icon
                    name="ios-chevron-forward-sharp"
                    size={20}
                    color="grey"
                  />
                ) : (
                  <Text
                    style={{
                      ...styles.prop_unity_value,
                      fontSize: 15,
                      marginTop: 10,
                    }}>
                    {item.value}
                  </Text>
                )}
              </SimpleRipple>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.main_container}>
        <View style={{width: '100%', alignItems: 'center'}}>
          {profil.photourl != '' ? (
            <Image
              source={{uri: profil.photourl}}
              containerStyle={styles.item}
              style={styles.image_avatar}
              PlaceholderContent={<ActivityIndicator />}
            />
          ) : (
            <View style={styles.def_avatar}>
              <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>
                {profil.first_name.substr(0, 2)}
              </Text>
            </View>
          )}

          <Text style={styles.name_title}>
            {profil.last_name +
              ' ' +
              profil.first_name.toUpperCase().charAt(0) +
              '.'}
          </Text>

          <Text
            style={[
              styles.menu_title,
              {color: Globals.COLORS.secondary, alignSelf: 'flex-start'},
            ]}>
            {Globals.STRINGS.general.toUpperCase()}
          </Text>
          {menu_main(menugen)}
          <Text
            style={[
              styles.menu_title,
              {
                color: Globals.COLORS.secondary,
                alignSelf: 'flex-start',
                fontFamily: 'Montserrat',
              },
            ]}>
            {Globals.STRINGS.other.toUpperCase()}
          </Text>
        </View>
        {menu_main(menuoth)}
        <TouchableOpacity
          style={styles.buts_style}
          activeOpacity={0.8}
          onPress={() => {
            alert_message(
              'déconnexion',
              Globals.STRINGS.sur_deconnect,
              'Se déconnecter',
              () => {
                fetcher
                  .Signout()
                  .then(resi => {
                    if (resi.data === 1) {
                      Storer.removeData();
                      RNReastart.Restart();
                    } else {
                      alert(Globals.STRINGS.Ocurred_error);
                    }
                  })
                  .catch(err => {
                    if (!Globals.INTERNET) {
                      toast_message(Globals.STRINGS.no_internet);
                      route.navigation.goBack();
                    } else {
                      toast_message(`${err}`);
                    }
                  });
              },
            );
          }}>
          <Text style={styles.boldText_touchable}>se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({AddProfilItem}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
