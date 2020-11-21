import React, { useRef } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Modalize } from 'react-native-modalize';

const Teste = () => {
  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const data = [
    {
      title: 'teste',
      value: '31',
      date: 'teste',
    },
    {
      title: 'teste',
      value: '32',
      date: 'teste',
    },
    {
      title: 'teste',
      value: '33',
      date: 'teste',
    },
    {
      title: 'teste',
      value: '34',
      date: 'teste',
    },
    {
      title: 'teste',
      value: '35',
      date: 'teste',
    },
    {
      title: 'teste',
      value: '36',
      date: 'teste',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{
      height: 80,
      width: 150,
      backgroundColor: 'gray',
    }}>
      <Text>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text>{item.value}</Text>
    </View>
  );

  return (
    <>
      <TouchableOpacity
        onPress={onOpen}
      >
        <Text style={{ padding: 50, fontSize: 40 }}>ABRIR MODAL</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        snapPoint={400}
        modalHeight={400}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.value}
          renderItem={renderItem}
        />
      </Modalize>
    </>
  );
}

export default Teste;