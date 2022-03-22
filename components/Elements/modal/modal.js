import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const ModalMe = ({ modalVisible, setModalVisible, content, okButton }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              onPress={() => {
                setModalVisible(false);
              }}
              style={styles.icon_close}
              name="close-circle"
              size={25}
              color="red"
            />
            {content}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  icon_close: {
    position: "absolute",
    top: 0,
    overflow: "hidden",
    right: 0,
    padding: 2,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    maxWidth: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalMe;
