import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Parameter from "../../Screens/Drawer/Parameter/Parameter";
import HamburgerIcon from "../../components/Gadgets/drawer_toggle";
import Globals from "../../Ressources/Globals";

const Stack = createStackNavigator();
function Navigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Parameter">
      <Stack.Screen
        name="Parameter"
        component={Parameter}
        options={{
          headerLeft: () => <HamburgerIcon navigationProps={navigation} />,

          title: Globals.STRINGS.Parameter,
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
