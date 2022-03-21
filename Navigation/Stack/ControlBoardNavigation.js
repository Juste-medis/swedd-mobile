import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HamburgerIcon from "../../components/Gadgets/drawer_toggle";
import ControlBoard from "../../Screens/Drawer/ControlBoard/ControlBoard";

const Stack = createStackNavigator();

function Navigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ControlBoard">
      <Stack.Screen
        name="ControlBoard"
        component={ControlBoard}
        options={{
          headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
          title: "Tableau de Bord",
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
