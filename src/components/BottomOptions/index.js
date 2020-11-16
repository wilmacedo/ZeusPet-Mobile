import React, { useState } from 'react';

import {
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import {
  HeaderContainer,
  HandlerContainer,
  Container,
  FormContainer,
  FormDateContainer,
  FormHourText,
  FormDayText,
  FormDayContainer,
  FormValueContainer,
  FormValueBox,
  IconContainer,
  FormValueText
} from './styles';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet';

const BottomOptions = (props) => {
  const [hourValue, setHourValue] = useState('07');
  const [minValue, setMinValue] = useState('30');

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
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <Container>
          <FormContainer>
            <FormDateContainer>
              <FormHourText
                value={hourValue}
                keyboardType={'number-pad'}
                maxLength={2}
              />
              <FormHourText
                value={':'}
                editable={false}
              />
              <FormHourText
                value={minValue}
                keyboardType={'number-pad'}
                maxLength={2}
              />
              <FormDayContainer>
                <FormDayText
                  style={{
                    fontSize: 25
                  }}
                  value={'30'}
                  maxLength={2}
                />
                <FormDayText
                  value={'Abril'}
                />
              </FormDayContainer>
            </FormDateContainer>
            <FormValueContainer>
              <FormValueBox>
                <IconContainer>
                  <MaterialCommunityIcons
                    name="subtitles-outline"
                    size={30}
                    color="black"
                  />
                </IconContainer>
                <FormValueText
                  placeholder={'Ração'}
                />
              </FormValueBox>
              <FormValueBox>
                <IconContainer>
                  <FontAwesome5
                    name="money-bill-alt"
                    size={26}
                    color="black"
                  />
                </IconContainer>
                <FormValueText
                  placeholder={'R$30,00'}
                />
              </FormValueBox>
            </FormValueContainer>
          </FormContainer>
        </Container>
      </TouchableWithoutFeedback>
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