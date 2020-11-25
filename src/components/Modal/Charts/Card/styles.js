import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const Container = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 25px;
  background-color: ${colorSchema.background};
  align-items: center;
`;

export const IconContainer = styled.View`
  margin-top: 10px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: ${colorSchema.unselected};
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: flex-end;
`;

export const SubText = styled.Text`
  margin-bottom: 2px;
  font-family: 'regular';
  color: ${colorSchema.black};
  font-size: 12px;
`;

export const ValueText = styled.Text`
  font-family: 'bold';
  color: ${colorSchema.black};
  font-size: 18px;
`;

export const DescriptionText = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  font-family: 'regular';
  color: ${colorSchema.fontLight};
`;