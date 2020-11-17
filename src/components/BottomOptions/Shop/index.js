import React from 'react';

import {
    FormDateContainer,
    FormTimeText,
    FormDayContainer,
    FormDayText
} from './styles';

const Shop = (props) => {
    const {
        hourValue,
        setHourValue,
        minValue,
        setMinValue
    } = props;

    return (
        <FormDateContainer>
            <FormTimeText
                value={hourValue}
                keyboardType={'numeric'}
                maxLength={2}
                onChangeText={(value) => setHourValue(value)}
            />
            <FormTimeText
                value={':'}
                editable={false}
            />
            <FormTimeText
                value={minValue}
                keyboardType={'numeric'}
                maxLength={2}
                onChangeText={(value) => setMinValue(value)}
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