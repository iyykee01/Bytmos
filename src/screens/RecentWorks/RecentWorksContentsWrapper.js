import styled from 'styled-components';

export const RecentWorksContentsWrapper = styled.View`
  margin-horizontal: ${props => props.contentMarginSize};
`;

export const ImageCardStyle = styled.TouchableOpacity`
  height: ${props => (props.height ? props.height : '110px')};
  width: ${props => (props.width ? props.width : '50%')};
  padding-horizontal: ${props => (props.padding ? props.padding : '3.5px')};
  padding-vertical: ${props => (props.padding ? props.padding : '4px')};
  align-items: center;
`;

export const ImageStyle = styled.Image`
  height:100%
  width:95%;
`;

export const ImageStyle2 = styled.Image`
  height:100%
  width:100%;
`;

export const ButtonWrapper = styled.View`
  margin-right: 3.5%;
  margin-top: -7%;
`;

export const VideoWrapper = styled.View`
  height: 250px;
  width: 100%;
`;
