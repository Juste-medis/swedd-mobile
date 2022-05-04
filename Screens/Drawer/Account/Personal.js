/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Globals from '../../../Ressources/Globals';
import {styleAccount as styles} from '../../../Ressources/Styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setProfil} from '../../../Store/Actions';
import Icon from 'react-native-vector-icons/Ionicons';
import Storer from '../../../API/storer';
import Fetcher from '../../../API/fetcher';
import {toast_message} from '../../../Helpers/Utils';
import RNReastart from 'react-native-restart';

function Personal(route) {
  let profil = route.my_profil.account;
  console.log(profil);
  let modifying = {};
  const [modibool, setmodibool] = React.useState(false);
  const [spinner, setspinner] = React.useState(false);
  React.useEffect(() => {}, []);
  let menuoth = [
    {
      icon: 'person-circle',
      title: Globals.STRINGS.username,
      value: profil.username,
      key: 'username',
    },
    {
      icon: 'person-circle',
      title: Globals.STRINGS.firstname,
      value: profil.nom,
      key: 'nom',
    },
    {
      icon: 'person-circle-outline',
      title: Globals.STRINGS.lastname,
      value: profil.prenom,
      key: 'prenom',
    },
    {
      icon: 'mail',
      title: Globals.STRINGS.mail,
      value: profil.email,
      key: 'email',
    },
    {
      icon: 'phone-portrait',
      title: 'Téléphone',
      value: profil.contact,
      key: 'contact',
    },
    {
      icon: 'md-alert-circle',
      title: Globals.STRINGS.About,
      value: profil.description,
      key: 'description',
    },
  ];

  function submit_modi() {
    setmodibool(!modibool);
    if (modibool) {
      setspinner(true);
      console.log(modifying);
      Fetcher.UpdateUserData(JSON.stringify(modifying), Globals.PROFIL_INFO.id)
        .then(res => {
          if (res['@type'] === 'hydra:Error') {
            toast_message(res['hydra:description']);
          } else {
            Fetcher.SyncUserData();
            toast_message(Globals.STRINGS.sucess_Update);
            route.setProfil(modifying);
            setspinner(false);
          }
        })
        .catch(err => {
          setspinner(false);
          console.log(err);
          if (err?.message?.includes("Unrecognized token '<'")) {
            Storer.removeData();
            RNReastart.Restart();
            return false;
          } else {
            toast_message(`${err}`);
          }
        });
    }
  }

  const menu_main = data => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          elevation: 10,
          width: '100%',
          paddingVertical: 30,
          borderTopWidth: 5,
          borderTopColor: Globals.COLORS.primary,
          borderRadius: 20,
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={[
                styles.menu_item,
                {
                  flexDirection: 'column',
                  backgroundColor: Globals.COLORS.white,
                },
              ]}
              key={index}>
              <View
                style={{
                  display: 'flex',
                  backgroundColor: Globals.COLORS.white,
                  flexDirection: 'row',
                  zIndex: 1,
                  alignSelf: 'flex-start',
                  alignContent: 'center',
                  ...(modibool
                    ? {
                        position: 'absolute',
                        top: 0,
                        left: 10,
                        backgroundColor: 'white',
                      }
                    : {}),
                }}>
                <Icon
                  name={item.icon}
                  size={25}
                  color={Globals.COLORS.arsenic2}
                />
                <Text
                  style={[
                    {
                      color: Globals.COLORS.black,
                      marginStart: 2,
                      textAlignVertical: 'center',
                      fontFamily: 'Lato-Bold',
                    },
                  ]}>
                  {item.title}
                </Text>
              </View>
              <TextInput
                style={{
                  width: '100%',
                  color: Globals.COLORS.blue_dark,
                  fontWeight: modibool ? '300' : '500',
                  ...(modibool
                    ? {
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 20,
                        borderColor: Globals.COLORS.grey,
                      }
                    : {}),
                }}
                defaultValue={item.value}
                onChangeText={name => (modifying[item.key] = name)}
                multiline={item.title === Globals.STRINGS.About ? true : false}
                placeholder={item.value}
                placeholderTextColor={Globals.COLORS.arsenic2}
                editable={modibool}
              />
            </View>
          );
        })}
        {spinner ? (
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color={Globals.COLORS.primary_pure}
          />
        ) : (
          <TouchableOpacity
            style={styles.buts_style}
            onPress={() => {
              submit_modi();
            }}
            disabled={spinner}
            activeOpacity={0.8}>
            <Text style={styles.boldText_touchable}>
              {!modibool ? Globals.STRINGS.modify : Globals.STRINGS.submit}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={{backgroundColor: 'white'}}>
      <View style={[styles.main_container, {backgroundColor: 'white'}]}>
        <Text
          style={{
            textAlign: 'left',
            width: '100%',
            marginBottom: 20,
            padding: 10,
            fontFamily: 'Lato-Regular',
          }}>
          Information relative à votre profil personel
        </Text>
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
  bindActionCreators({setProfil}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
