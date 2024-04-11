import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ICustomButtonProps {
  name: string;
  hasBorderRadius?: boolean;
  isSelected?: boolean;
  bgColor?: string;
  isDisabled?: boolean;
  onPress?: (e: string) => void;
}
export default function CustomButton({
  name,
  hasBorderRadius,
  bgColor = 'white',
  isSelected,
  isDisabled,
  onPress,
}: ICustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(name)}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={
        hasBorderRadius
          ? {...style.border, borderRadius: 5, backgroundColor: bgColor}
          : {...style.border, backgroundColor: bgColor}
      }>
      <Text style={style.text}>{isSelected ? `${name}  ✓` : name}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  border: {
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});
