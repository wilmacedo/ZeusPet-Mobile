import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { colorSchema } from '~/utils';

export const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 120px;
`;

export const ChartContainer = styled.View`
  padding: 30px;
  background-color: ${colorSchema.background};
  border-radius: 25px;
`;

export const TitleThin = styled.Text`
  font-size: 20px;
  font-family: 'regular';
`;

export const TitleBold = styled.Text`
  font-size: 22px;
  font-family: 'bold';
`;

export const Description = styled.Text`
  align-self: flex-end;
  margin-right: 30px;
  font-size: 14px;
  font-family: 'regular';
  color: ${colorSchema.fontLight};
`;

export const ChartBox = styled.View`
  align-self: center;
  align-items: flex-end;
  justify-content: center;
  height: 150px;
  width: ${Dimensions.get('window').width - 100}px;
  border: 1px solid ${colorSchema.fontLight};
  border-right-width: 0px;
  border-top-width: 0px;
  border-left-width: 0px;
  flex-direction: row;
`;

export const ChartTextContainer = styled.View`
  flex-direction: row;
  margin-left: 30px;
`;

export const ChartText = styled.Text`
  width: 25px;
  font-size: 12px;
`;

export const modalStyle = {
  zIndex: 5,

  marginTop: 'auto',

  backgroundColor: colorSchema.historyBackground,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.1,
  shadowRadius: 12,

  elevation: 4,
};