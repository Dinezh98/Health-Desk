import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoadingScreen from '../Components/loadingScreen';
import OnBoardingScreen from '../Components/onBoarding';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/Home';
import Records from '../Screens/Records';
import Devices from '../Screens/Devices';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
    return (
      <Stack.Navigator initialRouteName="loading">
        <Stack.Screen
          name="loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="onBoarding"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  
  
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarLabelStyle:{fontWeight:'bold'},
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          headerShown: false,
          // tabBarActiveBackgroundColor: 'rgba(173, 216, 230, 0.5)',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer,{backgroundColor: focused ? '#dffffd' : 'transparent'}]}>
              <Image
                source={require('../assets/images/home.png')}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </View>
            ),
          }}
        />
        <Tab.Screen
          name="Record"
          component={Records}
          options={{
            title: 'Records',
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer,{backgroundColor: focused ? '#dffffd' : 'transparent'}]}>
              <Image
                source={require('../assets/images/records.png')}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Device"
          component={Devices}
          options={{
            title: 'Device',
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer,{backgroundColor: focused ? '#dffffd' : 'transparent'}]}>
              <Image
                source={require('../assets/images/device.png')}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
                </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer,{backgroundColor: focused ? 'rgba(173, 216, 230, 0.5)' : 'transparent'}]}>
              <Image
                source={require('../assets/images/profile.png')}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
               </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  

export default StackNavigation

const styles = StyleSheet.create({
  iconContainer:{
    height: 30,
    width: 60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 25,
  },
})