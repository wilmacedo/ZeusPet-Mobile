import React from 'react';

import Shop from './Shop';

const BottomOptions = (props) => {
  const { 
    reference,
    callback,
    selectedCard
  } = props;

  return <Shop 
      reference={reference}
      callback={callback}
      />
}

export default BottomOptions;