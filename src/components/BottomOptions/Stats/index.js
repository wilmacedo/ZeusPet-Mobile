import React, { useEffect, useState } from 'react';
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { 
  Container,
  OptionContainer,
  OptionText,
  ItemList
} from './styles';

import { colorSchema } from '~/utils';

import Item from './Item';
import { getAllItems } from '~/services';

const Stats = () => {
  const [selectedOption, setSelectedOption] = useState('hist');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const setSelectedColor = (selectedValue) => {
    return selectedOption == selectedValue ? colorSchema.black : colorSchema.fontLight;
  }

  useEffect(() => {
    if (!loading) {
      getAllItems(setData);
      setLoading(true);
    }
  });

  console.log(data);

  const renderItem = ({ item }) => {
    const {
      title,
      date,
      value
    } = item;

    return (
      <Item
        title={title}
        date={date}
        value={value}
      />
    );
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
            <ItemList
              keyExtractor={item => item.id}
              data={data}
              renderItem={renderItem}
              contentContainerStyle={{alignItems: 'center'}}
              // refreshing={refresh}
              // onRefresh={getAllItems(setData, refresh, setRefresh)}
            />
          </>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Stats;