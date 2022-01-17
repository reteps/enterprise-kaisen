import React from 'react';
import styled from 'styled-components/native';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Button from 'components/Button'
import BaseDecision from 'components/BaseDecision';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLightbulb, faQuestion } from '@fortawesome/free-solid-svg-icons'
import QuestionText from 'components/QuestionText';
import AppText from 'components/AppText';
const Styled = {
    Container: styled(View)`
        flex: 1;
    `,
    SafeContainer: styled(SafeAreaView)`flex: 1;`,
    Button: styled(Button).attrs({
        background: 'blue'
    })`
        background: blue;
        backgroundColor: blue;
    `,

    Image: styled(Image)`
        width: 100%;
        height: 50%;
    `,

    PrimaryButton: styled(TouchableOpacity)`
        background: #C13294;
        color: white;
        font-size: 20px;
        padding: 10px;
    `,
    
    WhiteText: styled(AppText)`
        color: white;
    `,
    SecondaryButton: styled(TouchableOpacity)`
        background: #35383F;
        color: white;
        font-size: 20px;
        padding: 10px;
        display: flex;
        flex-direction: row;
    `,
    HelpButton: styled(TouchableOpacity)`
        font-size: 40px;
        background: white;
        padding: 10px;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 35px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
    StartButton: styled(TouchableOpacity)`
    font-size: 40px;
    background: white;
    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
    PrimaryIcon: styled(FontAwesomeIcon).attrs({
        size: 40
    })`
        color:#C13294;
    `,
        PrimaryText: styled(AppText)`
        font-size: 40px;
        color:#C13294;
    
    `,
    WhiteIcon: styled(FontAwesomeIcon)`
    color: white;
    `,
    ButtonContainer: styled(View)`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `,
}


const AlgorithmStart = ({ navigation }) => {
    const buttons = <Styled.ButtonContainer>
    <Styled.HelpButton onPress={() => navigation.navigate('Confused')}>
        <Styled.PrimaryIcon icon={ faQuestion } />
      </Styled.HelpButton>
        <Styled.StartButton onPress={() =>  navigation.navigate('Situation')}>
        <Styled.PrimaryIcon icon={ faLightbulb } />
        <Styled.PrimaryText>Lets go!</Styled.PrimaryText>
      </Styled.StartButton>
    </Styled.ButtonContainer>

    return <BaseDecision navigation={navigation} buttonOverride={buttons}>
        <QuestionText>This app will ask you a series of 
    questions in order to determine 
    the best problem-solving method for your business problem. </QuestionText>
        <Styled.Image source={require('assets/images/algorithm_start.png')} />
    </BaseDecision>
}
export default AlgorithmStart