import styled from 'styled-components/native';

import { Platform } from 'react-native';

import { colorSchema } from '~/utils';

export const Container = styled.View`
  margin: 40px 0px 0 0px;
  align-items: center;
`;

export const BoxContainer = styled.View`
  height: 60px;
  width: 280px;
  border-color: ${colorSchema.unselected};
  border-width: 1px;
  border-radius: 25px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const BoxText = styled.Text`
  margin: 3px 0 0 10px;
  max-width: 130px;
  color: ${colorSchema.black};
  font-family: 'regular';
  font-size: 16px;
`;

export const ActionButtonStyle = {
  marginRight: Platform.OS == 'android' ? 57 : 48,
  height: 60,
  width: 280,
  borderRadius: 25,
  backgroundColor: colorSchema.black,
  position: 'absolute',
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
};

export const ActionButtonText = styled.Text`
  font-family: 'light';
  font-size: 18px;
  color: ${colorSchema.background};
`;