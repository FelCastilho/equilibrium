import React, { useCallback, useState, useContext } from 'react';
import { Text } from 'react-native';

import { Container, Button, ButtonText, Email, Name, ScrollViewContainer, ButtonContainer } from './styles';
import { AuthContext } from '../../context/auth';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ModalImc(props) {

    const { user } = useContext(AuthContext);
    const userId = user.uid;
    
 return (

    <Container>

        <ScrollViewContainer showsVerticalScrollIndicator={false}>

            <Name>Seu nome: {user?.nome}</Name>
            <Email>Seu email: {user?.email}</Email> 

            <Button onPress={props.close}>
            <ButtonText>
                    <AntDesign name="close" size={20} color="#fff"/>
            </ButtonText>
            </Button>

        </ScrollViewContainer>

 </Container>
  );
}