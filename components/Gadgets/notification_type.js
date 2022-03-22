import React, {useState} from 'react';
import {StyleSheet, View, Text, CheckBox, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import NotificationData from '../../myConstants/Data/NotificationAlertList';
import Globals from '../Globals';
//gerer son goback
export default function NotifPar(route) {
  let title = route.title;
  const [selectedVal, setselectedVal] = useState(route.selectedValue);
  const [check_vali, setselectedVali] = useState(route.check_val);

  const OptionItems = NotificationData.map((mat) => (
    <Picker.Item label={mat.toString()} value={mat.toLowerCase()} />
  ));
  function setSelection() {
    console.log(check_vali);
    setselectedVali(!check_vali);
  }
  return (
    <View style={styles.main_container}>
      <View>
        <Text style={styles.label_notification_title}>{title}</Text>
        <Picker
          selectedValue={selectedVal.toLowerCase()}
          style={{
            height: 25,
            width: 250,
            backgroundColor: 'white',
            color: Globals.COLORS.teal,
          }}
          onValueChange={(itemValue, itemIndex) => {
            setselectedVal(itemValue);
          }}>
          {OptionItems}
        </Picker>
      </View>

      <View style={styles.separator}>
        <CheckBox
          value={check_vali}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Globals.COLORS.light_green,
    elevation: 2,
    padding: 10,
  },
  separator: {
    height: '80%',
    width: '15%',
    borderLeftColor: Globals.COLORS.teal,
    borderLeftWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check_noti: {
    alignSelf: 'center',
  },
  property_container: {flexDirection: 'column', justifyContent: 'center'},
  label_notification_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Globals.COLORS.pur_green,
  },
  label_notification_value: {
    fontSize: 15,
    fontWeight: '100',
    color: Globals.COLORS.pur_green,
  },
});
