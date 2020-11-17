import React, { useState } from 'react';

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';

import {
  HeaderContainer,
  HandlerContainer,
  Container,
  FormContainer,
  AddButtonBox,
  AddButtonContainer,
  AddButtonText
} from './styles';

import Shop from './Shop';
import Stats from './Stats';

import BottomSheet from 'reanimated-bottom-sheet';

const BottomOptions = (props) => {
  const {
    reference,
    callback
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
    return (
      <KeyboardAvoidingView
      >
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
        >
          <Container>
            <FormContainer>
              <Shop />
              <Stats />
              <AddButtonContainer>
                <AddButtonBox>
                  <AddButtonText>
                    Adicionar
                  </AddButtonText>
                </AddButtonBox>
              </AddButtonContainer>
            </FormContainer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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