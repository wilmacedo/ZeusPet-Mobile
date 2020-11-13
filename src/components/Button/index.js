import React, { useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { ButtonContainer } from './styles';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { colorScheme } from '../../utils';

const Button = (props) => {
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

  const Icon = () => {
    if (props.iconType == 'stats') {
      return <Ionicons name='md-stats' size={28} color={iconColor} />;
    } else {
      return <MaterialCommunityIcons name="shopping" size={28} color={iconColor} />;
    }
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={changeColor}
      onPressOut={changeColor}
    >
      <ButtonContainer
        style={{
          borderColor,
          backgroundColor,
          marginRight: props.margin
        }}
      >
        <Icon />
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
}

export default Button;