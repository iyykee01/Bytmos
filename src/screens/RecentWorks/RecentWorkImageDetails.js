import {FlatList, Image, Modal, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Container from '../../components/Container';
import {VerticalSpacing} from '../../components/styleComponents/VerticalSpacing';
import {ImageCardStyle, ImageStyle2} from './RecentWorksContentsWrapper';

import icons from '../../constants/icons';
import RatingStar from '../../components/Ratings/RatingStar';

const MyWorks = props => (
  <ImageCardStyle activeOpacity={1} width="62%" height="140px" padding="0%">
    <ImageStyle2
      source={props.source}
      width="100%"
      resizeMode="cover"
      style={{backgroundColor: 'black'}}
    />
  </ImageCardStyle>
);

const RecentWorkImageDetail = () => {
  const {goBack} = useNavigation();
  const [uplaodedImages, setUploadedImage] = useState([
    icons.FashionItem4,
    icons.FashionItem1,
    icons.FashionItem2,
  ]);

  return (
    <>
      <Container style={{marginHorizontal: 8}}>
        <Header isNotHome screenName="My Recent Works" />
        <VerticalSpacing extraPadding="5%" />
        <ImageCardStyle height="70%" width="100%" padding="0%" disabled>
          <ImageStyle2 source={icons.FashionItem4} />
        </ImageCardStyle>
        <VerticalSpacing extraPadding="2%" />
        {/* <FlatList
          horizontal
          data={uplaodedImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => <MyWorks source={item.item} />}
        /> */}
        
        <RatingStar defaultRating={2} />
      </Container>
    </>
  );
};

export default RecentWorkImageDetail;
