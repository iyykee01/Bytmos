import {Circle} from 'react-native-svg';
import styled from 'styled-components';

export const PaymentStyle = styled.View`
  widht: 100%;
  padding: 12px;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
`;

export const TouchCircleStyle = styled.TouchableOpacity`
    height: 20px
    width: 20px
    border-color: #FFCC33;
    border-width: 2px;
    border-radius: 25px;
    background-color: ${props => props.backgroundColor}
`;
