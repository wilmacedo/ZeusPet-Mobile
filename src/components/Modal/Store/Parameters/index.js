import React from 'react';

import {
  FormValueContainer,
  FormValueBox,
  FormValueText,
  IconContainer,
  FormMoneySymbol
} from './styles';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { colorSchema } from '~/utils';

const Stats = (props) => {
  const {
    setTitle,
    setValue,
    emptyParam,
    setEmptyParam
  } = props;

  return (
    <FormValueContainer>
      <FormValueBox
        style={{
          borderColor: emptyParam.title ? colorSchema.unselected : colorSchema.error
        }}
      >
        <IconContainer>
          <MaterialCommunityIcons
            name="subtitles-outline"
            size={30}
            color={emptyParam.title ? 'black' : colorSchema.error}
          />
        </IconContainer>
        <FormValueText
          placeholder={'Ração'}
          maxLength={12}
          onChangeText={(text) => setTitle(text)}
        />
      </FormValueBox>
      <FormValueBox
        style={{
          borderColor: emptyParam.value ? colorSchema.unselected : colorSchema.error
        }}
      >
        <IconContainer>
          <FontAwesome5
            name="money-bill-alt"
            size={26}
            color={emptyParam.value ? 'black' : colorSchema.error}
          />
        </IconContainer>
        <FormMoneySymbol>R$</FormMoneySymbol>
        <FormValueText
          placeholder={'30,00'}
          keyboardType={'decimal-pad'}
          maxLength={8}
          onChangeText={(value) => setValue(value)}
        />
      </FormValueBox>
    </FormValueContainer>
  );
}

export default Stats;