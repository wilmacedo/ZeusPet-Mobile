import styled from 'styled-components/native';

import { colorScheme } from '../../../utils';

export const FormValueContainer = styled.View`
  margin: 20px 0 0 30px;
`;

export const FormValueBox = styled.View`
  height: 70px;
  width: 320px;
  border-color: ${colorScheme.unselected};
  border-width: 1px;
  border-radius: 25px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const IconContainer = styled.View`
  margin: 0 10px 0 10px;
`;

export const FormValueText = styled.TextInput`
  margin-top: 3px;
  color: ${colorScheme.black};
  font-size: 25px;
  font-family: 'light';
`;

export const FormMoneySymbol = styled.Text`
  color: ${colorScheme.black};
  font-size: 25px;
  font-family: 'light';
  margin-right: 3px;
  margin-top: ${Platform.OS == 'android' ? 3 : 0}px;
`;
