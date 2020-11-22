import React from 'react';

import {
  Container,
  TitleThin,
  TitleBold,
  TextContainer,
  SearchContainer,
  IconContainer,
  Text
} from './styles';

import { Feather } from '@expo/vector-icons';

const Search = (props) => {
  const {
    data,
    setData,
    setSearchData
  } = props;

  const filterItems = (value) => {
    const textData = value.toLowerCase();
    
    const filteredItems = data.filter(item => item.title.toLowerCase().includes(textData));

    setSearchData(filteredItems);
  }

  return (
    <Container>
      <TextContainer>
        <TitleThin>
          Ache suas
      </TitleThin>
        <TitleBold>
          Compras
      </TitleBold>
      </TextContainer>
      <SearchContainer>
        <IconContainer>
          <Feather name="search" size={22} color="black" />
        </IconContainer>
        <Text
          placeholder={'Procure pelo item'}
          onChangeText={text => filterItems(text)}
        />
      </SearchContainer>
    </Container>
  );
}

export default Search;