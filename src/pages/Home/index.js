import React, { useState, useRef } from 'react';

import {
  StatusBar,
  Image,
} from 'react-native';

import {
  Blackout,
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
} from './styles';

import Actions from '../../components/Actions';
import BottomOptions from '../../components/BottomOptions';

import { colorScheme } from '../../utils';

import Animated from 'react-native-reanimated';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState('none');
  const [delaySelectedCard, setDelaySelectedCard] = useState('none');

  const [snapPosition, setSnapPosition] = useState(1);
  const bottomSheet = useRef();
  const backgroundOpacity = new Animated.Value(1);

  return <>
    <StatusBar
      barStyle='dark-content'
      backgroundColor={colorScheme.background}
    />
    <BottomOptions
      reference={bottomSheet}
      callback={backgroundOpacity}
    />
    <Blackout
      onPress={() => {
        bottomSheet.current.snapTo(1);
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          opacity: Animated.add(0.35, Animated.multiply(backgroundOpacity, 1)),
        }}
      >
        <SafeArea>
          <Container>
            <Header>
              <Title>ZEUS</Title>
            </Header>
            <ImageContainer>
              <Image
                source={require('../../../assets/dog.png')}
                style={{ height: 240, width: 328 }}
              />
            </ImageContainer>
            <Actions
              selectedCard={selectedCard}
              delaySelectedCard={delaySelectedCard}
              bottomSheet={bottomSheet}
              snapPosition={snapPosition}
              setSelectedCard={setSelectedCard}
              setDelaySelectedCard={setDelaySelectedCard}
            />
          </Container>
        </SafeArea>
      </Animated.View>
    </Blackout>
  </>
}

export default Home;