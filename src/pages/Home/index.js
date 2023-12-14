import React, { useState, useContext, useCallback, useEffect } from 'react';

import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../context/auth';

import { Container, Title, Subtitle, Input, ContainerInput, Button, ButtonText, List } from './styles';

import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import ListItem from '../../components/ListItem';

import firestore from '@react-native-firebase/firestore';

export default function Home() {
  const { user } = useContext(AuthContext);
  const userId = user.uid;

  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState('');
  const [water, setWater] = useState('');
  const [sleep, setSleep] = useState('');

  const [objectives, setObjectives] = useState([]);

  useEffect(

    useCallback(() => {

      let isActive = true;

      function fetchObjectives() {

        firestore().collection('dailyObjectives')
          .orderBy('created', 'desc')
          .where('userId', '==', userId)
          .limit(1)
          .get()
          .then((snapshot) => {

            if (isActive) {
              
              setObjectives({});
              const objectivesList = [];

              snapshot.docs.map(u => {
                objectivesList.push({
                  ...u.data(),
                  id: u.id,
                })
              })

              setObjectives(objectivesList);
              setLoading(false);

            }

          })
      }

      fetchObjectives();

      return () => {
        isActive = false;
      }

    }, [])

  )

  async function handleSubmit() {

    if (activity == '' || water == '' || sleep == '') {
      alert('As caixas não podem ficar vazias')
    }

    await firestore().collection('dailyObjectives')
      .add({
        created: new Date(),
        autor: user?.nome,
        userId: user?.uid,
        waterValue: water,
        sleepValue: sleep,
        activityValue: activity

      })
      .then(() => {
        console.log('Item adicionado')
      })
      .catch((err) => {
        console.log(err)
      })

    setActivity('');
    setWater('');
    setSleep('');
    Keyboard.dismiss();
  }

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <Container>

        <Title>Olá, {capitalizeFirstLetter(user.nome)}</Title>

        {objectives == 0 ? (
          <Subtitle>Não tem nada aqui!</Subtitle>
        ) : loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={50} color='#0F3A0F' />
          </View>
        ) : (
          <List
            data={objectives}
            renderItem={({ item }) => <ListItem data={item} captalize={capitalizeFirstLetter} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}

        <ContainerInput>

          <Input
            value={water}
            onChangeText={(text) => setWater(text)}
            keyboardType='numeric'
            placeholder='Quantos litros de água você bebeu?'
          />

          <Input
            value={sleep}
            onChangeText={(text) => setSleep(text)}
            keyboardType='numeric'
            placeholder='Quantos horas de sono você teve?'
          />

          <Input
            value={activity}
            onChangeText={(text) => setActivity(text)}
            placeholder='Fez algum exercício hoje?'
          />

          <Button onPress={() => handleSubmit()}>
            <ButtonText>Enviar Dados</ButtonText>
          </Button>

        </ContainerInput>

      </Container>

    </TouchableWithoutFeedback>

  );
}