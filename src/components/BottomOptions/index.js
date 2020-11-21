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
import Stats from './Stats';

import BottomSheet from 'reanimated-bottom-sheet';

const BottomOptions = (props) => {
  const { 
    reference,
    callback,
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

  const renderContent = () => {
    if (selectedCard == 'store') {
      return <Store />;
    } else if (selectedCard == 'stats') {
      return <Stats />
    } else {
      return <Container />
    }
  }

  return (
    <BottomSheet 
      ref={reference}
      snapPoints={[450, 0]}
      initialSnap={1}
      renderHeader={renderHeader}
      renderContent={renderContent}
      // enabledContentGestureInteraction={false}
      callbackNode={callback}
    />
  );
}

export default BottomOptions;