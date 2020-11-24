import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';

import { LoadingView, modalStyle } from './styles';

import Item from './Item';
import Search from './Search';

import { getAllItems } from '~/services';
import { Modalize } from 'react-native-modalize';

const History = (props) => {
  const { reference } = props;
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState();
  const [loading, setLoading] = useState(false);

  if (!loading) {
    getAllItems(setData, setLoading);
  }

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

  return !loading ?
    <Modalize
      ref={reference}
      snapPoint={450}
      handlePosition={'inside'}
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        scrollEnabled: false
      }}
    >
      <LoadingView>
        <ActivityIndicator size="large" color="black" />
      </LoadingView>
    </Modalize>
    :
    <Modalize
      ref={reference}
      snapPoint={450}
      handlePosition={'inside'}
      HeaderComponent={
        <Search
          data={data}
          setData={setData}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      }
      modalStyle={modalStyle}
      flatListProps={{
        data: searchData || data,
        renderItem: renderItem,
        keyExtractor: item => item.id,
        contentContainerStyle: { alignItems: 'center' },
        showsVerticalScrollIndicator: false
      }}
    />;
}

export default History;