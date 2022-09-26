import {FlatList, Image, Modal, Text, View} from 'react-native';
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
  ImageStyle,
  ButtonWrapper,
  VideoWrapper,
} from './RecentWorksContentsWrapper';
import {UploadHolder} from '../../components/uplaodHolder/UploadHolder';
import {TextInputArea} from '../../components/TextInput/TextInputArea';
import CustomButton from '../../components/CustomButton';
import icons from '../../constants/icons';
import ImageBottomSheet from '../../components/CameraBottomSheet';

const MyWorks = props => (
  <ImageCardStyle activeOpacity={1} onPress={props.onPress}>
    <ImageStyle source={props.source} />
    <VerticalSpacing />
  </ImageCardStyle>
);

const RecentWorks = () => {
  const {goBack, navigate} = useNavigation();
  const [uplaodedImages, setUploadedImage] = useState([
    icons.FashionItem4,
    icons.FashionItem1,
    icons.FashionItem2,
    icons.FashionItem3,
  ]);

  const bottomSheetRef = useRef(null);

  const [uplaodedVideo, setUplaodedVideo] = useState([icons.FashionItem3]);

  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const handleClosePress = () => bottomSheetRef.current.close();

  const onOpenModal = type => {
    setType(type);
    bottomSheetRef?.current?.snapToIndex(1);
  };

  /* handle user file uploading  */
  const handleFileUpload = (type, imageUrl) => {
    if (
      imageUrl !== null &&
      typeof imageUrl !== 'undefined' &&
      type !== null &&
      typeof type !== 'undefined'
    ) {
      console.log(type, imageUrl);
    }
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
                    source={item.item}
                    onPress={() => navigate('RecentWork_imageDetail_Screen')}
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

              {uplaodedVideo.length !== 0 && (
                <RecentWorksContentsWrapper contentMarginSize={'1%'}>
                  <VideoWrapper />
                </RecentWorksContentsWrapper>
              )}
            </>
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
              onPress={() => onOpenModal('cover')}
            />

            {/* This is for video upload */}
            <VerticalSpacing extraPadding="8%" />
            <UploadHolder
              source={icons.EmptyVideo}
              onPress={() => alert('i was clicked')}
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
        onSelectImage={handleFileUpload}
        type={type}
        onCoverPhotoSelect={data => console.log('coverPhoto', data)}
      />
    </>
  );
};

export default RecentWorks;
