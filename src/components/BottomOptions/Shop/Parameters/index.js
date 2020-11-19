import React from 'react';

import {
  FormValueContainer,
  FormValueBox,
  FormValueText,
  IconContainer,
  FormMoneySymbol
} from './styles';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const Stats = () => {
  return (
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
        <FormMoneySymbol>R$</FormMoneySymbol>
        <FormValueText
          placeholder={'30,00'}
          keyboardType={'decimal-pad'}
        />
      </FormValueBox>
    </FormValueContainer>
  );
}

export default Stats;