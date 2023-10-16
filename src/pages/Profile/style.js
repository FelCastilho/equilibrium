import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;

`;

export const ContainerPefil = styled.View`
    align-items: center;
`;

export const Name = styled.Text`
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: bold;
    color: #000;
`;

export const Avatar = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
`;

export const UploadButton = styled.TouchableOpacity`
    margin-top: 10%;
    background-color: #418241;
    width: 165px;
    height: 165px;
    border-radius: 90px; 
    justify-content: center;
    align-items: center;
    z-index: 8;
`;

export const UploadText = styled.Text`
    font-size: 55px;
    position: absolute;
    color: #fff;
    opacity: 0.9;
    z-index: 99;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #0F3A0F;
    padding: 10px;
    width: 60%;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    gap: 10px;

`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
`;

export const PerfilButton = styled.TouchableOpacity`
    background-color: #418241;
    padding: 10px;
    width: 60%;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const PerfilButtonText = styled.Text`
    color: white;
    font-size: 18px;
`;



