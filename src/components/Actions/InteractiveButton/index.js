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

import { getLastItem } from '../../../api';

import { colorScheme } from '../../../utils';

import { MaterialIcons, Feather } from '@expo/vector-icons';

const InteractiveButton = (props) => {
  const {
    delaySelectedCard,
    selectedCard,
    width,
    bottomSheet
  } = props;

  const Icon = () => {
    if (delaySelectedCard == 'store') {
      return <MaterialIcons
        name='pets'
        size={24}
        color={colorScheme.black}
      />
    } else if (delaySelectedCard == 'stats') {
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
        <BoxText>{getLastItem().toString()}</BoxText>
      </BoxContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          if (selectedCard != 'none') {
            bottomSheet.current.snapTo(0);
          }
        }}
      >
        <Animated.View
          style={[ActionButtonStyle, { width }]}
        >
          <ActionButtonText>
            {selectedCard == 'none' ? 'Escolha uma opção!' : 'Adicionar'}
          </ActionButtonText>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default InteractiveButton;