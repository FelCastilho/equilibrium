import styled  from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Imagem = styled.Image`
    margin-bottom: 20px;
`;

export const ContainerInput = styled.View`
    margin-top: 19px;
    flex-direction: row;
    width: 80%;
    height: 50px;
    border: 2px solid #418241;
    border-radius: 15px;
    align-items: center;
    padding: 10px;
    gap: 10px;
`;

export const Input = styled.TextInput`
    width: 80%;
    padding: 2px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 40px;
    background-color: #418241;
    width: 60%;
    height: 49px;
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

