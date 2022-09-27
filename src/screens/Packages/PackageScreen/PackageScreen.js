import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, FONTS, SIZES} from '../../../constants/theme';
import Container from '../../../components/Container';
import {PackageSlide1} from '../PackSlides/PackageSlide1';
import Header from '../../../components/Header';
import {VerticalSpacing} from '../../../components/styleComponents/VerticalSpacing';
import {PackageSlide2} from '../PackSlides/PackageSlide2';
import {CardContentWrapperStyle} from '../../../components/PackageCard/CardContentWrapperStyle';
import {CenteredText} from '../../../components/uplaodHolder/UploadHolderStyles';
import {PackageSlide3} from '../PackSlides/PackageSlide3';
import {HorizontalSpacing} from '../../../components/styleComponents/HorizontalSpacing';
import {MyButton} from '../../../components/MyButton/MyButton';
import {color} from 'react-native-reanimated';
import {ButtonTextStyle} from '../../../components/MyButton/MyButtonStyle';

const slides = [1, 2, 3];

const getActiveSlide = key => {
  switch (key) {
    case 1:
      return <PackageSlide1 />;
    case 2:
      return <PackageSlide2 />;
    case 3:
      return <PackageSlide3 />;
    default:
      return null;
  }
};

export function PackageScreen({navigation}) {
  const sliderRef = useRef(null);

  //TODO: Get active slide state

  const handleGetstarted = () => {
    /* after onboarding goto terms */
    navigation.navigate('Package_Subscription');
  };

  const _renderItem = ({item}) => {
    return <View>{getActiveSlide(item)}</View>;
  };

  return (
    <Container>
      <Header isNotHome screenName="Package" />

      <VerticalSpacing extraPadding="2%" />

      <CenteredText style={[FONTS.h6, {fontWeight: '500'}]}>
        Service Creation Packages
      </CenteredText>

      <VerticalSpacing />

      <CardContentWrapperStyle>
        <AppIntroSlider
          ref={sliderRef}
          renderItem={_renderItem}
          data={slides}
          dotStyle={[customeStyles.dotStyle]}
          activeDotStyle={[
            customeStyles.dotStyle,
            {backgroundColor: COLORS.blue},
          ]}
          onDone={() => navigation.navigate('TermsPrivacy')}
        />

        <HorizontalSpacing>
          <MyButton
            onPress={handleGetstarted}
            backgroundcolor={COLORS.yellow}
            borderRadius="200px"
            title="Buy Now"
            color={COLORS.black}
            contentPadding="10px"
          />
        </HorizontalSpacing>

        <VerticalSpacing extraPadding="10%" />
      </CardContentWrapperStyle>
      <VerticalSpacing extraPadding="10%" />
    </Container>
  );
}

const customeStyles = StyleSheet.create({
  dotStyle: {
    borderColor: COLORS.blue,
    width: SIZES.font10,
    height: SIZES.font10,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: SIZES.font10,
  },
  doneButtonStyle: {
    width: '100%',
    height: SIZES.font1 * 1.2,
    flexDirection: 'row',
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'space-evenly',
    marginRight: SIZES.font10 * 0.01,
  },
  getStartedText: {
    ...FONTS.h10,
    color: COLORS.black,
  },
});

export default PackageScreen;
