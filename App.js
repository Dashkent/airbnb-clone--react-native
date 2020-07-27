import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Inbox from './screens/Inbox'
import Profile from './screens/Profile'

const BottomTab = createBottomTabNavigator();

export default function Tab() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOppacity: 0.5,
            elevation: 5
          }
        }}
      >
        <BottomTab.Screen name="Explore" component={Explore} options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name='ios-search' size={24} color={tintColor} />
          )
        }} />
        <BottomTab.Screen name="Saved" component={Saved} options={{
          tabBarIcon: (color) => (
            <Ionicons name='ios-heart-empty' size={24} color={color.tintColor} />
          )
        }} />
        <BottomTab.Screen name="Trips" component={Trips} options={{
          tabBarIcon: (color) => (
            <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, color: color.tintColor }} />
          )
        }} />
        <BottomTab.Screen name="Inbox" component={Inbox} options={{
          tabBarIcon: (color) => (
            <MaterialIcons name='chat-bubble-outline' size={24} color={color.tintColor} />
          )
        }} />
        <BottomTab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: (color) => (
            <MaterialIcons name='person-outline' size={24} color={color.tintColor} />
          )
        }} />
      </BottomTab.Navigator >
    </NavigationContainer >
  )
}


