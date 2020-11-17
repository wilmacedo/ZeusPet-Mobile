import React, { useState } from 'react';

import { Animated } from 'react-native';

import { CardContainer } from './styles';

import { springAnimation } from '../../utils';

import Card from './Card';
import BottomInfo from './InteractiveButton';

const Actions = (props) => {
  const {
    selectedCard,
    delaySelectedCard,
    bottomSheet,
    snapPosition,
    setSelectedCard,
    setDelaySelectedCard,
  } = props;

  let standardWidth = Platform.OS === 'ios' ? 292 : 301;
  const [width, setWidth] = useState(new Animated.Value(standardWidth));

  const pressCard = (name) => {
    if (selectedCard == name) {
      setSelectedCard('none');
      springAnimation(width, standardWidth).start();
    } else if (selectedCard != name && selectedCard != 'none') {
      setSelectedCard('none');
      springAnimation(width, standardWidth).start();
    } else if (selectedCard == 'none') {
      setSelectedCard(name);
      setDelaySelectedCard(name);
      springAnimation(width, 120).start();
    }
  }

  return (
    <>
      <CardContainer>
        <Card
          selectedCard={selectedCard}
          name='store'
          iconType='store'
          margin={10}
          onPress={() => {
            pressCard('store');
          }}
        />
        <Card
          selectedCard={selectedCard}
          name='stats'
          iconType='stats'
          onPress={() => {
            pressCard('stats');
          }}
        />
      </CardContainer>
      <BottomInfo
        selectedCard={selectedCard}
        delaySelectedCard={delaySelectedCard}
        width={width}
        bottomSheet={bottomSheet}
        snapPosition={snapPosition}
      />
    </>
  );
}

export default Actions;