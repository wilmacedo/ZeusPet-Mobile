import React, { useEffect, useState } from 'react';

import { Animated } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  BoxContainer,
  BoxText,
  ActionButtonText,
  ActionButtonStyle
} from './styles';

import { getLastItem } from '~/services';

import { colorScheme } from '~/utils';

import { MaterialIcons, Feather } from '@expo/vector-icons';
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';

const InteractiveButton = (props) => {
  const {
    delaySelectedCard,
    selectedCard,
    width,
    bottomSheet
  } = props;  

  let standardText = 'Nada por aqui :|';
  const [lastItem, setLastItem] = useState(standardText);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCard == 'store') {
      getLastItem(setLastItem, setLoading);
    }
  })

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
        <BoxText
          style={{
            fontSize: lastItem == standardText ? 14 : 16
          }}
        >{lastItem}</BoxText>
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