import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Container, WaterContainer, SleepContainer, ActivityContainer } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListItem({data, captalize}){


    return(
        <Container>

            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
                <WaterContainer>

                    <Ionicons name="water" size={30} color="#3E73FA"/>

                    <Text
                    style={{color: '#3E73FA', fontSize: 25}}
                    >
                        {data?.waterValue} Litros
                    </Text>

                </WaterContainer>

                <SleepContainer>

                    <Ionicons name="moon" size={30} color='#8129AB' />

                    <Text
                    style={{color: '#8129AB', fontSize: 25}}
                    >
                        {data?.sleepValue} Horas
                    </Text>

                </SleepContainer>

                <ActivityContainer>

                    <Ionicons name="pulse" size={30} color='#FF7A00'/>

                    <Text
                    style={{color: '#FF7A00', fontSize: 25}}
                    > 
                        {captalize(data?.activityValue)}
                    </Text>

                </ActivityContainer>

            </ScrollView>

        </Container>

        
    )
}