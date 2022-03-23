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
import Fetcher from '../../../API/fakeApi';
import {toast_message, UriEncoder} from '../../../Helpers/Utils';

function Personal(route) {
  let profil = route.my_profil.account;
  let modifying = {};
  const [modibool, setmodibool] = React.useState(false);
  const [spinner, setspinner] = React.useState(false);
  React.useEffect(() => {}, []);
  let menuoth = [
    {
      icon: 'person-circle',
      title: Globals.STRINGS.firstname,
      value: profil.last_name,
      key: 'last_name',
    },
    {
      icon: 'person-circle-outline',
      title: Globals.STRINGS.lastname,
      value: profil.first_name,
      key: 'first_name',
    },
    {
      icon: 'at-circle',
      title: Globals.STRINGS.mail,
      value: profil.mail,
      key: 'mail',
    },
    {
      icon: 'location',
      title: 'Addresse',
      value: profil.address,
      key: 'address',
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
      Fetcher.UpdateData(UriEncoder(modifying))
        .then(res => {
          if (res.message) {
            toast_message(res.message);
          } else {
            toast_message(Globals.STRINGS.sucess_Update);
            route.setProfil(modifying);
            //todo web developp un endpoint pour obtenir toutes les information (current modified)
            //Storer.StoreProfil();
            setspinner(false);
          }
        })
        .catch(err => {
          setspinner(false);
          toast_message(`${err}`);
        });
    }
  }

  const menu_main = data => {
    return (
      <View style={{backgroundColor: 'white', width: '100%'}}>
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
                      fontWeight: 'bold',
                    },
                  ]}>
                  {item.title}
                </Text>
              </View>
              <TextInput
                style={{
                  width: '100%',
                  color: Globals.COLORS.grey,
                  fontWeight: '500',
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
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={[styles.main_container, {backgroundColor: 'white'}]}>
        <Text
          style={{
            textAlign: 'left',
            width: '100%',
            marginBottom: 20,
            padding: 10,
            fontWeight: 'bold',
          }}>
          Information relative à votre profil personel
        </Text>
        {menu_main(menuoth)}
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
