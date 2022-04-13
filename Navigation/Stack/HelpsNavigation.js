import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Helps from '../../Screens/Drawer/Helps/Helps';
import Globals from '../../Ressources/Globals';

const Stack = createStackNavigator();
export default function HelpsNavigation({navigation}) {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={Helps}
        options={{
          title: Globals.STRINGS.About,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
