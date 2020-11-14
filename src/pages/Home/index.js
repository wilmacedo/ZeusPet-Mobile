import React, { useState } from 'react';

import { StatusBar, Image, Animated } from 'react-native';

import {
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';
import BottomInfo from '../../components/BottomInfo';

import { colorScheme } from '../../utils';

const Home = () => {
  const [selectedBox, setSelectedBox] = useState(0);
  const [width, setWidth] = useState(new Animated.Value(292));

  const openAnimation = Animated.spring(width, {
    toValue: 120,
    useNativeDriver: false,
  });

  const closeAnimation = Animated.spring(width, {
    toValue: 292,
    useNativeDriver: false,
  });

  const animateInfo = (index) => {
    if (selectedBox == index) {
      closeAnimation.start();
      setSelectedBox(0);
    } else {
      openAnimation.start();
      setSelectedBox(index);
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
        <ButtonsContainer>
          <Button
            iconType='store'
            margin={10}
            onPress={() => {
              animateInfo(1);
            }}
          />
          <Button
            iconType='stats'
            onPress={() => {
              animateInfo(2);
            }}
          />
        </ButtonsContainer>
        <BottomInfo selectedBox={selectedBox} width={width} />
      </Container>
    </SafeArea>
  </>
}

export default Home;