/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, ScrollView, ActivityIndicator} from 'react-native';

import Globals from '../../Ressources/Globals';
import {styleSignIn as styles} from '../../Ressources/Styles';
import Storer from '../../API/storer';
import RNReastart from 'react-native-restart';
import Toast from 'react-native-toast-message';
import Fetcher from '../../API/fetcher';
import {Schemasignin} from '../../API/schemas';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default function SignIn({navigation}) {
  const [username, setusername] = useState('facilitateur');
  const [password, setpassword] = useState('facilitateur');

  const [wrong_logins_text, set_wrong_text] = useState('');
  const [spinner, setspinner] = useState(false);

  function err_err(err) {
    setspinner(false);
    Toast.show({
      type: 'error',
      text1: 'Eureur',
      text2:
        err.name === 'TypeError'
          ? Globals.STRINGS.no_internet
          : err.message || Globals.STRINGS.Ocurred_error,
    });
  }
  async function onSignInPressed() {
    try {
      await Schemasignin.validate({username, password});
      setspinner(true);
      Fetcher.AuthSignin(
        JSON.stringify({
          username,
          password,
        }),
      )
        .then(async res => {
          if (res.error) {
            set_wrong_text(res.error);
            setspinner(false);
          } else {
            let infos = await Fetcher.GetUserData('');
            let kits = await Fetcher.Getkits('');
            console.log(infos);
            infos = {
              ...infos,
              formations: infos?.formations?.map(mes => {
                return {
                  label: mes.libelle,
                  value: mes.iri,
                };
              }),
              collecteursListe: infos?.collecteursListe?.map(mes => {
                return {
                  label: mes.username,
                  value: mes.iri,
                };
              }),
              kitsList: kits.map(mes => {
                return {
                  ...mes,
                  nombreRecu: 0,
                  aRecuKit: false,
                };
              }),
              user_type:
                infos?.ong?.type === 'SWEDD'
                  ? 'facilitateur_2'
                  : 'facilitateur_1',
              notifications: [],
            };
            Globals.PROFIL_INFO = infos;
            Toast.show({
              type: 'success',
              text1: 'Bienvenu',
              text2: infos?.prenom,
            });
            setspinner(false);
            Storer.storeData('@ProfilInfo', {
              ...infos,
              password,
            }).then(() => {
              Storer.storeData('@USER_TYPE', 1).then(() => {
                RNReastart.Restart();
              });
            });
          }
        })
        .catch(err => {
          err_err(err);
        });
    } catch (e) {
      if (e.name === 'ValidationError') {
        set_wrong_text(e.message);
      }
    }
  }
  return (
    <View style={styles.container} source={Globals.IMAGES.LO_SPLASH}>
      <Toast />
      <ScrollView
        style={styles.center_scroll}
        keyboardShouldPersistTaps="always">
        <Text style={styles.titleText}>{Globals.STRINGS.hello}</Text>
        <View style={styles.center_container}>
          <Image
            source={require('../../assets/flag_ben.png')}
            resizeMode="contain"
            style={styles.Image_flag}
          />
          <Image
            source={Globals.IMAGES.LO_SPLASH}
            resizeMode="contain"
            style={styles.Image_style}
          />

          {wrong_logins_text.length > 2 && (
            <View style={styles.wrong_login_container}>
              <Text style={styles.wrong_login_found_text}>
                {wrong_logins_text}
              </Text>
            </View>
          )}

          <Input
            placeholder={Globals.STRINGS.username}
            rightIcon={<Icon name="user" size={24} color="black" />}
            rightIconContainerStyle={{position: 'absolute', right: 15}}
            onChangeText={name => setusername(name)}
            style={styles.input}
            value={username}
            underlineColorAndroi
            inputContainerStyle={{
              borderBottomWidth: 0,
              width: '90%',
            }}
            containerStyle={{
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              height: 70,
            }}
          />

          <Input
            secureTextEntry={true}
            labelName="password"
            rightIcon={<Icon name="lock" size={24} color="black" />}
            rightIconContainerStyle={{position: 'absolute', right: 15}}
            value={password}
            onChangeText={userpassword => setpassword(userpassword)}
            placeholder="Mot de passe"
            inputContainerStyle={{
              borderBottomWidth: 0,
              width: '90%',
              display: 'flex',
              justifyContent: 'center',
            }}
            inputStyle={styles.input}
            containerStyle={{
              display: 'flex',
              alignItems: 'center',
            }}
          />
          <View style={styles.err_cont}>
            {spinner ? (
              <ActivityIndicator
                style={styles.indicator}
                size="large"
                color={Globals.COLORS.primary_pure}
              />
            ) : (
              <Button
                title={Globals.STRINGS.connection}
                loading={false}
                loadingProps={{size: 'small', color: 'white'}}
                buttonStyle={{
                  backgroundColor: 'rgb(32, 137, 220)',
                  borderRadius: 5,
                }}
                titleStyle={styles.loginButtonLabel}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                onPress={() => {
                  onSignInPressed();
                }}
              />
            )}
          </View>
          <View>
            <Text
              style={{color: Globals.COLORS.primary_pure, marginTop: 20}}
              onPress={() => {
                navigation.navigate('ForgetPass');
              }}>
              Mot de passe oublié ?
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
