import React from 'react';
import {TextInput} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {TextInputAreaStyle} from './TextInputAreaStyle';

export const TextInputArea = props => {
  return (
    <>
      <TextInputAreaStyle
        borderColor={COLORS.textAreaColor}
        style={FONTS.body5}
        placeholder="Add a description for the image(s)"
        multiline={true}
        numberOfLines={4}
        onChangeText={text => props.setText(text)}
        value={props.value}
      />
    </>
  );
};

export default TextInput;
