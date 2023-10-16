import React from 'react';

import { Container, Logo, LogoContainer, Button, ButtonText, Hero} from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Start() {
  const navigation = useNavigation();

  return(
    <Container>
 
     <LogoContainer>
      
       <Logo
       source={require('../../assets/logo-branca.png')}
       /> 
       
     </LogoContainer>

     <Hero>Improve your life!</Hero>

     <Button onPress={() => navigation.navigate('Welcome')}>
       <ButtonText>Get Started</ButtonText>
     </Button>
 
    </Container>
   );
}