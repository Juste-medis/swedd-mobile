import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notification from '../../Screens/Drawer/Notifications/Notification';
import Globals from '../../Ressources/Globals';

const Stack = createStackNavigator();

function Navigation({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: Globals.STRINGS.Notification,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
