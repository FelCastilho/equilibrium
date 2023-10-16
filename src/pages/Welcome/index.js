import React from 'react';

import { Container, Logo, LogoContainer,  ButtonLogin, ButtonLoginText, ButtonRegister, ButtonRegisterText } from './styles';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

 return(
  <Container>

    <LogoContainer>
      <Logo
      source={require('../../assets/logo-verde.png')}
      /> 
    </LogoContainer>

    <ButtonLogin onPress={() => navigation.navigate('Login')}>
      <ButtonLoginText>Sign In</ButtonLoginText>
    </ButtonLogin>

    <ButtonRegister onPress={() => navigation.navigate('Register')}>
      <ButtonRegisterText>Sign Up</ButtonRegisterText>
    </ButtonRegister>

  </Container>
  );
}