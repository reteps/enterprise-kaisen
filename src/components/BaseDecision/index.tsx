import AppText from 'components/AppText';
import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

const Styled = {
    SafeAreaView: styled(SafeAreaView)`flex: 1;`,
    Container: styled(View)`
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    `,

    PrimaryButton: styled(TouchableOpacity)`
        background: #C13294;
        color: white;
        padding: 10px;
        width: 70%;
        border-radius: 10px;
        margin-bottom: 5%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
    WhiteText: styled(AppText)`
        text-align: center;
        color: white;
        font-size: 30px;
    `,
    SecondaryButton: styled(TouchableOpacity)`
        background: #35383F;
        color: white;
        padding: 10px;
        width: 70%;
        border-radius: 10px;
        margin-bottom: 5%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
    TallButtonContainer: styled(View)`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10%;
    `
}
const BaseDecision = ({ navigation, children, buttonOverride = null, buttonContent }) => {
    const { button1To, button2To, button1Text, button2Text } = (buttonContent || {})
    const buttons = buttonOverride || (
    <Styled.TallButtonContainer>
    <Styled.PrimaryButton onPress={() => {
        navigation.navigate(button1To)
    }}>
            <Styled.WhiteText>{button1Text}</Styled.WhiteText>
        </Styled.PrimaryButton>
        <Styled.SecondaryButton onPress={() => navigation.navigate(button2To)}>
                <Styled.WhiteText>{button2Text}</Styled.WhiteText>
            </Styled.SecondaryButton>
    </Styled.TallButtonContainer>
    )
    return (
        <Styled.SafeAreaView>
        <Styled.Container>
            {children}
            {buttons}
        </Styled.Container>
        </Styled.SafeAreaView>
    )
}
export default BaseDecision