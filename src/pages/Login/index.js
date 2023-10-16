import React, { useState, useContext } from 'react';
import { Image, Text, ActivityIndicator } from 'react-native';

import { Container, ButtonLogin, ButtonLoginText, Input, Imagem, CreateAccount } from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

export default function Login() {

  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  async function handleSignIn() {

    if (email === '' || password === '') {
      console.log('PREENCHA TODOS OS CAMPOS')
      return;
    }

    await signIn(email, password)
  }

  return (
    <Container>

      <Imagem
        source={require('../../assets/login-img.png')}
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

      <ButtonLogin onPress={handleSignIn}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color='#fff' />
        ) : (
          <ButtonLoginText>Sign In</ButtonLoginText>
        )}

      </ButtonLogin>

      <CreateAccount onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#000' }}>Create new account</Text>
      </CreateAccount>

    </Container>
  );

}

