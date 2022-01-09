import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'

const Button = (props: { title: string; onPress: (_: GestureResponderEvent) => void; }) => {
    const { title, onPress } = props;
    return <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
}
export default Button;