import React from 'react';
import styled from 'styled-components/native';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Button from 'components/Button'
import BaseDecision from 'components/BaseDecision';
import QuestionText from 'components/QuestionText'
/*
contains implementation of base screens
*/


const Situation = ({ navigation }) => {
    const buttonContent = {
        button1To: "SolutionNew", button2To: "SolutionExists",
         button1Text: "New", button2Text: "Existing" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <QuestionText>Is this a new situation, or
 an existing situation?</QuestionText>

</BaseDecision>
}

const SolutionNew = ({ navigation }) => {
    const buttonContent = {
        button1To: "No", button2To: "InnovationMethod", button1Text: "Yes", button2Text: "ConditionKnown" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <QuestionText>Is there a known solution?</QuestionText>

</BaseDecision>
}
const SolutionExists = ({ navigation }) => {
    const buttonContent = {
        button1To: "ConditionUnknown", button2To: "BBPMethod", button1Text: "No", button2Text: "Yes" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <QuestionText>Is there a known solution?</QuestionText>

</BaseDecision>
}

const ConditionKnown = ({ navigation }) => {
    const buttonContent = {
        button1To: "DMADVMethod", button2To: "IDDOVMethod", button1Text: "Process", button2Text: "Product" 
    }
    return <BaseDecision navigation={navigation} buttonContent={buttonContent}>
    <QuestionText>Are you trying to improve a process, or product?</QuestionText>

</BaseDecision>
}

const ConditionUnknown = ({ navigation }) => {
    const buttons = <>
        <TouchableOpacity onPress={() =>  navigation.navigate('EightDMethod')}>
        <Text>Deviation</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate('DMAICMethod')}>
        <Text>Improvement</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate('SpecialMethod')}>
        <Text>Deviation (special case)</Text>
      </TouchableOpacity>
    </>
    return <BaseDecision navigation={navigation} buttonOverride={buttons}>
    <QuestionText>What type of problem are you facing?</QuestionText>

</BaseDecision>
}

export { Situation, SolutionNew, SolutionExists, ConditionKnown, ConditionUnknown }