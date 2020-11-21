import React, { useEffect, useState } from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';

import {
  Container,
  OptionContainer,
  OptionText,
  ItemList,
  LoadingView
} from './styles';

import { colorSchema } from '~/utils';

import Item from './Item';
import { getAllItems } from '~/services';

import { FlatList } from 'react-native-gesture-handler';

const Stats = () => {
  const [selectedOption, setSelectedOption] = useState('hist');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const setSelectedColor = (selectedValue) => {
    return selectedOption == selectedValue ? colorSchema.black : colorSchema.fontLight;
  }

  useEffect(() => {
    if (!loading) {
      getAllItems(setData, setLoading);
    }
  });

  const dataa = [
    {
      title: 'teste',
      date: '2020-11-17T13:53:30.928Z',
      value: 30
    },
    {
      title: 'teste',
      date: '2020-11-17T13:53:30.928Z',
      value: 30
    },
    {
      title: 'teste',
      date: '2020-11-17T13:53:30.928Z',
      value: 30
    },
    {
      title: 'teste',
      date: '2020-11-17T13:53:30.928Z',
      value: 30
    },
    {
      title: 'teste',
      date: '2020-11-17T13:53:30.928Z',
      value: 30
    },
    {
      title: 'teste',
      date: '2020-11-17T13:53:30.928Z',
      value: 30
    },
  ];

  const renderItem = ({ item }) => {
    const {
      title,
      date,
      value
    } = item;

    return (
      <Item
        title={title}
        date={date}
        value={value}
      />
    );
  }

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <Container>
          <>
            <OptionContainer>
              <TouchableOpacity
                onPress={() => {
                  if (selectedOption != 'hist') {
                    console.log('set to hist');
                    setSelectedOption('hist');
                  }
                }}
              >
                <OptionText
                  style={{
                    color: setSelectedColor('hist')
                  }}
                >
                  Histórico
                </OptionText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (selectedOption != 'info') {
                    console.log('set to info');
                    setSelectedOption('info');
                  }
                }}
              >
                <OptionText
                  style={{
                    color: setSelectedColor('info')
                  }}
                >
                  Informações
                </OptionText>
              </TouchableOpacity>
            </OptionContainer>
            {!loading ?
              <LoadingView>
                <ActivityIndicator size="large" color="black" />
              </LoadingView>
              :
              <>
                <FlatList
                  style={{ marginTop: 10 }}
                  keyExtractor={item => item.id}
                  data={dataa}
                  renderItem={renderItem}
                  contentContainerStyle={{ alignItems: 'center' }}
                />
              </>
            }
          </>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Stats;