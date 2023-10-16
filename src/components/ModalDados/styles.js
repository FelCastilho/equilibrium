import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ScrollViewContainer = styled.ScrollView`
    width: 90%;
`;

export const TextContainer = styled.View`
    margin-top: 40px;
    background-color: ${props => props.bg};
    color: black;
    flex-direction: row;
    width: 100%;
    height: 70px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const Name = styled.Text`
    color: #000;
    padding: 5px;
    font-size: 18px;
`;

export const Email = styled.Text`
    color: #000;
    padding: 5px;
    font-size: 18px;
`;

export const ButtonContainer = styled.View`
    margin-bottom: 50px;
    width: 100%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 40px;
    background-color: #418241;
    width: 15%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 17px;
`;


