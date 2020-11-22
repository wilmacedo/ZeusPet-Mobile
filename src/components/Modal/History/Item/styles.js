import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { colorSchema } from '~/utils';

const width = Dimensions.get('window').width - 120;

export const Container = styled.View`
    height: 80px;
    width: ${width}px;
    background-color: ${colorSchema.background};
    border-radius: 20px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    font-family: 'regular';
    color: ${colorSchema.black};
    padding: 16px;
    font-size: 17px;
`;

export const DateContainer = styled.View`
    flex-direction: row;
    margin-left: 16px;
`;

export const Date = styled.Text`
    font-family: 'regular';
    color: ${colorSchema.fontLight};
    margin-left: 5px;
    margin-top: 1px;
`;

export const Value = styled.Text`
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
    color: ${colorSchema.money};
    font-family: 'bold';
`;
