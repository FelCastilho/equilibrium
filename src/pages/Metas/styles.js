import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
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

export const ItemList = styled.FlatList`
    width: 90%;
    margin-top: 20px;
    height: 50%;
`;

export const FabButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 6%;
    right: 8%;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #0F3A0F;
    align-items: center;
    justify-content: center;

`;

