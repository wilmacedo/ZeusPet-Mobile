import styled from 'styled-components/native';

import { colorScheme } from '../../utils';

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
  margin-left: 10px;
  color: ${colorScheme.black};
  font-family: 'regular';
  font-size: 12px;
`;

export const ActionButtonContainer = styled.View`
  height: 60px;
  width: 120px;
  border-radius: 25px;
  background-color: ${colorScheme.black};
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonText = styled.Text`
  font-family: 'regular';
  font-size: 18px;
  color: ${colorScheme.background};
`;