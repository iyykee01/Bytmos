import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {ButtonTextStyle, MyButtonStyle} from './MyButtonStyle';

export const MyButton = ({
  onPress,
  color,
  backgroundcolor,
  borderRadius,
  title,
  contentPadding,
}) => {
  return (
    <MyButtonStyle
      onPress={onPress}
      backgroundcolor={backgroundcolor}
      borderRadius={borderRadius}
      contentPadding={contentPadding}>
      <ButtonTextStyle style={[FONTS.h10, {color: color}]}>
        {title}
      </ButtonTextStyle>
    </MyButtonStyle>
  );
};
