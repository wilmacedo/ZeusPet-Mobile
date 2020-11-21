import styled from 'styled-components/native';

import { colorSchema } from '~/utils'; 

export const FormDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const FormTimeText = styled.TextInput`
  color: ${colorSchema.black};
  font-family: 'bold';
  font-size: 60px;
`;

export const FormDayContainer = styled.View`
  justify-content: center;
  bottom: 4px;
`;

export const FormDayText = styled.TextInput`
  padding-left: 15px;
  font-family: 'regular';
  font-size: 22px;
  color: ${colorSchema.fontLight};
  text-transform: capitalize;
`;
