import styled from 'styled-components/native';

import { Platform } from 'react-native';

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
  color: ${colorScheme.black};
  font-family: 'light';
  letter-spacing: 5px;
`;

export const ImageContainer = styled.View`
  margin: 40px 0 0 5px;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
`;

export const MessageContainer = styled.View`
  margin: 30px 35px 0 50px;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  border-color: ${colorScheme.black};
  border-width: 1px;
  margin-right: 20px;
`;

export const Message = styled.Text`
  font-family: 'light';
  font-size: 16px;
  flex-shrink: 1;  
`;

export const ActionContainer = styled.View`
  margin: 40px 30px 0 30px;
  align-items: center;
`;

export const BoxContainer = styled.View`
  height: 60px;
  width: 270px;
  border-color: ${colorScheme.unselected};
  border-width: 1px;
  border-radius: 25px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const BoxText = styled.Text`
  margin-left: 10px;
  color: ${colorScheme.black};
`;

export const ActionBtnContainer = styled.View`
  height: 60px;
  width: 120px;
  border-radius: 25px;
  background-color: ${colorScheme.black};
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const ActionBtnText = styled.Text`
  font-family: 'regular';
  font-size: 18px;
  color: ${colorScheme.background};
`;