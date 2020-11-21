import React from 'react';

import {
    FormDateContainer,
    FormTimeText,
    FormDayContainer,
    FormDayText
} from './styles';

const Date = (props) => {
    const {
        hourValue,
        setHourValue,
        minValue,
        setMinValue,
        dayValue,
        setDayValue,
        monthValue
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
                    value={dayValue}
                    maxLength={2}
                    keyboardType={'numeric'}
                    onChangeText={(value) => setDayValue(value)}
                />
                <FormDayText
                    value={monthValue}
                />
            </FormDayContainer>
        </FormDateContainer>
    );
}

export default Date;