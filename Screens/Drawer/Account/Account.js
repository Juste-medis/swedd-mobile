/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View, Linking, ActivityIndicator} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddProfilItem} from '../../../Store/Actions';
import Icon from 'react-native-vector-icons/Ionicons';
import {toast_message} from '../../../Helpers/Utils';
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
    ...[
      profil.user_type === 'facilitateur_1'
        ? {
            icon: 'ios-notifications-sharp',
            title: Globals.STRINGS.Notification,
            onclick: () => {
              route.navigation.navigate('Notification');
            },
            value: profil.notifications.length,
          }
        : {},
    ],
    {
      icon: 'ios-key-sharp',
      title: 'Sécurité',
      onclick: () => {
        route.navigation.navigate('Security');
      },
    },
    ...[
      profil.user_type === 'facilitateur_1'
        ? {
            icon: 'people-outline',
            title: 'Responsable superviseur Niveau 2',
            onclick: () => {
              route.navigation.navigate('Notes');
            },
          }
        : {},
    ],
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
  ];

  const menu_main = data => {
    return (
      <View style={{width: '100%'}}>
        {data.map((item, index) => {
          return item.title ? (
            <View
              style={{
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 10,
              }}
              key={index}>
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
                      fontFamily: 'Lato-Regular',
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
                      fontFamily: 'Lato-Regular',
                      fontSize: 15,
                      marginTop: 10,
                    }}>
                    {item.value}
                  </Text>
                )}
              </SimpleRipple>
            </View>
          ) : null;
        })}
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.main_container}>
        <View style={{width: '100%', alignItems: 'center'}}>
          {profil.urlPhoto !== '' ? (
            <Image
              source={{uri: profil.urlPhoto}}
              containerStyle={styles.item}
              style={styles.image_avatar}
              PlaceholderContent={<ActivityIndicator />}
            />
          ) : (
            <View style={styles.def_avatar}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 50,
                  fontFamily: 'Lato-Bold',
                }}>
                {profil.prenom.substr(0, 2)}
              </Text>
            </View>
          )}

          <Text style={styles.name_title}>
            {profil.nom + ' ' + profil.prenom.toUpperCase().charAt(0) + '.'}
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
                fontFamily: 'Lato-Regular',
              },
            ]}>
            {Globals.STRINGS.other.toUpperCase()}
          </Text>
        </View>
        {menu_main(menuoth)}
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
