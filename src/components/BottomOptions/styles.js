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

export const FormDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const FormHourText = styled.TextInput`
  color: ${colorScheme.black};
  font-family: 'bold';
  font-size: 60px;
`;

export const FormDayContainer = styled.View`
  justify-content: center;
`; 

export const FormDayText = styled.TextInput`
  padding-left: 15px;
  color: ${colorScheme.black};
  font-family: 'regular';
  font-size: 22px;
  color: ${colorScheme.fontLight}
`;