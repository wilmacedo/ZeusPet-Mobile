import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import {
  LoadingView,
  TitleThin,
  TitleBold,
  Description,
  ChartContainer,
  ChartBox,
  modalStyle
} from './styles';

import Bar from './Bar';
import { getHeight } from './filter-data';

import { getAllItems } from '~/services';

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

  return !loading ?
    <Modalize
      ref={reference}
      snapPoint={400}
      modalHeight={500}
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
      snapPoint={400}
      modalHeight={500}
      scrollViewProps={{
        showsVerticalScrollIndicator: false
      }}
    >
      <ChartContainer>
        <TitleThin>Veja a sua</TitleThin>
        <TitleBold>Atividade</TitleBold>
        <Description>Gasto semanal</Description>
        <ChartBox>{renderBar()}</ChartBox>
      </ChartContainer>
    </Modalize>
}

export default Charts;