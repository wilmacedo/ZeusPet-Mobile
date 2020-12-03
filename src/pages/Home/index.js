import React, { useState, useRef, useEffect } from 'react';

import {
  StatusBar,
  Image,
  Animated,
  FlatList
} from 'react-native';

import {
  SafeArea,
  Container,
  Header,
  Title,
  ImageContainer,
  CardContainer
} from './styles';

import Card from '~/components/Card';
import InteractiveButton from '~/components/InteractiveButton';
import Modal from '~/components/Modal';

import { colorSchema, springAnimation } from '~/utils';
import { getAllItems } from '~/services';
import { getLastItem } from '../../services';

const Home = () => {
  let standardWidth = 280;

  const [data, setData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const [lastData, setLastData] = useState();
  const [lastLoading, setLastLoading] = useState(false);

  const allCards = ['store', 'history', 'stats'];
  const [selectedCard, setSelectedCard] = useState('none');
  const [delaySelectedCard, setDelaySelectedCard] = useState('none');
  const [width, setWidth] = useState(new Animated.Value(standardWidth));
  const modalReference = useRef();

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

  useEffect(() => {
    getAllItems(setData, setDataLoading, false);
  }, [data]);

  useEffect(() => {
    getLastItem(setLastData, setLastLoading, false);
  }, [lastData]);

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
          data={data}
          dataLoading={dataLoading}
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
              {allCards.map((item, index) => {
                return <Card key={index}
                  selectedCard={selectedCard}
                  name={item}
                  iconType={item}
                  margin={index === allCards.length - 1 ? 0 : 10}
                  onPress={() => {
                    pressCard(item);
                  }}
                />
              })}
            </CardContainer>
            <InteractiveButton
              selectedCard={selectedCard}
              delaySelectedCard={delaySelectedCard}
              width={width}
              modalReference={modalReference}
              lastData={lastData}
              data={data}
              lastLoading={lastLoading}
              dataLoading={dataLoading}
            />
          </Container>
        </SafeArea>
      </>
    </>
  );
}

export default Home;