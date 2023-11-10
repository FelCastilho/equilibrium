import React from "react";

import { Container, Button, TaskText } from "./styles";

import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';

export default function TaskList({ data }) {

    function formatedLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    async function handleDelete() {

        await firestore().collection('myTasks').doc(data.id).delete()
        .then(() => {
            console.log('Item excluido com sucesso')
        })
        .catch((err) => {
            console.log('Erro')
        })

    }

    return (
        <Container>

            <TaskText>{formatedLetter(data.content)}</TaskText>

            <Button onPress={() => handleDelete()}>
                <Feather name='trash-2' color='#fff' size={25} />
            </Button>

        </Container>
    )
}