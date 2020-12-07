import React, { useState } from 'react';

import {
  TouchableWithoutFeedback,
  Animated,
  ActivityIndicator
} from 'react-native';

import {
  FormContainer,
  AddButtonBox,
  AddButtonContainer,
  AddButtonText
} from './styles';

import { colorSchema, springAnimation } from '~/utils';
import { sendNewData } from '~/services';

import Date from './Date';
import Parameters from './Parameters';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { Modalize } from 'react-native-modalize';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

const Store = (props) => {
  const {
    reference,
    fullData,
    petName
  } = props;
  const [date, setDate] = useState(moment());
  const [title, setTitle] = useState();
  const [value, setValue] = useState();

  const [width, setWidth] = useState(new Animated.Value(150));
  const [scale, setScale] = useState(new Animated.Value(1));

  const [textChange, setTextChange] = useState(false);
  const [fetchData, setFetchData] = useState(false);
  const [emptyParam, setEmptyParam] = useState({ title: true, value: true });

  const closeAnimation = () => {
    springAnimation(width, 80).start();
    springAnimation(scale, 0).start(() => {
      springAnimation(scale, 1).start();
      setTextChange(true);
      setFetchData(false);
    });
  }

  const renderContentButton = () => {
    if (!fetchData) {
      if (!textChange) {
        return <AddButtonText>Adicionar</AddButtonText>
      } else {
        return <AntDesign
          name="check"
          size={24}
          color={colorSchema.background}
        />
      }
    } else if (fetchData === 'error') {
      return <MaterialIcons
        name="error-outline"
        size={24}
        color={colorSchema.background}
      />
    } else {
      return <ActivityIndicator
        size='small'
        color={colorSchema.background} />
    }
  }

  const sendData = () => {

    setEmptyParam({
      title: title,
      value: value,
    });

    if (title && value) {
      let formattedTitle = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
      let formattedValue = value.replace('.', '').replace(',', '.');

      sendNewData(fullData, petName, {
        'title': formattedTitle,
        'value': formattedValue,
        'date': date
      }, setFetchData, closeAnimation);
    }
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
        <Date />
        <Parameters
          setTitle={setTitle}
          setValue={setValue}
          emptyParam={emptyParam}
          setEmptyParam={setEmptyParam}
        />
        <AddButtonContainer>
          <TouchableWithoutFeedback
            onPress={() => !textChange ? sendData() : closeAnimation()}
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
                {renderContentButton()}
              </Animated.View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </AddButtonContainer>
      </FormContainer>
    </Modalize>
  );
}

export default Store;