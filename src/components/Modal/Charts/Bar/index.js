import React, { useEffect, useState } from 'react';

import { Animated } from 'react-native';

import {
  BarContainer,
  BarDescription,
  BarModel
} from './styles';

import { springAnimation } from '~/utils';

const Bar = (props) => {
  const {
    height,
    marginLeft,
    name
  } = props;

  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0));

  springAnimation(animatedHeight, height).start();

  return (
    <BarContainer style={{ marginLeft }}>
      <Animated.View style={[BarModel, { height: animatedHeight }]} />
      <BarDescription>{name}</BarDescription>
    </BarContainer>
  );
}

export default Bar;