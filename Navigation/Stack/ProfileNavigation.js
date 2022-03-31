import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../../Screens/Drawer/Account/Account';
import Personal from '../../Screens/Drawer/Account/Personal';
import Security from '../../Screens/Drawer/Account/Security';
import Globals from '../../Ressources/Globals';
import Notification from '../../Screens/Drawer/Notifications/Notification';

const Stack = createStackNavigator();
function Navigation({navigation}) {
  const navOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          ...navOptions,
          title: Globals.STRINGS.Profil,
        }}
      />
      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{
          ...navOptions,
          title: Globals.STRINGS.personal_informations,
        }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          ...navOptions,
          title: 'Sécurité',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Security}
        options={{
          ...navOptions,
          title: 'Notification',
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
