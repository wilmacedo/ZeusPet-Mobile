import styled from 'styled-components/native';

import { colorScheme } from '../../utils';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colorScheme.background};
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
`;

export const ImageContainer = styled.View`
  margin: 40px 0 0 5px;
  align-items: center;
`;