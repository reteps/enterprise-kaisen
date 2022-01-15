import AppText from 'components/AppText';
import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

const Styled = {
    SelectionText: styled(AppText)`
        margin-top: 10px;
        font-size: 30px;
        text-align: center;
    `,
    PrimarySelectionText: styled(AppText)`
        color: #C13294;
        font-size: 30px;
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
    `,
    SafeAreaView: styled(SafeAreaView)`flex: 1;`
}
const BaseMethod = ({ navigation, children, name, next }) => {
    const buttons = 
    <>
    <Styled.TallButtonContainer>
    <Styled.PrimaryButton onPress={() => {
        navigation.navigate(next)
    }}>
            <Styled.WhiteText>View Details</Styled.WhiteText>
        </Styled.PrimaryButton>
        <Styled.SecondaryButton onPress={() => navigation.navigate('AlgorithmStart')}>
                <Styled.WhiteText>Start Over</Styled.WhiteText>
            </Styled.SecondaryButton>
    </Styled.TallButtonContainer>
    </>
    
    return (
        <Styled.SafeAreaView>
        <View>
            <View>
                <Styled.SelectionText>You should use the <Styled.PrimarySelectionText>{name}</Styled.PrimarySelectionText> method.</Styled.SelectionText>
            </View>
            {children}
            {buttons}
        </View>
        </Styled.SafeAreaView>
    )
}

export default BaseMethod