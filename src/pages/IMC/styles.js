import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContainerIMC = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #000;
`;

export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 80px;
`;

export const UploadButton = styled.TouchableOpacity`
    background-color: #418241;
    width: 55px;
    height: 55px;
    border-radius: 90px; 
    justify-content: center;
    align-items: center;
    z-index: 8;
`;

export const Subtitle = styled.Text`
    font-size: 25px;
    color: #000;
`;

export const Input = styled.TextInput`
    width: 80%;
    background-color: #D9D9D9;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
`;

export const Button = styled.TouchableOpacity`
    width: 60%;
    background-color: #418241;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;

export const ButtonClear = styled.TouchableOpacity`
    width: 60%;
    background-color: transparent;
    border: 2px solid #418241;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 15px;
    border-radius: 5px;
`

export const ButtonClearText = styled.Text`
    color: #418241;
`;

   


