import { Animated } from "react-native";

export const colorSchema = {
  background: '#fff',
  black: '#000000',
  unselected: '#e8e8e8',
  fontLight: '#a7a7a7',
  backgroundLight: '#f2f2f2',
  historyBackground: '#f6f7fb',
  money: '#00cc00',
  error: '#b30000'
};

export const springAnimation = (animatedValue, toValue, delay) => {
  return Animated.spring(animatedValue, {
    toValue,
    useNativeDriver: false,
    delay: delay || 0
  });
}

export const timingAnimation = (animatedValue, toValue, timing) => {
  return Animated.timing(animatedValue, {
    toValue,
    timing
  });
}