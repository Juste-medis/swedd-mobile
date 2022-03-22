import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../../Screens/Drawer/Notifications/Notification";
import HamburgerIcon from "../../components/Gadgets/drawer_toggle";
import Globals from "../../Ressources/Globals";

const Stack = createStackNavigator();

function Navigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
          title: Globals.STRINGS.Notification,
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
