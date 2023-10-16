import React, { useState, useContext, useEffect } from 'react';
import { Text, Modal, TouchableOpacity, Keyboard } from 'react-native';

import { Container, Input, Button, ButtonText, ButtonClear, ButtonClearText, Title, Header, Subtitle, UploadButton, Avatar, ContainerIMC } from './styles';

import ModalComponent from '../../components/ModalComponent';

export default function IMC() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState();

  const [weightType, setWeightType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);



  function verifyIMC() {
    let imc = Number(weight) / (Number(height) ** 2);
    setResult(imc.toFixed(2));
    setWeightType(result)
    Keyboard.dismiss();
  }

  function clearInputs() {
    setHeight('');
    setWeight('');
    setResult('');
  }

  return (

    <Container>

      <Header>
        <Title>IMC</Title>
      </Header>

      <ContainerIMC>

        <Subtitle>Verifique seu IMC</Subtitle>
        <Input
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType='numeric'
          placeholder='Seu peso'
        />

        <Input
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType='numeric'
          placeholder='Sua altura'
        />

        {result > 0 ? (
          <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 17, color: '#000' }}>Seu resultado: {result}</Text>
        ) : (
          <Text></Text>
        )}

        <Button onPress={() => verifyIMC()}>
          <ButtonText>Verifique</ButtonText>
        </Button>

        {weight > 0 || height > 0 || result > 0 ? (
          <ButtonClear onPress={() => clearInputs()}>
            <ButtonClearText>Limpar</ButtonClearText>
          </ButtonClear>

        ) : (
          <Text></Text>
        )}

        {result > 0 ? (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 17, color: '#000' }}>Verificar tabela de peso</Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}

        <Modal animationType="slide" visible={modalVisible}>
          <ModalComponent close={() => setModalVisible(false)} data={result} />
        </Modal>
      </ContainerIMC>



    </Container>

  );
}
