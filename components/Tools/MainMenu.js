import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Globals from '../../Ressources/Globals';
import Icon from 'react-native-vector-icons/Ionicons';

const MainMenu = route => {
  let {actions} = route;
  const [modalVisible, setModalVisible] = useState(false);

  const ShowAction = actions.map(mes => {
    let {title, handler} = mes;
    return (
      <TouchableOpacity
        key={title}
        style={[
          styles.button,
          title === Globals.STRINGS.delete
            ? {
                backgroundColor: Globals.COLORS.red,
              }
            : null,
          ,
        ]}
        activeOpacity={1}
        onPress={() => {
          handler();
          setModalVisible(!modalVisible);
        }}>
        <Text
          style={[
            styles.button_text,
            {
              color:
                title === Globals.STRINGS.delete
                  ? 'white'
                  : Globals.COLORS.arsenic2,
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={styles.modal_outcontainer}
          activeOpacity={1}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <View style={styles.modal_container}>
          <ScrollView style={styles.scrollView}>{ShowAction}</ScrollView>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.imag_container}
        onPress={() => setModalVisible(true)}>
        <Icon
          style={{margin: 10}}
          name="ellipsis-vertical"
          size={20}
          color={Globals.COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: Globals.COLORS.white,
    elevation: 5,
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },
  scrollView: {
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 50,
    maxWidth: '50%',
    height: '100%',
  },
  modal_outcontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imag_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
});

export default MainMenu;
