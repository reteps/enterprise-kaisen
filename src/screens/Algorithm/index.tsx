import React from 'react';
import styled from 'styled-components/native';
import { Text, View, SafeAreaView, Alert } from 'react-native'
import Button from 'components/Button'

const Styled = {
    Container: styled(View)`
        flex: 1;
    `,
    SafeContainer: styled(SafeAreaView)`flex: 1;`,
    Text: styled(Text)`
        color: white;
    `,
}
const AlgorithmStart = () => {
    return <Styled.Container>
        <Styled.Text>This app will ask you a series of 
    questions in order to determine 
    the best problem-solving method for your businesses problem. </Styled.Text>
        
        <Button title="heyo" onPress={() => Alert.alert('Simple Button pressed')}></Button>
        </Styled.Container>
}

export default AlgorithmStart