import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export interface PropsButton {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

export function Button({onPress, title, disabled}: PropsButton) {
  const style = StyleSheet.create({
    button: {
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: disabled ? '#b3b3b3' : '#0277BD',
      padding: 12,
      borderRadius: 12,
    },
    title: {
      color: 'white',
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={style.button}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
}
