import React, { useState, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';

import { LoadingView, modalStyle } from './styles';

import { isEmpty } from '~/services';

import Item from './Item';
import Search from './Search';

import { Modalize } from 'react-native-modalize';
import moment from 'moment';

const History = (props) => {
  const {
    reference,
    data,
    loading
  } = props;
  const [searchData, setSearchData] = useState();

  const emptyData = [{
    title: 'Nada por aqui',
    value: 0,
    date: moment()
  }];

  const renderLoader = () => {
    <LoadingView>
      <ActivityIndicator size="large" color="black" />
    </LoadingView>
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
      {renderLoader()}
    </Modalize>
    :
    <Modalize
      ref={reference}
      snapPoint={450}
      handlePosition={'inside'}
      HeaderComponent={
        <Search
          data={data}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      }
      modalStyle={modalStyle}
      flatListProps={{
        data: !isEmpty(data) ? searchData || data.reverse() : emptyData,
        renderItem: ({ item }) => {
          return (
            <Item
              title={item.title}
              date={item.date}
              value={item.value}
            />
          );
        },
        keyExtractor: item => item._id,
        contentContainerStyle: { alignItems: 'center' },
        showsVerticalScrollIndicator: false
      }}
    />;
}

export default History;