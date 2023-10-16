import React, { useContext, useState, useEffect } from 'react';
import { Modal } from 'react-native';

import { AuthContext } from '../../context/auth';

import { launchImageLibrary } from 'react-native-image-picker';

import { Container, Name, Button, ButtonText, Avatar, UploadButton, UploadText, PerfilButton, PerfilButtonText, ContainerPefil } from './style';

import AntDesign from 'react-native-vector-icons/AntDesign';

import storage from '@react-native-firebase/storage';
import ModalImc from '../../components/ModalDados';

export default function Profile() {

  const { signOut, user } = useContext(AuthContext);
  const userId = user.uid;

  const [url, setUrl] = useState(null);
  const [name, setName] = useState(user?.nome);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    let isActive = true;

    async function loadAvatar() {

      try {
        if (isActive) {
          let response = await storage().ref('users').child(user?.uid).getDownloadURL();

          setUrl(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadAvatar();

    //Para quando o componente for desmontado
    return () => isActive = false;

  }, [])

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  async function handleSignOut() {
    signOut();
  }

  function uploadFile() {
    const options = {
      noData: true,
      mediaType: 'photo'
    };

    launchImageLibrary(options, response => {

      if (response.didCancel) {
        console.log('Cancelou')
      } else if (response.error) {
        console.log('Deu algum erro')
      } else {
        uploadFileFirebase(response)
          .then(() => {
            console.log('Foto adicionada com sucesso!')
          })

        setUrl(response.assets[0].uri)
      }

    })

  }

  const getFileLocalPath = (response) => {
    return response.assets[0].uri;
  }

  const uploadFileFirebase = async (response) => {
    const fileSource = getFileLocalPath(response);

    const storageRef = storage().ref('users').child(user?.uid);

    return await storageRef.putFile(fileSource)
  }

    return (
      <Container>

        <ContainerPefil>
          {url ? (
            <UploadButton onPress={() => uploadFile()}>
              <Avatar
                source={{ uri: url }}
              />
            </UploadButton>
          ) : (
            <UploadButton onPress={() => uploadFile()}>
              <UploadText>+</UploadText>
            </UploadButton>
          )}

          <Name>{capitalizeFirstLetter(name)}</Name>
        </ContainerPefil>

        <PerfilButton onPress={() => setModalVisible(true)}>
          <PerfilButtonText>Meu dados cadastrados</PerfilButtonText>
        </PerfilButton>

        <Button onPress={handleSignOut}>
          <AntDesign name="logout" size={25} color="#fff" />
          <ButtonText>Sair</ButtonText>
        </Button>

        <Modal animationType="slide" visible={modalVisible}>
          <ModalImc close={() => setModalVisible(false)} />
        </Modal>
      </Container>
    );
  }

