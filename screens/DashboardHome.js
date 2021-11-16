import React, { Component } from 'react'
import HomeScreen from '../screens/Home';
import NotificationScreen from '../screens/Notification';
import ProfileScreen from '../screens/Profile';
import BloodRequestScreen from './BloodRequest';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from 'react-native-paper';
import { globalStyle } from '../assets/styles/globalStyle';
import { navigationRef } from '../RootNavigation';
const Tab = createMaterialBottomTabNavigator();

export default function DashboardHomeScreen() {
    return (
        <NavigationContainer  theme={MyTheme} independent={true}>
            <Tab.Navigator labeled={true} inactiveColor="#000" activeColor="#F00" 
                barStyle={globalStyle.tabNavigationBarStyle}
            >
                <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
                    options={{
                        title:"Home",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Blood Request" component={BloodRequestScreen}      // Search Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="blood-bag" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Notification" component={NotificationScreen}
                    // Notification Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="newspaper-variant-multiple-outline" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen}   // Profile Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color}
                                size={26} />
                        ),
                    }} />
            </Tab.Navigator>
            
        </NavigationContainer>
    );
}


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        backgroundColor: 'red',
        borderRadius: 20,
    },
};