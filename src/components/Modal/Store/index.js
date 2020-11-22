import React, { useState } from 'react';

import {
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import {
  FormContainer,
  AddButtonBox,
  AddButtonContainer,
  AddButtonText
} from './styles';

import { colorSchema, springAnimation } from '~/utils';

import Date from './Date';
import Parameters from './Parameters';

import { AntDesign } from '@expo/vector-icons';

import { Modalize } from 'react-native-modalize';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const Store = (props) => {
  const { reference } = props;
  const [hourValue, setHourValue] = useState(moment().format('HH'));
  const [minValue, setMinValue] = useState(moment().format('m'));
  const [dayValue, setDayValue] = useState(moment().format('Do'));
  const [monthValue, setMonthValue] = useState(moment().format('MMMM'));

  const [width, setWidth] = useState(new Animated.Value(150));
  const [scale, setScale] = useState(new Animated.Value(1));

  const [textChange, setTextChange] = useState(false);

  const closeAnimation = () => {
    springAnimation(width, 80).start();
    springAnimation(scale, 0).start(() => {
      springAnimation(scale, 1).start();
      setTextChange(true);
    });
  }

  const openAnimation = () => {
    springAnimation(width, 150).start();
    springAnimation(scale, 0).start(() => {
      springAnimation(scale, 1).start();
      setTextChange(false);
    });
  }

  return (
    <Modalize
      ref={reference}
      modalHeight={400}
      handlePosition={'inside'}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        keyboardDismissMode: 'on-drag'
      }}
    >
      <FormContainer>
        <Date
          hourValue={hourValue}
          setHourValue={setHourValue}
          minValue={minValue}
          setMinValue={setMinValue}
          dayValue={dayValue}
          setDayValue={setDayValue}
          monthValue={monthValue}
          setMonthValue={setMonthValue}
        />
        <Parameters />
        <AddButtonContainer>
          <TouchableWithoutFeedback
            onPress={() => {
              textChange ? openAnimation() : closeAnimation();
            }}
          >
            <Animated.View
              style={[AddButtonBox, { width }]}
            >
              <Animated.View
                style={{
                  transform: [{
                    scaleX: scale
                  }, {
                    scaleY: scale
                  }]
                }}
              >
                {!textChange ? <AddButtonText>
                  Adicionar
                    </AddButtonText> :
                  <AntDesign
                    name="check"
                    size={24}
                    color={colorSchema.background}
                  />
                }
              </Animated.View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </AddButtonContainer>
      </FormContainer>
    </Modalize>
  );
}

export default Store;