import React from 'react';

import {
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import {
  HeaderContainer,
  HandlerContainer,
  Container
} from './styles';

import Store from './Store';
import History from './History';

import { Modalize } from 'react-native-modalize';

const BottomOptions = (props) => {
  const {
    reference,
    selectedCard
  } = props;

  const renderHeader = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <HeaderContainer>
          <HandlerContainer />
        </HeaderContainer>
      </TouchableWithoutFeedback>
    );
  }

  const renderBottomSheet = () => {
    if (selectedCard == 'store') {
      return (
        <Modalize
          ref={reference}
          snapPoint={400}
          modalHeight={400}
        >
          <Store />
        </Modalize>
      );
    } else if (selectedCard == 'history') {
      return (
        <History reference={reference} />
      );
    } else {
      return (
        <Modalize
          ref={reference}
          snapPoint={400}
          modalHeight={400}
        />
      );
    }
  }

  return renderBottomSheet();
}

export default BottomOptions;