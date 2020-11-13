import React, { useState, Component } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { ButtonContainer } from './styles';

import { Ionicons } from '@expo/vector-icons';

import { colorScheme } from '../../utils';

const Button = () => {
  const [borderColor, setBorderColor] = useState(colorScheme.unselected);
  const [backgroundColor, setBackgroundColor] = useState(colorScheme.background);
  const [iconColor, setIconColor] = useState(colorScheme.black);

  const changeColor = () => {
    if (borderColor === colorScheme.unselected) {
      setBorderColor(colorScheme.black);
      setBackgroundColor(colorScheme.black);
      setIconColor(colorScheme.background);
    } else {
      setBorderColor(colorScheme.unselected);
      setBackgroundColor(colorScheme.background);
      setIconColor(colorScheme.black);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={changeColor}
      onPressOut={changeColor}
    >
      <ButtonContainer
        style={{ borderColor, backgroundColor }}
      >
        <Ionicons name="md-stats" size={28} color={iconColor} />
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
}

export default Button;