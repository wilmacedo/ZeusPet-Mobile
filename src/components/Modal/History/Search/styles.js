import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { colorSchema } from '~/utils';

const width = Dimensions.get('window').width - 140;

export const Container = styled.View`
  height: 130px;
  background-color: ${colorSchema.background};
  border-radius: 25px;
  margin-bottom: 20px;
`;

export const TextContainer = styled.View`
  margin: 15px 0 0 30px;
`;

export const TitleThin = styled.Text`
  font-family: 'regular';
  font-size: 20px;
`;

export const TitleBold = styled.Text`
  font-family: 'bold';
  font-size: 22px;
`;

export const SearchContainer = styled.View`
  align-self: center;
  margin-top: 15px;
  height: 40px;
  background-color: ${colorSchema.backgroundLight};
  width: ${width}px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  margin-left: 15px;
`;

export const Text = styled.TextInput`
  margin-left: 10px;
  width: ${width}px;
`;
