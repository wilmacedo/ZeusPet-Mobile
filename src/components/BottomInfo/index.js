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

import { MaterialIcons, Feather } from '@expo/vector-icons';

const BottomInfo = (props) => {
  const Icon = () => {
    let card = props.delaySelectedCard;

    if (card == 'store') {
      return <MaterialIcons
        name='pets'
        size={24}
        color={colorScheme.black}
      />
    } else if (card == 'stats') {
      return <Feather
        name='calendar'
        size={24}
        color={colorScheme.black}
      />
    }

    return <></>;
  }

  return (
    <Container>
      <BoxContainer>
        <Icon />
        <BoxText>Nada aqui ainda :|</BoxText>
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
            {props.selectedCard == 'none' ? 'Escolha uma opção!' : 'Adicionar'}
          </ActionButtonText>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default BottomInfo;