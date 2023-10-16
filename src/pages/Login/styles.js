import styled  from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Imagem = styled.Image`
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    background-color: #d9d9d9;
    width: 80%;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    font-size: 17px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 40px;
    background-color: #418241;
    width: 60%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
`;

export const ButtonLoginText = styled.Text`
    color: #fff;
    font-size: 17px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    width: 80%;
`;

export const CreateAccount = styled.TouchableOpacity`
    margin-top: 20px;
`

