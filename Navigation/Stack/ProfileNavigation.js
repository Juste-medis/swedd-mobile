import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../../Screens/Drawer/Account/Account";
import Personal from "../../Screens/Drawer/Account/Personal";
import Security from "../../Screens/Drawer/Account/Security";
import HamburgerIcon from "../../components/Gadgets/drawer_toggle";
import Globals from "../../Ressources/Globals";

const Stack = createStackNavigator();
function Navigation({ navigation }) {
  const navOptions = {
    headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: "#FFFFFF",
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <Stack.Navigator initialRouteName="Profil">
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
          title: "Sécurité",
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
