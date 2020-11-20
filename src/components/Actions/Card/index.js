import React, { useState, useEffect } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { CardContainer } from './styles';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { colorSchema } from '~/utils';

const Card = (props) => {
  const {
    selectedCard,
    name,
    iconType,
    margin
  } = props;

  const [borderColor, setBorderColor] = useState(colorSchema.unselected);
  const [backgroundColor, setBackgroundColor] = useState(colorSchema.background);
  const [iconColor, setIconColor] = useState(colorSchema.black);

  useEffect(() => {
    if (selectedCard == name) {
      setBorderColor(colorSchema.black);
      setBackgroundColor(colorSchema.black);
      setIconColor(colorSchema.background);
    } else {
      setBorderColor(colorSchema.unselected);
      setBackgroundColor(colorSchema.background);
      setIconColor(colorSchema.black);
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