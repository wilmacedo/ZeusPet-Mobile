import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const FormContainer = styled.View`
  margin-top: 20px;
  padding: 10px;
`;

export const AddButtonContainer = styled.View`
  margin-top: 15px;
  align-items: center;
`;

export const AddButtonBox = {
  height: 60,
  width: 150,
  backgroundColor: colorSchema.black,
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center'
}

export const AddButtonText = styled.Text`
  font-family: 'light';
  color: ${colorSchema.background};
  font-size: 20px;
`;