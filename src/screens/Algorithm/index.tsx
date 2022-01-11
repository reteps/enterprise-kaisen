import React from 'react';
import styled from 'styled-components/native';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Button from 'components/Button'
import BaseDecision from 'components/BaseDecision';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

const Styled = {
    Container: styled(View)`
        flex: 1;
    `,
    SafeContainer: styled(SafeAreaView)`flex: 1;`,
    Text: styled(Text)`
        color: white;
    `,
    Button: styled(Button).attrs({
        background: 'blue'
    })`
        background: blue;
        backgroundColor: blue;
    `,
    Image: styled(Image)`
        width: 100px;
        height: 100px;
    `
}


const AlgorithmStart = ({ navigation }) => {
    const buttons = <>
    <TouchableOpacity onPress={() => navigation.navigate('Confused')}>
        <FontAwesomeIcon icon={ faQuestion } />
        <Text>I'm confused</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate('Situation')}>
        <Text>Let's Go</Text>
      </TouchableOpacity>
    </>
return <BaseDecision navigation={navigation} buttonOverride={buttons}>
        <Styled.Text>This app will ask you a series of 
    questions in order to determine 
    the best problem-solving method for your businesses problem. </Styled.Text>
        <Styled.Image source={require('assets/cat.jpeg')} />

</BaseDecision>
}
export default AlgorithmStart