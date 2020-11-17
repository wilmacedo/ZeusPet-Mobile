import React from 'react';

import { 
    FormDateContainer,
    FormTimeText,
    FormDayContainer,
    FormDayText
 } from './styles';

import moment from 'moment';

const Shop = () => {
    const hourValue = moment().format('h');
    const minValue = moment().format('m');

    return (
        <FormDateContainer>
            <FormTimeText
                value={hourValue}
                keyboardType={'numeric'}
                maxLength={2}
            />
            <FormTimeText
                value={':'}
                editable={false}
            />
            <FormTimeText
                value={minValue}
                keyboardType={'numeric'}
                maxLength={2}
            />
            <FormDayContainer>
                <FormDayText
                    style={{
                        fontSize: 25
                    }}
                    value={'30'}
                    maxLength={2}
                    keyboardType={'numeric'}
                />
                <FormDayText
                    value={'Abril'}
                />
            </FormDayContainer>
        </FormDateContainer>
    );
}

export default Shop;