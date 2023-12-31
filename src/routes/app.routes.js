import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from "../pages/Home";
import IMC from "../pages/IMC";
import Metas from "../pages/Metas";
import Profile from "../pages/Profile";
import NewObjective from "../pages/NewObjective";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (

        <Stack.Navigator>

            <Stack.Screen 
            name = "Metas"
            component={Metas}
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
                name='NewObjective'
                component={NewObjective}
                options={{
                    title: 'Novo Objetivo',
                    headerTintColor: '#fff',

                    headerStyle: {
                        backgroundColor: '#418241'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

function AppRoutes() {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',
                headerBackground: false,

                tabBarStyle: {
                    backgroundColor: '#0F3A0F',
                }
            }}
        >

            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                            return <Ionicons name='home' color={color} size={size} />
                        }else{
                            return <Ionicons name='home-outline' color={color} size={size} />
                        }
                    }
                }}
            />

            <Tab.Screen
                name="MetasTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                            return <Ionicons name='trophy' color={color} size={size} />
                        }else{
                            return <Ionicons name='trophy-outline' color={color} size={size} />
                        }
                    },
                }}
            />

            <Tab.Screen
                name='IMC'
                component={IMC}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name='activity' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                            return <FontAwesome name='user' color={color} size={size} />
                        }else{
                            return <FontAwesome name='user-o' color={color} size={size} />
                        }
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default AppRoutes;
