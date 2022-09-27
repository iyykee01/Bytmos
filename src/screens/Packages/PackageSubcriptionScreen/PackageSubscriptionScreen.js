import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import {MyButton} from '../../../components/MyButton/MyButton';
import {CategoriesSection} from '../../../components/PackageCard/PackagesCard';
import {Scroller} from '../../../components/Scroller';
import {HorizontalSpacing} from '../../../components/styleComponents/HorizontalSpacing';
import {VerticalSpacing} from '../../../components/styleComponents/VerticalSpacing';
import icons from '../../../constants/icons';
import {COLORS, FONTS} from '../../../constants/theme';
import {PaymentStyle, TouchCircleStyle} from './PayementStyle';

import {DropDownView, NumsOfMonth} from '../DropDownMonthsComponent';

const PaymentSection = ({source, text}) => (
  <>
    <PaymentStyle style={styles.rowView}>
      <View style={{flex: 1.5}}>
        <Image source={source} />
      </View>

      <View style={{flex: 7}}>
        <Text style={[FONTS.body3, {fontWeight: '400'}]}>{text}</Text>
      </View>

      <View style={styles.cirleWrapper}>
        <TouchCircleStyle />
      </View>
    </PaymentStyle>
  </>
);

const PackageSubscriptionScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [items, setItems] = useState(NumsOfMonth);

  return (
    <Container>
      <Header isNotHome screenName="Package" />
      <Scroller>
        <HorizontalSpacing>
          <VerticalSpacing extraPadding="5%" />
          <Text style={[FONTS.body2, {fontWeight: '500', color: COLORS.line}]}>
            Premium Package
          </Text>
          <VerticalSpacing extraPadding="2%" />
          <Text style={[FONTS.body2, {fontWeight: '500', color: COLORS.blue}]}>
            NGN2000/
            <Text
              style={[FONTS.body5, {fontWeight: '500', color: COLORS.blue}]}>
              Month
            </Text>
          </Text>
        </HorizontalSpacing>

        <HorizontalSpacing extraPadding="2%">
          <VerticalSpacing extraPadding="7%" />
          <CategoriesSection serviceName="5 Service Category" />
          <VerticalSpacing extraPadding="5%" />
          <CategoriesSection serviceName="6 Service Sub-categories " />
          <VerticalSpacing extraPadding="5%" />
          <CategoriesSection serviceName="Unlimited Service Listings " />
        </HorizontalSpacing>

        <VerticalSpacing extraPadding="7%" />
        <HorizontalSpacing>
          <Text style={[FONTS.body3, {fontWeight: '500'}]}>
            Select Duration
          </Text>

          <VerticalSpacing extraPadding="7%" />

          <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
            <View style={{flex: 1.2, justifyContent: 'center'}}>
              <Text style={[FONTS.body6, {fontWeight: '400'}]}>Month(s)</Text>
            </View>

            <View style={{flex: 1}}>
              <DropDownView
                data={items}
                setIsFocus={setIsFocus}
                setValue={setValue}
              />
            </View>
          </View>

          <VerticalSpacing extraPadding="12%" />
          <View style={styles.rowView}>
            <Text style={[FONTS.body6, {fontWeight: '400', flex: 1}]}>
              Price
            </Text>
            <Text
              style={[FONTS.body2, {fontWeight: '500', color: COLORS.blue}]}>
              NGN4000
            </Text>
          </View>

          {/* pay with card section */}
          <VerticalSpacing extraPadding="8%" />
          <PaymentSection source={icons.BlackWallet} text="Pay with wallet" />

          <VerticalSpacing extraPadding="2.5%" />
          <PaymentSection source={icons.Card} text="Pay with card" />

          <VerticalSpacing extraPadding="20%" />
          <MyButton
            backgroundcolor={COLORS.yellow}
            borderRadius="12px"
            title="Continue"
            color={COLORS.black}
          />
        </HorizontalSpacing>
      </Scroller>
    </Container>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
  },
  cirleWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default PackageSubscriptionScreen;
