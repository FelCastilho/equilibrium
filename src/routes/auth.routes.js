import React, { useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Start from '../pages/Start';
import { AuthContext } from '../context/auth';

//ROTAS DO USUÁRIO NÃO LOGADO

export default function AuthRoutes() {
    const Stack = createNativeStackNavigator();
    const { user } = useContext(AuthContext);

    const [firstTimeUser, setFirstTimeUser] = useState(true);

    useEffect(() => {
        // Verifique se o usuário já viu a tela de boas-vindas
        // Se já viu, marque como não sendo mais a primeira vez
        if (!firstTimeUser) {
            setFirstTimeUser(false);
        }
    }, [firstTimeUser]);

    return (
        <Stack.Navigator initialRouteName='Register'>


            <Stack.Screen
                name='Start'
                component={Start}
                options={{
                    headerShown: false
                }}
            />


            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Register'
                component={Register}
                options={{
                    headerShown: false
                }}
            />



        </Stack.Navigator>
    );
}