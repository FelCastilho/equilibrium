import React, { useState, useContext, useCallback, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { Container, FabButton, ItemList, Header, Title, UploadButton, Avatar  } from './styles';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../../context/auth';

import TaskList from '../../components/TaskList';

export default function Metas() {

  const { user } = useContext(AuthContext);
  const [myTasks, setmyTasks] = useState([]);
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation();
  const userId = user.uid;


  useFocusEffect(

    useCallback(() => {

      let isActive = true;

      function fetchTasks() {
        firestore().collection('myTasks')
          .orderBy('created', 'desc')
          .where('userId', '==', userId)
          .limit(10)
          .onSnapshot((snapshot) => {

            if (isActive) {
              setmyTasks({});
              const taskLists = [];

              snapshot.docs.map(u => {
                taskLists.push({
                  ...u.data(),
                  id: u.id
                })
              })

              setmyTasks(taskLists)
              setLoading(false);
            }

          })
      }

      fetchTasks()

      return () => {
        isActive = false;
      }
    }, [])

  )

  if(loading){
    return(
      <View style ={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color={'#121212'} size={45}/>
      </View>
    )
  }else{
    return (
      <Container>

        {myTasks == 0 ? (
          <Text></Text>
        ) : (
          <Header>
            <Title>Minhas metas</Title>
         </Header>
        )}
    
        {myTasks.length === 0 ? (
          <Text style={{ color: 'gray', fontSize: 20 }}>Adicione novos desafios!</Text>
        ) : (
          <ItemList
            data={myTasks}
            renderItem={({ item }) => (<TaskList data={item} />)}
            showsVerticalScrollIndicator={false}
          />
        )}
    
        <FabButton onPress={() => navigation.navigate('NewObjective')}>
    
          <Feather
            name='edit-2'
            color='#fff'
            size={25}
          />
    
        </FabButton>
    
      </Container>
    );
    
  }
  
}

