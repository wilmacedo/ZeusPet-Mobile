import React from 'react';

import {
  Container,
  TitleThin,
  TitleBold,
  ChartContainer,
  ChartBox,
  ChartTextContainer,
  ChartText
} from './styles';

import Bar from './Bar';

import { Modalize } from 'react-native-modalize';

const Charts = (props) => {
  const { reference } = props;

  return (
    <Modalize
      ref={reference}
      handlePosition={'inside'}
      modalHeight={400}
    >
      <Container>
        <TitleThin>Veja a sua</TitleThin>
        <TitleBold>Atividade</TitleBold>
        <ChartContainer>
          <ChartBox>
            {[1, 2, 3, 4, 5, 6, 7].map((index) => {
              let maxHeight = 150;
              return <Bar
                key={index}
                style={{
                  height: Math.random() * maxHeight,
                  marginLeft: index > 1 ? 15 : 0
                }}
              />
            })}
          </ChartBox>
          <ChartTextContainer>
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map((item, index) => {
              return <ChartText
                key={item}
                style={{
                  marginLeft: index > 0 ? 15 : 0
                }}
              >{item}</ChartText>
            })}
          </ChartTextContainer>
        </ChartContainer>
      </Container>
    </Modalize>
  );
}

export default Charts;