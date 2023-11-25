import React, { useState, useContext } from 'react';
import { Text, ActivityIndicator } from 'react-native';

import { Container, ButtonRegister, ButtonRegisterText, Input, CreateAccount, Imagem, ContainerInput, ContainerInputPassword, ContainerPassword, ButtonIconInput } from './styles';

import { AuthContext } from '../../context/auth';

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function Register() {

  const navigation = useNavigation();
  const { signUp, loadingAuth } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  async function handleSignUp() {

    if (name === '' || email === '' || password === '') {
      alert("Preencha todos os campos!")
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

      <ContainerInput>

        <Ionicons name='person-outline' color='#418241' size={25} />

        <Input
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Name'
        placeholderTextColor="#418241"
        />

      </ContainerInput>

      <ContainerInput>

        <Feather name='mail' color='#418241' size={25} />

        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Email'
          placeholderTextColor="#418241"
        />

      </ContainerInput>

      <ContainerInputPassword>

        <ContainerPassword>

          <Feather name='lock' color='#418241' size={25} />

          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder='Password'
            placeholderTextColor="#418241"
            secureTextEntry={passwordVisible}
          />

        </ContainerPassword>

        <ButtonIconInput onPress={() => setPasswordVisible(!passwordVisible)}>

          {passwordVisible ? (
            <Feather name='eye-off' color='#418241' size={25} />
          ) : (
            <Feather name='eye' color='#418241' size={25} />
          )}

        </ButtonIconInput>

      </ContainerInputPassword>

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

