import React from 'react';

import Store from './Store';
import History from './History';

import { Modalize } from 'react-native-modalize';

const Modal = (props) => {
  const { 
    reference,
    selectedCard
  } = props;

  if (selectedCard == 'history') {
    return <History reference={reference} />;
  } else if (selectedCard == 'store') {
    return <Store reference={reference} />;
  } else {
    return <Modalize ref={reference} modalHeight={400} />;
  }
}

export default Modal;