import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colorSchema.background};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: ${colorSchema.black};
  font-family: 'light';
  letter-spacing: 6px;
`;

export const ImageContainer = styled.FlatList`
  max-height: 338px;
  padding-top: 20px;
`;

export const CardContainer = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
`;
