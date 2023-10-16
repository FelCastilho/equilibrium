import React, {useLayoutEffect, useState, useContext} from "react";
import { Container, Input, Button} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/auth";

function NewObjective() {

    const { user } = useContext(AuthContext);
    const navigation = useNavigation();
    const [tasks, setTasks] = useState('');

    useLayoutEffect(() => {
        
        const options = navigation.setOptions({
            headerRight: () => (
                <Button onPress = {() => handleAdd()}>
                    <Ionicons name = 'add' size={24} color = '#fff'/>
                </Button>
            )
        })

    }, [tasks, navigation])

    async function handleAdd(){

        await firestore().collection('myTasks')
        .add({
            created: new Date(),
            content: tasks,
            autor: user?.nome,
            userId: user?.uid
        })
        .then(() => {
            navigation.navigate("Metas", { userId: user?.uid });
            setTasks('');
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    return (
        <Container>

            <Input 
            placeholder='Quais são suas metas para hoje?'
            value= {tasks}
            onChangeText={(text) => setTasks(text)}
            maxLength={20}
            autoCorrect={false}
            />

        </Container>
    )

}

export default NewObjective;