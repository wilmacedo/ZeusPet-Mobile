import React from 'react';

import { StatusBar, Image } from 'react-native';

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
          />
          <Button iconType='stats' />
        </ButtonsContainer>
        <BottomInfo />
      </Container>
    </SafeArea>
  </>
}

export default Home;