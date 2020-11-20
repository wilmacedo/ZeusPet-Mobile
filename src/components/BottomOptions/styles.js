import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const HeaderContainer = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${colorSchema.background};
`;

export const HandlerContainer = styled.View`
  border-radius: 30px;
  background-color: ${colorSchema.unselected};
  height: 5px;
  width: 50px;
`;

export const Container = styled.View`
  height: 600px;
  background-color: ${colorSchema.background};
`;
