import React from 'react';
import {Image, Text, View} from 'react-native';
import {FONTS, SIZES} from '../../constants/theme';
import {VerticalSpacing} from '../styleComponents/VerticalSpacing';
import {TextContainer, UploadHolderStyle} from './UploadHolderStyles';
import icons from '../../constants/icons';

export const UploadHolder = props => {
  return (
    <>
      <UploadHolderStyle
        style={{borderStyle: 'dashed'}}
        onPress={props.onPress}>
        <View
          style={{
            width: SIZES.font1 * 1.5,
            height: SIZES.font1 * 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={props.source}
            style={{
              width: '100%',
              height: '70%',
            }}
          />
        </View>
      </UploadHolderStyle>
      <VerticalSpacing extraPadding="2%" />

      <TextContainer setMargin="28%">
        <Text style={FONTS.body5}>
          {props.isImage
            ? 'Not more than 4 images at a time.'
            : 'Not more than 1 video at a time.'}
        </Text>
      </TextContainer>
    </>
  );
};
