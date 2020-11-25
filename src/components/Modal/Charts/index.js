import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import {
  LoadingView,
  TitleThin,
  TitleBold,
  Description,
  ChartContainer,
  ChartBox,
  modalStyle,
  CardContainer
} from './styles';

import Bar from './Bar';
import Card from './Card';
import { getMaxValue, getHeight, getDayMaxValue } from './filter-data';

import { getAllItems } from '~/services';
import { formatToMoney } from '~/utils';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

const Charts = (props) => {
  const { reference } = props;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

  if (!loading) getAllItems(setData, setLoading);

  const renderBar = () => {
    return days.map((name, index) => {
      return <Bar
        key={index}
        height={getHeight(name, data, loading)}
        marginLeft={index > 0 ? 10 : 0}
        name={name}
      />
    });
  }

  const cardItems = [
    {
      value: () => formatToMoney(getMaxValue(data, loading)),
      icon: () => <FontAwesome5
        name="money-bill-alt"
        size={12}
        color={'rgba(0, 0, 0, 0.8)'}
      />,
      description: 'Total semanal',
      sub: 'R$ '
    },
    {
      value: () => getDayMaxValue(data, loading),
      icon: () => <FontAwesome
        name="calendar-o"
        size={12}
        color={'rgba(0, 0, 0, 0.8)'}
      />,
      description: 'Dia de maior valor'
    }
  ];

  return !loading ?
    <Modalize
      ref={reference}
      modalHeight={480}
      handlePosition={'inside'}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        scrollEnabled: false
      }}
    >
      <LoadingView>
        <ActivityIndicator size="large" color="black" />
      </LoadingView>
    </Modalize>
    :
    <Modalize
      ref={reference}
      modalStyle={modalStyle}
      handlePosition={'inside'}
      modalHeight={480}
      scrollViewProps={{
        showsVerticalScrollIndicator: false
      }}
    >
      <>
        <ChartContainer>
          <TitleThin>Veja a sua</TitleThin>
          <TitleBold>Atividade</TitleBold>
          <Description>Gasto semanal</Description>
          <ChartBox>{renderBar()}</ChartBox>
        </ChartContainer>
        <CardContainer>
          {cardItems.map((item, index) => {
            return <Card
              key={index}
              value={item.value()}
              sub={item.sub}
              description={item.description}
              icon={item.icon()}
            />
          })}
        </CardContainer>
      </>
    </Modalize>
}

export default Charts;