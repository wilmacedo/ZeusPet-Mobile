import React, { useState, useRef } from 'react';

import {
  StatusBar,
  Image,
  Keyboard
} from 'react-native';

import {
  Blackout,
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
} from './styles';

import Actions from '~/components/Actions';
import BottomOptions from '~/components/BottomOptions';

import { colorSchema, KeyboardFix } from '~/utils';

import Animated from 'react-native-reanimated';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState('none');
  const [delaySelectedCard, setDelaySelectedCard] = useState('none');

  const [snapPosition, setSnapPosition] = useState(1);
  const bottomSheet = useRef();
  const backgroundOpacity = new Animated.Value(1);

  return (
    <KeyboardFix>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={colorSchema.background}
      />
      <>
        <BottomOptions
          reference={bottomSheet}
          selectedCard={selectedCard}
        />
        <Blackout
          onPress={() => {
            // bottomSheet.current?.close();
            Keyboard.dismiss();
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
    </KeyboardFix>
  );
}

export default Home;