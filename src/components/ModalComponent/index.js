import React from 'react';
import { Text } from 'react-native';
import { Container, Button, ButtonText, Texto, TextContainer, ScrollViewContainer, ButtonContainer } from './styles';

export default function ModalComponent(props) {

 return (

   <Container>

      <ScrollViewContainer showsVerticalScrollIndicator={false}>

        <Text style={{textAlign: 'center', marginTop: 40, fontSize: 18, color: "#000"}}>Seu IMC: {props.data}</Text>

        <TextContainer bg="orange"> 
         <Texto>Menor que 18,5</Texto>
         <Texto>Abaixo do peso</Texto>
        </TextContainer>

        <TextContainer bg="#0AC929">
         <Texto>Entre 18,5 e 24,9</Texto>
         <Texto>Peso normal</Texto>
        </TextContainer>

        <TextContainer bg="#D66C04">
         <Texto>Entre 25 e 29,9</Texto>
         <Texto>Sobrepeso</Texto>
        </TextContainer>

        <TextContainer bg="#af0000">
         <Texto>Entre 30 e 34,9</Texto>
         <Texto>Obesidade grau 1</Texto>
        </TextContainer>

        <TextContainer bg="#960101">
         <Texto>Entre 35 e 39.9</Texto>
         <Texto>Obesidade grau 2</Texto>
        </TextContainer>

        <TextContainer bg="#680303">
         <Texto>Maior que 40</Texto>
         <Texto>Obesidade grau 3</Texto>
        </TextContainer>

        <ButtonContainer>
          <Button onPress={props.close}> 
            <ButtonText>Voltar</ButtonText>
          </Button>
        </ButtonContainer>

      </ScrollViewContainer>


   </Container>
  );
}
