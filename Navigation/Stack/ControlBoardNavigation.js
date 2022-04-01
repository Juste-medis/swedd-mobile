import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ControlBoard from '../../Screens/Drawer/ControlBoard/ControlBoard';
import FichesTemplates from '../../Screens/Drawer/ControlBoard/FichesTemplates';
import FicheForm from '../../Screens/Drawer/ControlBoard/FicheForm';
import FichesList from '../../Screens/Drawer/ControlBoard/FichesList';
import Collecteurs from '../../Screens/Drawer/ControlBoard/Collecteurs';

const Stack = createStackNavigator();

function Navigation({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ControlBoard">
      <Stack.Screen
        name="ControlBoard"
        component={ControlBoard}
        options={{
          headerShown: false,
          title: 'toto',
        }}
      />
      <Stack.Screen
        name="FichesTemplates"
        component={FichesTemplates}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FicheForm"
        component={FicheForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Collecteurs"
        component={Collecteurs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FichesList"
        component={FichesList}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
