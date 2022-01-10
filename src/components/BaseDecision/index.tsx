import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const BaseDecision = ({ navigation, children, buttonOverride = null, buttonContent }) => {
    const { button1To, button2To, button1Text, button2Text } = (buttonContent || {})
    const buttons = buttonOverride || (
    <>
    <TouchableOpacity onPress={() => {
        navigation.navigate(button1To)
    }}>
            <Text>{button1Text}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(button2To)}>
                <Text>{button2Text}</Text>
            </TouchableOpacity>
    </>
    )
    return (
        <View>
            {children}
            {buttons}
        </View>
    )
}
export default BaseDecision