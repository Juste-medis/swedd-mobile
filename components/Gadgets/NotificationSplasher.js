import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import Globals from '../../Ressources/Globals';

function NotificationSplasher(route) {
  if (Globals.USER_TYPE) {
    let pub = route.my_profil.account.notifications.length;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.main_container}
        onPress={() => {
          route.navigation.navigate('Notification');
        }}>
        <Icon
          style={styles.icon}
          name="ios-notifications-sharp"
          size={40}
          color={Globals.COLORS.primary}
        />
        <Text style={styles.price}>{pub < 10 ? pub : '9+'}</Text>
      </TouchableOpacity>
    );
  } else {
    return <Text />;
  }
}
const styles = StyleSheet.create({
  main_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
  },
  icon: {
    alignSelf: 'center',
  },
  price: {
    fontFamily: 'Lato-Bold',
    color: Globals.COLORS.white,
    position: 'absolute',
    fontSize: 10,
    alignSelf: 'center',
    top: '10%',
    right: -4,
    backgroundColor: Globals.COLORS.red,
    borderRadius: 20,
    padding: 5,
    elevation: 10,
  },
});

const mapStateToProps = state => {
  const {my_profil} = state;
  return {my_profil};
};

export default connect(mapStateToProps)(NotificationSplasher);
