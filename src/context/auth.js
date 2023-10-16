import React, {useState, createContext, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@equilibrium');

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage()
 
    }, [])

    async function signUp(email, password, name){
        
        setLoadingAuth(true)

        await auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;
    
            await firestore().collection('users')
            .doc(uid).set({
                nome: name,
                createAt: new Date(),
            })
            .then(() => {
    
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email
                }
    
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
    
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
        })
    }

    async function signIn(email, password){
        setLoadingAuth(true)
        await auth().signInWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = value.user.uid;

            const userProfile = await firestore().collection('users')
            .doc(uid).get();

            let data = {
                uid: uid,
                nome: userProfile.data().nome,
                email: value.user.email
            }

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
        })
        .catch((error) => {
            setLoadingAuth(false)
            console.log(error)
        })
    }

    async function signOut(){
        await auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    //Deixando o usuário logado
    async function storageUser(data){
        await AsyncStorage.setItem('@equilibrium', JSON.stringify(data))
    }

    return(
        <AuthContext.Provider value={{signed: !!user, signUp, signIn, signOut, loadingAuth, loading, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
