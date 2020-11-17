import styled from 'styled-components/native';

import { colorScheme } from '../../utils';

export const HeaderContainer = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${colorScheme.background};
`;

export const HandlerContainer = styled.View`
  border-radius: 30px;
  background-color: ${colorScheme.unselected};
  height: 5px;
  width: 50px;
`;

export const Container = styled.View`
  height: 600px;
  background-color: ${colorScheme.background};
`;

export const FormContainer = styled.View`
  padding: 10px;
`;

export const AddButtonContainer = styled.View`
  margin-top: 15px;
  align-items: center;
`;

export const AddButtonBox = styled.TouchableOpacity`
  height: 60px;
  width: 150px;
  background-color: ${colorScheme.black};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  font-family: 'light';
  color: ${colorScheme.background};
  font-size: 20px;
`;