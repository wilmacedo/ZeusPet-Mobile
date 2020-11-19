import React, { useState } from 'react';

import {
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Animated,
} from 'react-native';

import {
    HeaderContainer,
    HandlerContainer,
    Container,
    FormContainer,
    AddButtonBox,
    AddButtonContainer,
    AddButtonText
} from './styles';

import { colorScheme, springAnimation } from '~/utils';

import Date from './Date';
import Parameters from './Parameters';

import { AntDesign } from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const Shop = (props) => {
    const {
        reference,
        callback
    } = props;

    const [hourValue, setHourValue] = useState(moment().format('HH'));
    const [minValue, setMinValue] = useState(moment().format('m'));
    const [dayValue, setDayValue] = useState(moment().format('Do'));
    const [monthValue, setMonthValue] = useState(moment().format('MMMM'));

    const [width, setWidth] = useState(new Animated.Value(150));
    const [scale, setScale] = useState(new Animated.Value(1));

    const [textChange, setTextChange] = useState(false);

    const closeAnimation = () => {
        springAnimation(width, 80).start();
        springAnimation(scale, 0).start(() => {
            springAnimation(scale, 1).start();
            setTextChange(true);
        });
    }

    const openAnimation = () => {
        springAnimation(width, 150).start();
        springAnimation(scale, 0).start(() => {
            springAnimation(scale, 1).start();
            setTextChange(false);
        });
    }

    const renderHeader = () => {
        return (
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <HeaderContainer>
                    <HandlerContainer />
                </HeaderContainer>
            </TouchableWithoutFeedback>
        );
    }

    const renderContent = () => {
        return (
            <KeyboardAvoidingView
            >
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                >
                    <Container>
                        <FormContainer>
                            <Date
                                hourValue={hourValue}
                                setHourValue={setHourValue}
                                minValue={minValue}
                                setMinValue={setMinValue}
                                dayValue={dayValue}
                                setDayValue={setDayValue}
                                monthValue={monthValue}
                                setMonthValue={setMonthValue}
                            />
                            <Parameters />
                            <AddButtonContainer>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        textChange ? openAnimation() : closeAnimation();
                                    }}
                                >
                                    <Animated.View
                                        style={[AddButtonBox, { width }]}
                                    >
                                        <Animated.View
                                            style={{
                                                transform: [{
                                                    scaleX: scale
                                                }, {
                                                    scaleY: scale
                                                }]
                                            }}
                                        >
                                            {!textChange ? <AddButtonText>
                                                Adicionar
                        </AddButtonText> :
                                                <AntDesign
                                                    name="check"
                                                    size={24}
                                                    color={colorScheme.background}
                                                />
                                            }
                                        </Animated.View>
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                            </AddButtonContainer>
                        </FormContainer>
                    </Container>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

    return (
        <BottomSheet
            ref={reference}
            snapPoints={[450, 0]}
            initialSnap={1}
            renderContent={renderContent}
            renderHeader={renderHeader}
            enabledContentGestureInteraction={false}
            callbackNode={callback}
        />
    );
}

export default Shop;