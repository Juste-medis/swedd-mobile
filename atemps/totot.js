import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      style={{position: 'absolute', bottom: 0, top: 0}}
      animationType="slide"
      transparent={true}
      visible={modalVisible.dateAjout !== undefined}
      onRequestClose={() => {
        setmodalVisible(false);
      }}>
      <View
        style={{
          paddingVertical: 20,
        }}>
        <TouchableOpacity style={{backgroundColor: 'white'}}>
          <Text style={{color: 'red'}}>Supprimer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => _show_content(modalVisible)}
          style={{backgroundColor: 'white'}}>
          <Text style={{color: 'blue'}}>Modifier</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const selfstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
