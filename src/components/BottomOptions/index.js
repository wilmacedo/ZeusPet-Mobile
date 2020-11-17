import React, { useState } from 'react';

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Animated,
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

import { springAnimation } from '../../utils';

import Shop from './Shop';
import Stats from './Stats';

import BottomSheet from 'reanimated-bottom-sheet';
import moment from 'moment';
import { spring } from 'react-native-reanimated';

const BottomOptions = (props) => {
  const {
    reference,
    callback
  } = props;

  const [hourValue, setHourValue] = useState(moment().format('h'));
  const [minValue, setMinValue] = useState(moment().format('m'));

  const [width, setWidth] = useState(new Animated.Value(150));
  const [opacity, setOpacity] = useState(new Animated.Value(20));
  const [addButtonValue, setAddButtonValue] = useState('Adicionar');

  const [test, setTest] = useState(false);

  const closeAnimation = () => {
    springAnimation(width, 80).start();
    springAnimation(opacity, 0).start(() => {
      setAddButtonValue('OK');
      springAnimation(opacity, 1).start(() => setTest(true));
    });
  }

  const openAnimation = () => {
    springAnimation(width, 150).start();
    springAnimation(opacity, 0).start(() => {
      setAddButtonValue('Adicionar');
      springAnimation(opacity, 1).start(() => setTest(false));
    })
  }

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
              <Shop
                hourValue={hourValue}
                setHourValue={setHourValue}
                minValue={minValue}
                setMinValue={setMinValue}
              />
              <Stats />
              <AddButtonContainer>
                <TouchableWithoutFeedback
                  onPress={() => {
                    test ? openAnimation() : closeAnimation();
                  }}
                >
                  <Animated.View
                    style={[AddButtonBox, { width }]}
                  >
                    <Animated.Text
                      style={[AddButtonText, { opacity }]}
                    >
                      {addButtonValue}
                    </Animated.Text>
                  </Animated.View>
                </TouchableWithoutFeedback>
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