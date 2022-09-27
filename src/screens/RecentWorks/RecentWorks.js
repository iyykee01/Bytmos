import {Alert, FlatList, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import Container from '../../components/Container';
import {Scroller} from '../../components/Scroller';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {HorizontalSpacing} from '../../components/styleComponents/HorizontalSpacing.js';
import {VerticalSpacing} from '../../components/styleComponents/VerticalSpacing';
import {
  RecentWorksContentsWrapper,
  ImageCardStyle,
  ButtonWrapper,
  VideoWrapper,
  ImageStyle2,
} from './RecentWorksContentsWrapper';
import {UploadHolder} from '../../components/uplaodHolder/UploadHolder';
import {TextInputArea} from '../../components/TextInput/TextInputArea';
import CustomButton from '../../components/CustomButton';
import icons from '../../constants/icons';
import ImageBottomSheet from '../../components/CameraBottomSheet';
import VideoPlayer from 'react-native-video-player';
import {useEffect} from 'react';

const MyWorks = props => (
  <ImageCardStyle activeOpacity={1} onPress={props.onPress}>
    <ImageStyle2 source={props.source} resizeMode="cover" />
    <VerticalSpacing />
  </ImageCardStyle>
);

const RecentWorks = () => {
  const {goBack, navigate} = useNavigation();
  const bottomSheetRef = useRef(null);
  const [uplaodedImages, setUploadedImage] = useState([]);
  const [uplaodedVideo, setUplaodedVideo] = useState([]);

  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const handleClosePress = () => bottomSheetRef.current.close();

  const onOpenModal = type => {
    if (uplaodedImages.length === 4 && type === 'picture') {
      Alert.alert('Sorry!', 'You can upload more than 4 Images');
    } else {
      setType(type);
      bottomSheetRef?.current?.snapToIndex(1);
    }
  };

  /* handle user file uploading  */
  const handleFileUpload = imageUrl => {
    console.log(type);
    if (
      imageUrl !== null &&
      typeof imageUrl !== 'undefined' &&
      type !== null &&
      typeof type !== 'undefined' &&
      type === 'picture'
    ) {
      setUploadedImage(uplaodedImages => [...uplaodedImages, imageUrl]);
    }

    // if (
    //   imageUrl !== null &&
    //   typeof imageUrl !== 'undefined' &&
    //   type !== null &&
    //   typeof type !== 'undefined' &&
    //   type === 'video'
    // ) {
    //   setUplaodedVideo(uplaodedVideo => [...uplaodedVideo, imageUrl]);
    // }
  };

  const selectedImageHandler = item => {
    navigate('RecentWork_imageDetail_Screen', {
      imageArray: uplaodedImages,
      selectedImage: item,
    });
  };

  return (
    <>
      <Container>
        <Header isNotHome screenName="My Recent Works" />
        <Scroller>
          <VerticalSpacing />

          {uplaodedImages.length !== 0 && (
            <>
              <FlatList
                numColumns={2}
                data={uplaodedImages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => (
                  <MyWorks
                    source={{uri: item.item}}
                    onPress={() => selectedImageHandler(item.item)}
                  />
                )}
              />

              <VerticalSpacing extraPadding="2%" />
              <ImageCardStyle width="100%" disabled={true}>
                <HorizontalSpacing extraPadding="2%" />
                <Text style={FONTS.body6}>{text}</Text>
                <VerticalSpacing />
              </ImageCardStyle>

              <ButtonWrapper
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <CustomButton
                  title="Delete"
                  style={{
                    height: SIZES.font1 * 1,
                    borderRadius: 8,
                    width: 80,
                    backgroundColor: COLORS.separator,
                  }}
                  textStyle={FONTS.h9}
                  color={COLORS.white}
                />
              </ButtonWrapper>

              <VerticalSpacing />
            </>
          )}

          {uplaodedVideo.length !== 0 && (
            <RecentWorksContentsWrapper contentMarginSize={'1%'}>
              <VideoWrapper>
                {/* <VideoPlayer
                  video={{
                    source: uplaodedVideo[0]?.filename,
                  }}
                  videoWidth={1600}
                  videoHeight={1000}
                  // thumbnail={{
                  //   uri: uplaodedVideo[1],
                  // }}
                /> */}
              </VideoWrapper>
            </RecentWorksContentsWrapper>
          )}

          <HorizontalSpacing>
            {/* This is for the header Text */}
            <VerticalSpacing extraPadding="0%" />

            {uplaodedImages.length === 0 && (
              <RecentWorksContentsWrapper contentMarginSize={'15%'}>
                <Text style={FONTS.body4}>
                  Post images of your recent works or projects. This will be
                  visible to clients.
                </Text>
              </RecentWorksContentsWrapper>
            )}

            {/* This is for image upload */}
            <VerticalSpacing extraPadding="8%" />
            <UploadHolder
              source={icons.EmptyImage2}
              isImage
              onPress={() => onOpenModal('picture')}
            />

            {/* This is for video upload */}
            <VerticalSpacing extraPadding="8%" />
            <UploadHolder
              source={icons.EmptyVideo}
              onPress={() => onOpenModal('video')}
            />

            {/* This is for textarea*/}
            <VerticalSpacing extraPadding="15%" />
            <RecentWorksContentsWrapper contentMarginSize={'7%'}>
              <TextInputArea setText={setText} />
            </RecentWorksContentsWrapper>

            {/* Button */}
            <VerticalSpacing />
            <RecentWorksContentsWrapper contentMarginSize={'30%'}>
              <CustomButton
                title="Add"
                style={{
                  height: SIZES.font1 * 1.5,
                  borderRadius: 8,
                }}
                color={COLORS.white}
              />
            </RecentWorksContentsWrapper>

            <VerticalSpacing extraPadding="20%" />
          </HorizontalSpacing>
        </Scroller>
      </Container>

      <ImageBottomSheet
        ref={bottomSheetRef}
        handleClosePress={handleClosePress}
        onSelectImage={data => handleFileUpload(data)}
        type={type}
        onCoverPhotoSelect={data => console.log('coverPhoto', data)}
      />
    </>
  );
};

export default RecentWorks;
