import React, { useState, useRef, useEffect } from 'react';

import {
  StatusBar,
  Image,
  Animated,
  FlatList,
  View,
  Dimensions
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

import { colorSchema, springAnimation, auth, petImages } from '~/utils';
import { getAllItems } from '~/services';

const Home = () => {
  let standardWidth = 280;

  const [fullData, setFullData] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [petName, setPetName] = useState('Zeus');

  const allCards = ['store', 'history', 'stats'];
  const [selectedCard, setSelectedCard] = useState('none');
  const [delaySelectedCard, setDelaySelectedCard] = useState('none');
  const [width, setWidth] = useState(new Animated.Value(standardWidth));
  const modalReference = useRef();
  const petReference = useRef();

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

  const updateData = () => {
    getAllItems(setFullData, setLoading);

    for (const item in fullData) {
      let username = fullData[item].username;
      let password = fullData[item].password;

      if (auth(username, password)) {
        for (const pet in fullData[item].pets) {
          let name = fullData[item].pets[pet].name;

          if (name === petName) setData(fullData[item].pets[pet].items);
        }
      } else {
        // Auth error
      }
    }
  }

  useEffect(() => { if (!loading) updateData(); });

  useEffect(() => updateData(), [selectedCard, petName]);

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
          fullData={fullData}
          petName={petName}
          loading={loading}
        />
        <SafeArea>
          <Container>
            <Header>
              <Title>ZEUS</Title>
            </Header>
            <ImageContainer
              ref={petReference}
              data={petImages}
              keyExtractor={item => item.index}
              horizontal
              pagingEnabled
              decelerationRate={'fast'}
              initialScrollIndex={petName === 'Zeus' ? 0 : 1}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                let index = parseInt(event.nativeEvent.contentOffset.x / 392);

                for (const item in petImages) {
                  if (petImages[item].index === index) {
                    setPetName(petImages[item].name);
                  }
                }
              }}
              onScroll={_ => pressCard(selectedCard)}
              renderItem={({ item }) => {
                return <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: Dimensions.get('window').width
                }}>
                  <Image
                    source={item.image}
                    style={item.style}
                  />
                </View>

              }}
            />
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
              petName={petName}
              data={data}
              loading={loading}
            />
          </Container>
        </SafeArea>
      </>
    </>
  );
}

export default Home;