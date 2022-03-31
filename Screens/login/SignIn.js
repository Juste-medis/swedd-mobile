/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, ScrollView, ActivityIndicator} from 'react-native';

import Globals from '../../Ressources/Globals';
import {styleSignIn as styles} from '../../Ressources/Styles';
import Storer from '../../API/storer';
import RNReastart from 'react-native-restart';
import Toast from 'react-native-toast-message';
import Fetcher from '../../API/fakeApi';
import {Schemasignin} from '../../API/schemas';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
//search "beautiful textinput on google"
import {CheckBox} from 'react-native-elements';

export default function SignIn({navigation}) {
  const [vip, setvip] = useState(false);
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
          mail,
          password,
          //to remove
          user_type: vip ? 'facilitateur_2' : 'facilitateur_1',
          //to remove
        }),
      )
        .then(res => {
          setspinner(false);
          if (res.error) {
            set_wrong_text(res.error);
            setspinner(false);
          } else {
            Globals.PROFIL_INFO = res;
            Toast.show({
              type: 'success',
              text1: 'Bienvenu',
              text2: res?.first_name,
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
      <ScrollView style={styles.center_scroll}>
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
            placeholder={Globals.STRINGS.mail}
            rightIcon={<Icon name="mail" size={24} color="black" />}
            rightIconContainerStyle={{position: 'absolute', right: 15}}
            onChangeText={name => setmail(name)}
            style={styles.input}
            value={mail}
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
          <CheckBox
            containerStyle={{
              backgroundColor: 'rgba(9,105,195,0.05)',
              borderRadius: 50,
              borderWidth: 0,
            }}
            textStyle={{
              padding: 0,
            }}
            style={{
              margin: 0,
              padding: 0,
            }}
            Component={Text}
            center
            title="vip"
            checked={vip}
            onPress={checked => {
              setvip(!vip);
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
