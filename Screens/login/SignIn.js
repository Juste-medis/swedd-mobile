/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, Text, ScrollView, ActivityIndicator} from 'react-native';

import Globals from '../../Ressources/Globals';
import {styleSignIn as styles} from '../../Ressources/Styles';
import Storer from '../../API/storer';
import RNReastart from 'react-native-restart';
import Toast from 'react-native-toast-message';
import Fetcher from '../../API/fetcher';
import {Schemasignin} from '../../API/schemas';
import {Input} from 'react-native-elements';

//search "beautiful textinput on google"
export default function SignIn({navigation}) {
  const [mail, setmail] = useState('');
  const [password, setpassword] = useState('');

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
      await Schemasignin.validate({mail, password});
      setspinner(true);
      Fetcher.AuthSignin(
        JSON.stringify({
          user: {
            mail,
            password,
          },
        }),
      )
        .then((res) => {
          setspinner(false);
          if (res.errors) {
            set_wrong_text(
              typeof res.errors[0] === 'string'
                ? res.errors[0]
                : Globals.STRINGS.Ocurred_error,
            );
            setspinner(false);
          } else {
            Globals.PROFIL_INFO = res;
            Toast.show({
              type: 'success',
              text1: 'Bienvenu',
              text2: res?.user?.username,
            });
            Storer.storeData('@ProfilInfo', {...res, mail, password}).then(
              () => {
                Storer.storeData('@USER_TYPE', 1).then(() => {
                  RNReastart.Restart();
                });
              },
            );
          }
        })
        .catch((err) => {
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
      <Image source={Globals.IMAGES.LOGO} style={styles.Image_style} />
      <ScrollView style={styles.center_scroll}>
        <Title style={styles.titleText}>{Globals.STRINGS.hello}</Title>
        <View style={styles.center_container}>
          {wrong_logins_text.length > 2 && (
            <View style={styles.wrong_login_container}>
              <Text style={styles.wrong_login_found_text}>
                {wrong_logins_text}
              </Text>
            </View>
          )}

          <Input
            placeholder={Globals.STRINGS.mail}
            rightIcon={{type: 'font-awesome', name: 'mail'}}
            onChangeText={(name) => setmail(name)}
            style={styles.input}
            value={mail}
          />

          <Input
            secureTextEntry={true}
            labelName="password"
            value={password}
            style={styles.input}
            onChangeText={(userpassword) => setpassword(userpassword)}
            placeholder="Mot de passe"
          />

          <View style={styles.err_cont}>
            {spinner ? (
              <ActivityIndicator
                style={styles.indicator}
                size="large"
                color={Globals.COLORS.primary_pure}
              />
            ) : (
              <FormButton
                title={Globals.STRINGS.connection}
                modeValue="contained"
                labelStyle={styles.loginButtonLabel}
                onPress={() => {
                  onSignInPressed();
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
