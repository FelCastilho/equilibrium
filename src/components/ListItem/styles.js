import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    height: 160px;
    margin-top: 60px;
`;

export const WaterContainer = styled.TouchableOpacity`
    border: 4px solid #3E73FA;
    background-color: red;
    border-radius: 20px;
    width: 200px;
    height: 80px;
    margin-right: 25px;
    margin-left: 30px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const SleepContainer = styled.View`
    border: 4px solid #8129AB;
    border-radius: 20px;
    width: 200px;
    height: 80px;
    margin-right: 25px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const ActivityContainer = styled.View`
    border: 4px solid #FF7A00;
    border-radius: 20px;
    width: 200px;
    height: 80px;
    margin-right: 25px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;




