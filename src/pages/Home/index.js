import React from 'react';

import { StatusBar, Image } from 'react-native';

import { SafeArea, Container, Header, Title, ImageContainer } from './styles';

import { Ionicons } from '@expo/vector-icons';

import { colorScheme } from '../../utils';

const Home = () => {
  return <>
    <StatusBar barStyle='dark-content' backgroundColor={colorScheme.background} />
    <SafeArea>
      <Container>
        <Header>
          <Title>Zeus</Title>
        </Header>
        <ImageContainer>
          <Image source={require('../../../assets/dog.png')} style={{ height: 234, width: 336 }} />
        </ImageContainer>
      </Container>
    </SafeArea>
  </>
}

export default Home;