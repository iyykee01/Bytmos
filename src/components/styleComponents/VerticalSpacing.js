import styled from 'styled-components';

export const VerticalSpacing = styled.View`
  padding-bottom: ${props => (props.extraPadding ? props.extraPadding : '5%')};
`;
