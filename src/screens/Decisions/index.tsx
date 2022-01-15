import React from 'react';
import styled from 'styled-components/native';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Button from 'components/Button'
import BaseDecision from 'components/BaseDecision';
import QuestionText from 'components/QuestionText'
import AppText from 'components/AppText';

/*
contains implementation of base screens
*/

const Styled = {
    DetailText: styled(AppText)`
        font-size: 20px;
        font-family: Montserrat-Regular;
    `,
    Image: styled(Image)`
        width: 100%;
        height: 50%;
    `,
    QuestionText: styled(QuestionText)`
        font-size: 24px;
    `
}
const Situation = ({ navigation }) => {
    const buttonContent = {
        button1To: "SolutionNew", button2To: "SolutionExists",
         button1Text: "New", button2Text: "Existing" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <Styled.QuestionText>Is this a new situation, or
 an existing situation?</Styled.QuestionText>
    <Styled.DetailText>
Is this a problem that you have seen in the past with your product, process, information, or service?  Or is it something that has not been encountered before?
</Styled.DetailText>
</BaseDecision>
}

const SolutionNew = ({ navigation }) => {
    const buttonContent = {
        button1To: "InnovationMethod", button2To: "ConditionKnown", button1Text: "No", button2Text: "Yes" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <Styled.QuestionText>Is there a known solution?</Styled.QuestionText>
    <Styled.DetailText>Has this problem been solved before or somewhere else which will allow you to use a previous approach or solution?</Styled.DetailText>

</BaseDecision>
}
const SolutionExists = ({ navigation }) => {
    const buttonContent = {
        button1To: "ConditionUnknown", button2To: "BBPMethod", button1Text: "No", button2Text: "Yes" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <Styled.QuestionText>Is there a known solution?</Styled.QuestionText>
    <Styled.DetailText>Has this problem been solved before or somewhere else which will allow you to use a previous approach or solution?</Styled.DetailText>

</BaseDecision>
}

const ConditionKnown = ({ navigation }) => {
    const buttonContent = {
        button1To: "DMADVMethod", button2To: "IDDOVMethod", button1Text: "Process", button2Text: "Product" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <Styled.QuestionText>Are you trying to improve a process, or product?</Styled.QuestionText>
    <Styled.DetailText>It is important to know if it is a problem with the product itself or the process used.  Many times it is thought that the process is not correct when in fact the capability of the product is in question.</Styled.DetailText>
</BaseDecision>
}

const ConditionUnknown = ({ navigation }) => {
    const buttonContent = {
        button1To: "EightDMethod", button2To: "DMAICMethod", button1Text: "Deviation", button2Text: "Improvement" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <Styled.QuestionText>What type of problem are you facing?</Styled.QuestionText>
    <Styled.Image source={require('assets/images/CONDITION_DECISION.png')} />

</BaseDecision>
}

export { Situation, SolutionNew, SolutionExists, ConditionKnown, ConditionUnknown }