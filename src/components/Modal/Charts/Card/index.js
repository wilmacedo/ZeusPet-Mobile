import React from 'react';

import {
  Container,
  IconContainer,
  ContentContainer,
  SubText,
  ValueText,
  DescriptionText
} from './styles';

const Card = (props) => {
  const {
    icon,
    sub,
    value,
    description
  } = props;

  return (
    <Container>
      <IconContainer>
        {icon}
      </IconContainer>
      <ContentContainer>
        <SubText>{sub}</SubText>
        <ValueText>{value}</ValueText>
      </ContentContainer>
      <DescriptionText>{description}</DescriptionText>
    </Container>
  );
}

export default Card;