import React, { useState, useEffect } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { CardContainer } from './styles';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { colorScheme } from '~/utils';

const Card = (props) => {
  const {
    selectedCard,
    name,
    iconType,
    margin
  } = props;

  const [borderColor, setBorderColor] = useState(colorScheme.unselected);
  const [backgroundColor, setBackgroundColor] = useState(colorScheme.background);
  const [iconColor, setIconColor] = useState(colorScheme.black);

  useEffect(() => {
    if (selectedCard == name) {
      setBorderColor(colorScheme.black);
      setBackgroundColor(colorScheme.black);
      setIconColor(colorScheme.background);
    } else {
      setBorderColor(colorScheme.unselected);
      setBackgroundColor(colorScheme.background);
      setIconColor(colorScheme.black);
    }
  });

  const Icon = () => {
    if (iconType == 'stats') {
      return <Ionicons name='md-stats' size={28} color={iconColor} />;
    } else {
      return <MaterialCommunityIcons name="shopping" size={28} color={iconColor} />;
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.onPress();
      }}
    >
      <CardContainer
        style={{
          borderColor,
          backgroundColor,
          marginRight: margin
        }}
      >
        <Icon />
      </CardContainer>
    </TouchableWithoutFeedback>
  );
}

export default Card;