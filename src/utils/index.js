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

const credentials = {
  username: 'Will',
  password: 'teste'
}

export const petImages = [
  {
    index: 0,
    name: 'Zeus',
    image: require('../../assets/Zeus.png')
  },
  {
    index: 1,
    name: 'Cat',
    image: require('../../assets/Cat.png'),
    style: { transform: [{ scale: 0.8 }] }
  }
];

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

export const formatToMoney = (number) => {
  let maxDecimal = 2, decSeparator = ',', thoSeperator = '.';
  let sign = number < 0 ? '-' : '';
  var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(maxDecimal)));
  var j = (j = i.length) > 3 ? j % 3 : 0;

  return sign +
    (j ? i.substr(0, j) + thoSeperator : '') +
    i.substr(j).replace(/(\decSeparator{3})(?=\decSeparator)/g, "$1" + thoSeperator) +
    (maxDecimal ? decSeparator + Math.abs(number - i).toFixed(maxDecimal).slice(2) : '');
}

export const auth = (username, password) => {
  return (username === credentials.username && password === credentials.password);
}