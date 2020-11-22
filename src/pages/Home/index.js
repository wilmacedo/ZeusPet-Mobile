import React, { useState, useRef } from 'react';

import {
  StatusBar,
  Image,
} from 'react-native';

import {
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
} from './styles';

import Actions from '~/components/Actions';
import Modal from '~/components/Modal';

import { colorSchema, KeyboardFix } from '~/utils';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState('none');
  const [delaySelectedCard, setDelaySelectedCard] = useState('none');
  const modalReference = useRef();

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={colorSchema.background}
      />
      <>
        <Modal
          reference={modalReference}
          selectedCard={selectedCard}
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
            <Actions
              selectedCard={selectedCard}
              delaySelectedCard={delaySelectedCard}
              modalReference={modalReference}
              setSelectedCard={setSelectedCard}
              setDelaySelectedCard={setDelaySelectedCard}
            />
          </Container>
        </SafeArea>
      </>
    </>
  );
}

export default Home;