import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../context/auth";

function Routes(){
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        <View style={{justifyContent: 'center', alignItems:'center', flex: 1}}>
            <ActivityIndicator size={50} color='#0F3A0F'/>
        </View>
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;