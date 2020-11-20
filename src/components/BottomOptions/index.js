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

import Shop from './Shop';

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
      return <Shop />;
    } else if (selectedCard == 'stats') {
      return <Container />
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
      enabledContentGestureInteraction={false}
      callbackNode={callback}
    />
  );
}

export default BottomOptions;