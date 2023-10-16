import React, { useState, useContext } from 'react';
import { Image, Text, ActivityIndicator } from 'react-native';

import { Container, ButtonRegister, ButtonRegisterText, Input, CreateAccount, Imagem } from './styles';

import { AuthContext } from '../../context/auth';

import { useNavigation } from '@react-navigation/native';

export default function Register() {

  const navigation = useNavigation();
  const { signUp, loadingAuth } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSignUp() {

    if (name === '' || email === '' || password === '') {
      console.log('Preencha todos os campos')
      return;
    }

    await signUp(email, password, name)
    navigation.navigate('Login');
  }

  return (
    <Container>

      <Imagem
        source={require('../../assets/register-img.png')}
      />

      <Input
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Name'
      />

      <Input
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Email'
      />

      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        secureTextEntry={true}
      />

      <ButtonRegister onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color='#fff' />
        ) : (
          <ButtonRegisterText>Sign Up</ButtonRegisterText>
        )}
      </ButtonRegister>

      <CreateAccount onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#000' }}>Already have an account? Login</Text>
      </CreateAccount>

    </Container>
  );

}

