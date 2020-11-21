import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
} from 'react-native';

import {
  LoadingView
} from './styles';

import Item from './Item';
import { getAllItems } from '~/services';

import { Modalize } from 'react-native-modalize';

const History = (props) => {
  const reference = props.reference;

  const [selectedOption, setSelectedOption] = useState('hist');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      getAllItems(setData, setLoading);
    }
  });

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

  return (!loading ?
    <Modalize
      ref={reference}
      snapPoint={400}
      modalHeight={400}
    >
      <LoadingView>
        <ActivityIndicator size="large" color="black" />
      </LoadingView>
    </Modalize>
    :
    <Modalize
      ref={reference}
      snapPoint={400}
      modalHeight={400}
      flatListProps={{
        data: data,
        renderItem: renderItem,
        keyExtractor: item => item.id,
        contentContainerStyle: { alignItems: 'center' }
      }}
    />
  );
}

export default History;