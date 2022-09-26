import styled from 'styled-components';
import {COLORS} from '../../constants/theme';

export const UploadHolderStyle = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  align-self: center;
  border-color: ${COLORS.black};
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const CenteredText = styled.Text`
  text-align: center;
`;

export const TextContainer = styled.View`
  margin-horizontal: ${props => props.setMargin};
`;
