import React from 'react';
import {AirbnbRating} from 'react-native-ratings';

const RatingStar = ({defaultRating}) => (
  <AirbnbRating
    selectedColor="#FFCC33"
    unSelectedColor="#DDDCD8"
    reviews={[]}
    reviewSize={0}
    count={5}
    defaultRating={defaultRating}
    size={23}
    isDisabled
    ratingContainerStyle={{marginTop: -20}}
  />
);

export default RatingStar;
