import React from 'react';

import { HandleObject } from './styles';

import Store from './Store';
import History from './History';

import { Modalize } from 'react-native-modalize';

const Modal = (props) => {
  const data = {};

  const {
    snapPoint,
    flatListProps,
    children
  } = data;

  return (
    <Modalize
      ref={props.reference}
      handleStyle={HandleObject}
      handlePosition={'inside'}
      snapPoint={snapPoint || 400}
      modalHeight={snapPoint || 400}
      flatListProps={flatListProps || undefined}
    >
      {!flatListProps ? children : undefined}
    </Modalize>
  );
}

export default Modal;