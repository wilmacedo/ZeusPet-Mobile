import React from 'react';

import { ChartBar } from './styles';

const Bar = (props) => {
  const {
    style
  } = props;
  return <ChartBar 
    style={style}
  />;
}

export default Bar;