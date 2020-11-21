import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import { LoadingView } from './styles';

import Item from './Item';

import { getAllItems } from '~/services';

const History = () => {
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

  const loadingProp = {
    children: <LoadingView>
      <ActivityIndicator size="large" color="black" />
    </LoadingView>
  };

  const historyProp = {
    flatListProps: {
      data: data,
      renderItem: renderItem,
      keyExtractor: item => item.id,
      contentContainerStyle: { alignItems: 'center' }
    }
  }

  return !loading ? loadingProp : historyProp;
}

export default History;