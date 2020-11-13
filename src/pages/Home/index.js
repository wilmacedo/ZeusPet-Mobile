import React, { useState } from 'react';

import { StatusBar, Image } from 'react-native';

import {
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
  ButtonsContainer,
  MessageContainer,
  LogoImage,
  Message,
  ActionContainer,
  BoxContainer,
  BoxText,
  ActionBtnContainer,
  ActionBtnText,
} from './styles';

import { Feather } from '@expo/vector-icons';

import Button from '../../components/Button';

import { colorScheme } from '../../utils';

const Home = () => {
  const [selectedBox, setSelectedBox] = useState(null);

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
        {/* <MessageContainer>
          <LogoImage
            source={require('../../../assets/cropped_dog.png')}
          />
          <Message>
            Escolha uma opção!
          </Message>
        </MessageContainer> */}
        <ActionContainer>
          <BoxContainer>
            <Feather
              name="calendar"
              size={24}
              color={colorScheme.black}
            />
            <BoxText
              style={{ fontSize: selectedBox == null ? 12 : 14 }}
            >
              Escolha uma opção!
            </BoxText>
          </BoxContainer>
          <ActionBtnContainer>
            <ActionBtnText>
              Comprar
            </ActionBtnText>
          </ActionBtnContainer>
        </ActionContainer>
      </Container>
    </SafeArea>
  </>
}

export default Home;