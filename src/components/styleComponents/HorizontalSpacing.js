import styled from 'styled-components';

export const HorizontalSpacing = styled.View`
  margin-horizontal: ${props => (props.extraPadding ? '8%' : '3%')};
`;
