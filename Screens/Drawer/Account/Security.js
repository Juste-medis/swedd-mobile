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
import Fetcher from '../../../API/fakeApi';
import {toast_message, UriEncoder} from '../../../Helpers/Utils';

function Security(route) {
  let modifying = {};
  const [modibool, setmodibool] = React.useState(false);
  const [spinner, setspinner] = React.useState(false);
  React.useEffect(() => {}, []);
  let menuoth = [
    {
      icon: 'lock-closed',
      title: Globals.STRINGS.password,
      key: 'password',
    },
    {
      icon: 'lock-closed-outline',
      title: Globals.STRINGS.old_password,
      key: 'password',
    },
    {
      icon: 'lock-closed-outline',
      title: Globals.STRINGS.new_pass,
      key: 'new_pass',
    },
    {
      icon: 'lock-closed-outline',
      title: Globals.STRINGS.confirm_password,
      key: 'password_conf',
    },
  ];
  function submit_modi() {
    console.log(modifying);
    setmodibool(!modibool);
    if (modibool) {
      if (
        !modifying.new_pass ||
        !modifying.password_conf ||
        !modifying.password ||
        modifying.new_pass !== modifying.password_conf
      ) {
        toast_message(
          'les mots de passes ne se correspondent pas ou ne respectent pas la taille minim (6 caractères).',
        );
      } else {
        setspinner(true);
        Fetcher.ChangePassPassu(UriEncoder(modifying))
          .then(res => {
            if (!res.error) {
              toast_message(res.success);
            } else {
              toast_message(res.error);
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
      <View style={{width: '100%'}}>
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
                  fontSize: 20,
                }}
                autoCapitalize="none"
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
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={{backgroundColor: Globals.COLORS.surface}}>
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
