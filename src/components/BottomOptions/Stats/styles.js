import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

const height = Dimensions.get('window').height - 365;

export const Container = styled.View`
  height: ${height}px;
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

export const ItemList = styled.FlatList`
  margin-top: 10px;
`;