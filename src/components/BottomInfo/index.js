import React from 'react';

import { Animated } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  BoxContainer,
  BoxText,
  ActionButtonText,
  ActionButtonStyle
} from './styles';

import { colorScheme } from '../../utils';

import { Feather } from '@expo/vector-icons';
import { } from 'react-native-gesture-handler';

const BottomInfo = (props) => {
  return (
    <Container>
      <BoxContainer>
        <Feather
          name="calendar"
          size={24}
          color={colorScheme.black}
        />
        <BoxText>15 de Maio, 13:03</BoxText>
      </BoxContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          if (props.selectedCard != 'none') {
            
          }
        }}
      >
        <Animated.View
          style={[ActionButtonStyle, { width: props.width }]}
        >
          <ActionButtonText>
            Atualizar
        </ActionButtonText>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default BottomInfo;