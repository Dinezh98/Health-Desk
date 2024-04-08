import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ buttonProps, height, width, fontSize }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyles,
        { height: height || 50, width: width || 'auto'},
      ]}
      onPress={buttonProps.onPress}
    >
      <Text style={[styles.textStyles, { fontSize: fontSize || 16 }]}>
        {buttonProps.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyles: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#1f2586',
  },
  textStyles: {
    color: '#FFF'
  },
});
