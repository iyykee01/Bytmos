import styled from 'styled-components';

export const HorizontalSpacing = styled.View`
  margin-horizontal: ${props =>
    props.extraPadding ? props.extraPadding : '4%'};
`;
