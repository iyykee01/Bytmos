import styled from 'styled-components';
import {COLORS, SIZES} from '../../constants/theme';

export const MyButtonStyle = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.backgroundcolor};
  align-items: center;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '8px')};
  padding: ${props => (props.contentPadding ? props.contentPadding : '13px')};
`;

export const ButtonTextStyle = styled.Text`
  color: ${props => props.color};
`;
