import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import {
  LoadingView,
  Container,
  TitleThin,
  TitleBold,
  Description,
  ChartContainer,
  ChartBox
} from './styles';

import Bar from './Bar';

import { getLastWeekData } from '~/services';

import { Modalize } from 'react-native-modalize';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

const Charts = (props) => {
  const { reference } = props;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const days = [
    'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'
  ];

  const fetchData = () => {
    if (!loading) {
      getLastWeekData(setData, setLoading);
    }
  }

  const renderBar = () => {
    return days.map((name, index) => {
      let maxHeight = 150;
      let dayValue = 0;
      let height = 1;
      const margin = index > 0 ? 10 : 0;

      if (loading) {
        let maxValue = 0;

        for (const item in data) {
          let val = data[item].value;
          if (!isNaN(val)) maxValue += val;
        }

        for (const item in data) {
          let dbDate = moment(data[item].date).format('ddd').toLowerCase();

          if (name.toLowerCase() == dbDate) {
            let val = parseInt(data[item].value);

            if (!isNaN(val)) dayValue += val;
          }
        }

        height = (dayValue / maxValue) * maxHeight;
      }

      return <Bar
        key={index}
        height={height}
        marginLeft={margin}
        name={name}
      />
    });
  }

  fetchData();

  return !loading ?
    <Modalize
      ref={reference}
      modalHeight={400}
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
      handlePosition={'inside'}
      modalHeight={400}
      scrollViewProps={{
        showsVerticalScrollIndicator: false
      }}
    >
      <Container>
        <ChartContainer>
          <TitleThin>Veja a sua</TitleThin>
          <TitleBold>Atividade</TitleBold>
          <Description>Gasto semanal</Description>
          <ChartBox>
            {renderBar()}
          </ChartBox>
        </ChartContainer>
      </Container>
    </Modalize>
}

export default Charts;