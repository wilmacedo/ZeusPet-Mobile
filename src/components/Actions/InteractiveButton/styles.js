import styled from 'styled-components/native';

import { colorScheme } from '~/utils';

export const Container = styled.View`
  margin: 40px 30px 0 30px;
  align-items: center;
`;

export const BoxContainer = styled.View`
  height: 60px;
  width: 270px;
  border-color: ${colorScheme.unselected};
  border-width: 1px;
  border-radius: 25px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const BoxText = styled.Text`
  margin: 3px 0 0 10px;
  max-width: 130px;
  color: ${colorScheme.black};
  font-family: 'regular';
  font-size: 16px;
`;

export const ActionButtonStyle = {
  height: 60,
  width: 292,
  borderRadius: 25,
  backgroundColor: colorScheme.black,
  position: 'absolute',
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
};

export const ActionButtonText = styled.Text`
  font-family: 'light';
  font-size: 18px;
  color: ${colorScheme.background};
`;