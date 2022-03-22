import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../../Screens/Drawer/About/About";
import HamburgerIcon from "../../components/Gadgets/drawer_toggle";
import Globals from "../../Ressources/Globals";

const Stack = createStackNavigator();
function Navigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
          title: Globals.STRINGS.About,
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
