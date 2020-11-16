import React from 'react';

import {
  HeaderContainer,
  HandlerContainer,
  Container,
} from './styles';

import BottomSheet from 'reanimated-bottom-sheet';

const BottomOptions = (props) => {
  const {
    reference,
    callback
  } = props;

  const renderHeader = () => {
    return (
      <HeaderContainer>
        <HandlerContainer />
      </HeaderContainer>
    );
  }

  const renderContent = () => {
    return (
      <Container />
    );
  }

  return (
    <BottomSheet
      ref={reference}
      snapPoints={[450, 0]}
      initialSnap={1}
      renderContent={renderContent}
      renderHeader={renderHeader}
      enabledContentGestureInteraction={false}
      callbackNode={callback}
    />
  );
}

export default BottomOptions;