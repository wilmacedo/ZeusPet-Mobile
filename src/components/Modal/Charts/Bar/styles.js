import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const BarContainer = styled.View`
`;

export const BarDescription = styled.Text`
  position: absolute;
  align-self: center;
  bottom: -20px;
  font-family: 'regular';
  font-size: 12px;
`;

export const BarModel = {
  width: 30,
  backgroundColor: colorSchema.black,
  borderTopLeftRadius: 7,
  borderTopRightRadius: 7
}