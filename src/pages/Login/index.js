import React, { useState, useContext } from 'react';
import { Image, Text, ActivityIndicator } from 'react-native';

import { Container, ButtonLogin, ButtonLoginText, Input, Imagem, CreateAccount, ContainerInput, InputText } from './styles';

import Feather from 'react-native-vector-icons/Feather';

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

      <ContainerInput>

        <Feather name='mail' color='#418241' size={25} />

        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Email'
          placeholderTextColor="#418241"
        />

      </ContainerInput>

      <ContainerInput>

        <Feather name='lock' color='#418241' size={25} />

        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder='Password'
          placeholderTextColor="#418241"
          secureTextEntry={true}
        />

      </ContainerInput>


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

