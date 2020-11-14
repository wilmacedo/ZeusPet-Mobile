import React, { useState, useEffect } from 'react';

import { StatusBar, Image, Animated, Platform } from 'react-native';

import {
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
  CardContainer,
} from './styles';

import Card from '../../components/Card';
import BottomInfo from '../../components/BottomInfo';

import { colorScheme } from '../../utils';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState('none');
  let standardWidth = Platform.OS === 'ios' ? 292 : 301;
  const [width, setWidth] = useState(new Animated.Value(standardWidth));

  const openAnimation = Animated.spring(width, {
    toValue: 120,
    useNativeDriver: false,
  });

  const closeAnimation = Animated.spring(width, {
    toValue: standardWidth,
    useNativeDriver: false,
  });

  const pressCard = (name) => {
    if (selectedCard == name) {
      setSelectedCard('none');
      closeAnimation.start();
    } else if (selectedCard != name && selectedCard != 'none') {
      setSelectedCard('none');
      closeAnimation.start();
    } else if (selectedCard == 'none') {
      setSelectedCard(name);
      openAnimation.start();
    }
  }

  return <>
    <StatusBar
      barStyle='dark-content'
      backgroundColor={colorScheme.background}
    />
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
        <BottomInfo selectedCard={selectedCard} width={width} />
      </Container>
    </SafeArea>
  </>
}

export default Home;