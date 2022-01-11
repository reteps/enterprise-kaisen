import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const BaseMethod = ({ navigation, children, name, next }) => {
    const buttons = 
    <>
        <TouchableOpacity onPress={() => {
            navigation.navigate('AlgorithmStart')
        }}>
                <Text>Start Over</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(next)}>
            <Text>View Details</Text>
        </TouchableOpacity>
    </>
    
    return (
        <View>
            <Text>You should use the {name} method.</Text>
            {children}
            {buttons}
        </View>
    )
}

export default BaseMethod