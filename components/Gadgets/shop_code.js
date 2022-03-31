import React, {useState} from 'react';

import {Dialog} from 'react-native-simple-dialogs';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';
import Globals from '../../myConstants/Globals';
import {TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import DataMatClass from '../../myConstants/Data/classe_matiere';

export default function ShopCodeIcon(props) {
  const [mMatiere, set_matiere] = useState('math');
  const [mClasse, set_classe] = useState('ci');
  const [mNb_heure, setNb_heure] = useState(2);
  const [total_Price, set_total_Price] = useState(100000);

  const [mNb_heure_valid, set_mNb_heure_valid] = useState(true);
  const [dialogVisible, set_dialogVisible] = useState(true);
  const [wrong_field_message, set_wrong_field_message] = useState('');

  function entered_nbre_heure(text) {
    if (isNaN(text)) {
      set_mNb_heure_valid(false);
      set_wrong_field_message(
        "Nombre d'heure invalide . Saisissez un nombre valide .",
      );
    } else {
      set_mNb_heure_valid(true);
      set_wrong_field_message('');
      setNb_heure(Number(text));
      //price calculating
      set_total_Price(mNb_heure * 1200);
    }
  }

  function onvalidate() {
    if (mNb_heure_valid) {
      //Data processing
      set_dialogVisible(false);
    }
  }
  function onCancellick() {
    set_dialogVisible(false);
  }

  const MatpickerItems = DataMatClass.MatiereData.map(mat => (
    <Picker.Item label={mat.label.toString()} value={mat.label.toLowerCase()} />
  ));
  const ClasspickerItems = DataMatClass.ClassData.map(mat => (
    <Picker.Item label={mat.label.toString()} value={mat.label.toLowerCase()} />
  ));

  return (
    <Dialog
      visible={dialogVisible}
      title="Achat de code"
      onTouchOutside={() => set_dialogVisible(false)}>
      <View style={styles.main_container}>
        <View style={styles.top_container}>
          <Picker
            selectedValue={mMatiere.toLowerCase().replace(/"/g, '')}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) => {
              set_matiere(DataMatClass.MatiereData[itemIndex].label);
            }}>
            {MatpickerItems}
          </Picker>
          <Picker
            selectedValue={mClasse.toLowerCase().replace(/"/g, '')}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) => {
              set_classe(DataMatClass.ClassData[itemIndex].label);
            }}>
            {ClasspickerItems}
          </Picker>
        </View>
        <View style={styles.center_container}>
          <View style={styles.property_container}>
            <Text style={styles.input_label}>
              {Globals.STRINGS.hour_amount}:
            </Text>
            <TextInput
              style={styles.center_input_text}
              defaultValue={2}
              keyboardType="numeric"
              onChangeText={text => entered_nbre_heure(text)}
            />
          </View>
          <Text>{Globals.STRINGS.fixed_price + ': ' + total_Price}</Text>
        </View>
        <View style={styles.bottom_container}>
          <Text> {wrong_field_message} </Text>
          <TouchableOpacity onPress={onCancellick}>
            <View style={styles.bottom_button_button}>
              <Text color="white" fontWeight="bold">
                {Globals.STRINGS.cancel}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onvalidate}>
            <View style={styles.bottom_button_button}>
              <Text color="white" fontWeight="bold">
                {Globals.STRINGS.validate}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
}
const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_label: {
    fontFamily: 'Lato-Bold',
    start: 10,
    flexWrap: 'wrap',
    position: 'absolute',
  },
  center_container: {
    flexDirection: 'column',
  },
  bottom_container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
  },
  property_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Header_input_text: {},
  center_input_text: {
    color: 'black',
    flexWrap: 'wrap',
  },
  bottom_button_button: {
    height: 25,
    marginBottom: 2,
  },
});
