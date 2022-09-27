import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import icons from '../../constants/icons';
import {FONTS} from '../../constants/theme';
import RatingStar from '../Ratings/RatingStar';
import {VerticalSpacing} from '../styleComponents/VerticalSpacing';
import {CenteredText} from '../uplaodHolder/UploadHolderStyles';

const PackageCardHeader = ({packageName, packagePrice, count, months}) => (
  <>
    <VerticalSpacing extraPadding="5%" />
    <CenteredText style={[FONTS.body2, {fontWeight: '500'}]}>
      {packageName}
    </CenteredText>

    <RatingStar defaultRating={count} />
    <VerticalSpacing extraPadding="7%" />
    <CenteredText style={[FONTS.body1, {fontWeight: '500', color: '#00709E'}]}>
      {packagePrice}
      <Text style={[FONTS.body4, {fontWeight: '500', color: '#00709E'}]}>
        {months}
      </Text>
    </CenteredText>
  </>
);

export const CategoriesSection = ({serviceName}) => (
  <>
    <View style={styles.categoriesWrapper}>
      <View style={styles.categorySection}>
        <Image
          resizeMode="contain"
          source={icons.Checked}
          width="100"
          height="100%"
        />
      </View>

      <View style={{flex: 9}}>
        <Text style={[FONTS.body3, {fontWeight: '400', paddingLeft: 10}]}>
          {serviceName}
        </Text>
      </View>
    </View>
  </>
);

export const CategoriesDes = ({serviceDes}) => (
  <>
    <Text
      style={[
        FONTS.body6,
        {fontWeight: '400', color: '#504E4E', paddingLeft: 45},
      ]}>
      {serviceDes}
    </Text>
  </>
);

export const PackagesCardContainer = ({
  packageName,
  packagePrice,
  children,
  count,
  months,
}) => {
  return (
    <>
      <PackageCardHeader
        packageName={packageName}
        packagePrice={packagePrice}
        count={count}
        months={months}
      />

      {children}
      <VerticalSpacing extraPadding="10%" />
    </>
  );
};

const styles = StyleSheet.create({
  categoriesWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  categorySection: {
    flex: 0.7,
    height: 0,
    width: 30,
  },
});
