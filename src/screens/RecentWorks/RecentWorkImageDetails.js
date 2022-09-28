import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Container from '../../components/Container';
import {VerticalSpacing} from '../../components/styleComponents/VerticalSpacing';
import {ImageCardStyle, ImageStyle2} from './RecentWorksContentsWrapper';
import {FlatGrid} from 'react-native-super-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MyWorks = props => (
  <ImageCardStyle activeOpacity={1} width="100%" height="140px" padding="0%">
    <ImageStyle2 source={props.source} width="100%" resizeMode="cover" />
  </ImageCardStyle>
);

const RecentWorkImageDetail = ({route}) => {
  const {goBack} = useNavigation();
  const {index, uplaodedImages} = route.params;
  const [selectedImg, setSelectedImg] = useState();
  const [imagesParams, setImagesParams] = useState([]);

  /**
   * This method will:-
   * Remove image from @params and set it to @selectedImg
   * Replace image with selected image on button tap
   * Remove image for array
   * and add image back to array
   */
  const imageHandler = () => {
    setSelectedImg(uplaodedImages[index]);
    setImagesParams(uplaodedImages);
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
        <VerticalSpacing extraPadding="0%" />

        <FlatGrid
          horizontal
          itemDimension={130}
          data={uplaodedImages}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                style={{width: 250, height: 130, padding: 0}}
                onPress={() => setSelectedImg(item)}>
                <MyWorks source={{uri: item}} />
              </TouchableOpacity>
            </>
          )}
        />
      </Container>
    </>
  );
};

export default RecentWorkImageDetail;
