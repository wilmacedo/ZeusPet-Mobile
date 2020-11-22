import styled from 'styled-components/native';

import { colorSchema } from '~/utils';

export const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 120px;
`;

export const modalStyle = {
  zIndex: 5,

  marginTop: 'auto',

  backgroundColor: colorSchema.historyBackground,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.1,
  shadowRadius: 12,

  elevation: 4,
};