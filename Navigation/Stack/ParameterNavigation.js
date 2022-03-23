import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Parameter from '../../Screens/Drawer/Parameter/Parameter';
import Globals from '../../Ressources/Globals';

const Stack = createStackNavigator();
function Navigation({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Parameter">
      <Stack.Screen
        name="Parameter"
        component={Parameter}
        options={{
          title: Globals.STRINGS.Parameter,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
