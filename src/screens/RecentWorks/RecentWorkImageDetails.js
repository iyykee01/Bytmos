import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Container from '../../components/Container';
import {VerticalSpacing} from '../../components/styleComponents/VerticalSpacing';
import {ImageCardStyle, ImageStyle2} from './RecentWorksContentsWrapper';

const MyWorks = props => (
  <ImageCardStyle activeOpacity={1} width="62%" height="140px" padding="0%">
    <ImageStyle2 source={props.source} width="100%" resizeMode="cover" />
  </ImageCardStyle>
);

const RecentWorkImageDetail = ({route}) => {
  const {goBack} = useNavigation();
  const {params} = route;
  const [selectedImg, setSelectedImg] = useState();
  const [uplaodedImages, setUploadedImage] = useState([]);

  /**
   * This method will:-
   * Remove image from @params and set it to @selectedImg
   * Replace image with selected image on button tap
   * Remove image for array
   * and add image back to array
   */
  const imageHandler = () => {
    const selected = params.shift();
    setSelectedImg(selected);
    setUploadedImage([...params]);
  };

  useEffect(() => {
    imageHandler();
  }, []);

  return (
    <>
      <Container style={{marginHorizontal: 8}}>
        <Header isNotHome screenName="My Recent Works" />
        <VerticalSpacing extraPadding="5%" />
        <ImageCardStyle height="70%" width="100%" padding="0%" disabled>
          <ImageStyle2 source={{uri: selectedImg}} />
        </ImageCardStyle>
        <VerticalSpacing extraPadding="2%" />

        <FlatList
          data={uplaodedImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <MyWorks
              source={{uri: item.item}}
              onPress={() => selectedImageHandler(item.item)}
            />
          )}
        />
      </Container>
    </>
  );
};

export default RecentWorkImageDetail;
