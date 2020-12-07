import React from 'react';

import Store from './Store';
import History from './History';
import Charts from './Charts';

import { Modalize } from 'react-native-modalize';

const Modal = (props) => {
  const {
    reference,
    selectedCard,
    fullData,
    petName,
    data,
    loading
  } = props;

  if (selectedCard == 'history') {
    return <History
      reference={reference}
      data={data}
      loading={loading}
    />;
  } else if (selectedCard == 'store') {
    return <Store
      reference={reference}
      fullData={fullData}
      petName={petName}
    />;
  } else if (selectedCard == 'stats') {
    return <Charts
      reference={reference}
      data={data}
      loading={loading}
    />;
  } else {
    return <Modalize ref={reference} modalHeight={400} />;
  }
}

export default Modal;