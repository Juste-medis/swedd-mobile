/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Globals from '../../Ressources/Globals';
import {styleSignIn as styles} from '../../Ressources/Styles';
import Toast from 'react-native-toast-message';
import Fetcher from '../../API/fakeApi';
import {Schemasignin} from '../../API/schemas';
import {Input, Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export default function ForgetPass({navigation}) {
  const [mail, setmail] = useState('');

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
  async function onRessetPressed() {
    try {
      setspinner(true);
      await Schemasignin.validate({mail});
      Fetcher.RessetPassword(
        JSON.stringify({
          user: {
            mail,
          },
        }),
      )
        .then(res => {
          setspinner(false);
          if (!res.error) {
            Globals.PROFIL_INFO = res;
            Toast.show({
              type: 'success',
              text1: res.success_message || Globals.STRINGS.Ocurred_error,
            });
          } else {
            set_wrong_text(res.error);
            setspinner(false);
          }
        })
        .catch(err => {
          err_err(err);
        });
    } catch (e) {
      if (e.name === 'ValidationError') {
        set_wrong_text(e.message);
        setspinner(false);
      }
    }
  }
  return (
    <View style={styles.container}>
      <Toast />

      <LottieView
        source={require('../../assets/loties/forget_pass.json')}
        autoPlay
        loop
        style={{width: 150, height: 150, marginVertical: 20}}
      />

      <ScrollView style={styles.center_scroll}>
        <Text style={styles.titleText}>
          Recupération de votre mot de passe !
        </Text>
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
            rightIcon={<Icon name="mail" size={24} color="black" />}
            rightIconContainerStyle={{position: 'absolute', right: 15}}
            onChangeText={name => setmail(name)}
            style={styles.input}
            value={mail}
            inputContainerStyle={{borderBottomWidth: 0}}
          />

          <View style={styles.err_cont}>
            <Button
              title="rechercher"
              loading={spinner}
              loadingProps={{
                size: 'small',
                color: Globals.COLORS.primary,
              }}
              TouchableComponent={TouchableNativeFeedback}
              background={TouchableNativeFeedback.Ripple(
                Globals.COLORS.primary,
                true,
              )}
              disabled={spinner}
              type="outline"
              onPress={() => onRessetPressed()}
              titleStyle={{fontWeight: '700'}}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
