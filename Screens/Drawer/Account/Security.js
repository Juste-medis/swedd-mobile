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
import Fetcher from '../../../API/fetcher';
import {toast_message, UriEncoder} from '../../../Helpers/Utils';

function Security(route) {
  let profil = route.my_profil.account;
  let modifying = {};
  const [modibool, setmodibool] = React.useState(false);
  const [spinner, setspinner] = React.useState(false);
  React.useEffect(() => {}, []);
  let menuoth = [
    {
      icon: 'lock-closed',
      title: Globals.STRINGS.password,
      value: profil.password,
      key: 'user_pass',
    },
    {
      icon: 'lock-closed-outline',
      title: Globals.STRINGS.old_password,
      value: '',
      key: 'user_pass',
    },
    {
      icon: 'lock-closed-outline',
      title: Globals.STRINGS.new_pass,
      value: '',
      key: 'new_pass',
    },
    {
      icon: 'lock-closed-outline',
      title: Globals.STRINGS.confirm_password,
      value: '',
      key: 'password_conf',
    },
  ];
  function submit_modi() {
    setmodibool(!modibool);
    if (modibool) {
      if (
        !modifying.new_pass ||
        !modifying.password_conf ||
        !modifying.user_pass ||
        modifying.new_pass !== modifying.password_conf
      ) {
        toast_message(
          'les mots de passes ne se correspondent pas ou ne respectent pas la taille minim (6 caractères).',
        );
      } else {
        setspinner(true);
        Fetcher.ChangePassPassu(UriEncoder(modifying))
          .then(res => {
            if (res.message) {
              toast_message(res.message);
            } else {
              toast_message(res.ok);
            }
            setspinner(false);
          })
          .catch(err => {
            setspinner(false);
            if (!Globals.INTERNET) {
              toast_message(Globals.STRINGS.no_internet);
              route.navigation.goBack();
            } else {
              toast_message(`${err}`);
            }
          });
      }
    }
  }

  const menu_main = data => {
    data = modibool ? [data[0], data[2], data[3]] : [data[0]];
    return (
      <View style={{backgroundColor: 'white', width: '100%'}}>
        {data.map((item, index) => {
          return (
            <View
              style={[
                styles.menu_item,
                {
                  borderRadius: 8,
                  flexDirection: 'column',
                  marginBottom: 10,
                  backgroundColor: Globals.COLORS.white,
                  elevation: 1,
                },
              ]}
              key={index}>
              <View
                style={{
                  backgroundColor: Globals.COLORS.white,
                  flexDirection: 'row',
                  zIndex: 1,
                  alignSelf: 'flex-start',
                }}>
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
                  ]}>
                  {item.title}
                </Text>
              </View>
              <TextInput
                style={{
                  width: '90%',
                  color: Globals.COLORS.blue_grey,
                  fontWeight: modibool ? 'normal' : 'bold',
                }}
                defaultValue={item.value}
                onChangeText={name => (modifying[item.key] = name)}
                multiline={item.title === Globals.STRINGS.About ? true : false}
                secureTextEntry={item.title.includes('pass')}
                editable={modibool}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={[styles.main_container]}>
        {menu_main(menuoth)}
        {spinner ? (
          <ActivityIndicator size={50} color={Globals.COLORS.primary} />
        ) : (
          <TouchableOpacity
            style={styles.buts_style}
            onPress={() => {
              submit_modi();
            }}
            activeOpacity={0.8}>
            <Text style={styles.boldText_touchable}>
              {!modibool ? Globals.STRINGS.modify : Globals.STRINGS.submit}
            </Text>
          </TouchableOpacity>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Security);
