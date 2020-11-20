import React, { useState } from 'react';
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  TouchableWithoutFeedback 
} from 'react-native';

import { 
  Container,
  OptionContainer,
  OptionText,
  ItemsContainer
} from './styles';

import { colorSchema } from '~/utils';

import Item from './Item';

const Stats = () => {
  const [selectedOption, setSelectedOption] = useState('hist');

  const setSelectedColor = (selectedValue) => {
    return selectedOption == selectedValue ? colorSchema.black : colorSchema.fontLight;
  }

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <Container>
          <>
            <OptionContainer>
              <TouchableOpacity
                onPress={() => {
                  if (selectedOption != 'hist') setSelectedOption('hist');
                }}
              >
                <OptionText
                  style={{
                    color: setSelectedColor('hist')
                  }}
                >
                  Histórico
                </OptionText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (selectedOption != 'info') setSelectedOption('info');
                }}
              >
                <OptionText
                  style={{
                    color: setSelectedColor('info')
                  }}
                >
                  Informações
                </OptionText>
              </TouchableOpacity>
            </OptionContainer>
            <ItemsContainer>
              <Item 
                title='Chucalho'
                date='15:42 - 23, novembro'
                value={30.0}
              />
            </ItemsContainer>
          </>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Stats;