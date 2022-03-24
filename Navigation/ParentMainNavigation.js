import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Profil from './Stack/ProfileNavigation';
import About from './Stack/AboutNavigation';
import Notification from './Stack/NotificationNavigation';
import Parameter from './Stack/ParameterNavigation';
import ControlBoard from './Stack/ControlBoardNavigation';
import Globals from '../Ressources/Globals';
import Icono from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, View} from 'react-native';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Image} from 'react-native-elements';

const Drawer = createDrawerNavigator();
function ParentMainNavigation() {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        initialRouteName="Profil"
        drawerContentOptions={{
          activeTintColor: '#30B9AB',
          activeBackgroundColor: 'rgba(0,0,0,.04)',
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            fontFamily: 'PatrickHand-Regular',
          },
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Profil"
          component={Profil}
          options={{
            first: 1,
            title: Globals.STRINGS.Profil,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="person-circle" size={30} color={color} />
              ) : (
                <Icono name="person-circle-outline" size={30} color={color} />
              ),
          }}
        />
        <Drawer.Screen
          name="MainControlBoard"
          component={ControlBoard}
          options={{
            title: Globals.STRINGS.BoardControl,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="ios-pie-chart" size={30} color={color} />
              ) : (
                <Icono name="ios-pie-chart-outline" size={30} color={color} />
              ),
          }}
        />
        <Drawer.Screen
          name="MainParameter"
          component={Parameter}
          options={{
            title: Globals.STRINGS.Parameter,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="settings" size={30} color={color} />
              ) : (
                <Icono name="settings-outline" size={30} color={color} />
              ),
          }}
        />
        <Drawer.Group>
          <Drawer.Screen
            name="MainNotification"
            component={Notification}
            options={{
              groupName: 'Alertes',
              title: Globals.STRINGS.Notification,
              drawerIcon: ({color, focused}) =>
                focused ? (
                  <Icono name="notifications" size={30} color={color} />
                ) : (
                  <Icono name="notifications-outline" size={30} color={color} />
                ),
            }}
          />
        </Drawer.Group>
        <Drawer.Screen
          name="MainFeedBack"
          component={About}
          options={{
            drawerItemStyle: {
              borderColor: Globals.COLORS.grey,
              borderBottomWidth: 1,
            },
            title: 'Aides et Feedback',
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="ios-chatbubbles" size={30} color={color} />
              ) : (
                <Icono name="ios-chatbubbles-outline" size={30} color={color} />
              ),
          }}
        />
        <Drawer.Screen
          name="MainAbout"
          component={About}
          options={{
            drawerItemStyle: {
              borderColor: Globals.COLORS.grey,
              borderBottomWidth: 1,
            },
            title: Globals.STRINGS.About,
            drawerIcon: ({color, focused}) =>
              focused ? (
                <Icono name="md-information-circle" size={30} color={color} />
              ) : (
                <Icono
                  name="md-information-circle-outline"
                  size={30}
                  color={color}
                />
              ),
          }}
        />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
}

const CustomSidebarMenu = props => {
  const {state, descriptors, navigation} = props;
  let lastGroupName = '';
  let newGroup = true;
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            width: '100%',
            backgroundColor: Globals.COLORS.surface,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}>
          {/**Globals.PROFIL_INFO.photourl && Globals.PROFIL_INFO.photourl !== ''  */}
          {1 ? (
            <Image
              source={{
                uri: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/1/8/2/182c0cf196_50167185_proprietaire-chat-min.jpg',
              }}
              style={styles.image_avatar}
              PlaceholderContent={<ActivityIndicator />}
            />
          ) : (
            <View style={styles.def_avatar}>
              <Icono name="person" size={70} color="white" />
            </View>
          )}

          <Text style={styles.name_title}>
            {Globals.PROFIL_INFO.last_name +
              ' ' +
              Globals.PROFIL_INFO.first_name.toUpperCase().charAt(0) +
              '.'}
          </Text>
          <Text style={styles.mail_title}>{Globals.PROFIL_INFO.mail}</Text>
        </View>
        {state.routes.map(route => {
          const {activeTintColor, drawerIcon, title, first, groupName} =
            descriptors[route.key].options;
          if (lastGroupName !== groupName) {
            newGroup = true;
            lastGroupName = groupName;
          } else {
            newGroup = false;
          }
          return (
            <>
              {newGroup ? (
                <View style={styles.sectionContainer}>
                  {!first && (
                    <Text
                      key={groupName}
                      style={{marginLeft: 16, fontWeight: 'bold'}}>
                      {groupName}
                    </Text>
                  )}
                  {!first && <View style={styles.sectionLine} />}
                </View>
              ) : null}
              <DrawerItem
                key={route.key}
                label={({color, focused}) => (
                  <Text style={{color, fontWeight: focused ? '800' : '600'}}>
                    {title}
                  </Text>
                )}
                focused={
                  state.routes.findIndex(e => e.name === route.name) ===
                  state.index
                }
                icon={drawerIcon}
                activeTintColor={activeTintColor}
                onPress={() => navigation.navigate(route.name)}
              />
            </>
          );
        })}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_avatar: {
    borderRadius: 70,
    height: 130,
    width: 130,
  },
  sectionLine: {
    backgroundColor: 'gray',
    flex: 1,
    height: 1,
    marginLeft: 10,
    marginRight: 20,
  },
  name_title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  def_avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 100,
    width: 100,
    backgroundColor: Globals.COLORS.primary,
  },
  mail_title: {
    fontSize: 16,
  },
});

export default ParentMainNavigation;
