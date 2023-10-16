import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ContainerInput = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    width: 70%;
    background-color: #d9d9d9;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #000;
    margin-top: 50px;
    margin-left: 30px;
`;

export const Subtitle = styled.Text`
    font-size: 20px;
    color: #000;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 30px;
`;

export const Button = styled.TouchableOpacity`
    width: 60%;
    background-color: #418241;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 15px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;

export const List = styled.FlatList`
    max-height: 180px;
`;



export const TimeItem = styled.Text`
    color: #121212;
`;