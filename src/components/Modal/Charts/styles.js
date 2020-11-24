import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { colorSchema } from '~/utils';

export const Container = styled.View`
  margin: 30px;
`;

export const TitleThin = styled.Text`
  font-size: 20px;
  font-family: 'regular';
`;

export const TitleBold = styled.Text`
  font-size: 22px;
  font-family: 'bold';
`;

export const ChartContainer = styled.View`
  
`;

export const ChartBox = styled.View`
  align-self: center;
  margin-top: 20px;
  height: 150px;
  width: ${Dimensions.get('window').width - 120}px;
  border: 1px solid ${colorSchema.fontLight};
  border-right-width: 0px;
  border-top-width: 0px;
  border-left-width: 0px;
  flex-direction: row;
  align-items: flex-end;
`;

export const ChartTextContainer = styled.View`
  flex-direction: row;
  margin-left: 30px;
`;

export const ChartText = styled.Text`
  width: 25px;
  font-size: 12px;
`;