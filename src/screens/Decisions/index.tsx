import React from 'react';
import styled from 'styled-components/native';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Button from 'components/Button'
import BaseDecision from 'components/BaseDecision';
import QuestionText from 'components/QuestionText'
/*
contains implementation of base screens
*/


const Page1 = () => {
    const buttonContent = {
        button1To: "Page1", button2To: "Page1", button1Text: "New", button2Text: "Existing" 
    }
    return <BaseDecision buttonContent={buttonContent}>
    <QuestionText>Is this a new situation, or
 an existing situation?</QuestionText>

</BaseDecision>
}

export { Page1 }