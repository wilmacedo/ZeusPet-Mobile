import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const Container = styled.View`
  height: 600px;
  background-color: ${colorSchema.background};
`;

export const OptionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const OptionText = styled.Text`
  padding: 5px;
  font-family: 'regular';
  font-size: 18px;
`;

export const ItemsContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;