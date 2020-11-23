import React from 'react';

import { Container } from './styles';

import { Modalize } from 'react-native-modalize';

const Charts = (props) => {
  const { reference } = props;

  return (
    <Modalize
      ref={reference}
      handlePosition={'inside'}
      modalHeight={400}
    >

    </Modalize>
  );
}

export default Charts;