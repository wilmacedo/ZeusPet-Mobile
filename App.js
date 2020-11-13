import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigation from './src/routes';

const fetchFonts = async () => {
  return await Font.loadAsync({
    light: require('./assets/fonts/light.ttf'),
    regular: require('./assets/fonts/regular.ttf'),
    bold: require('./assets/fonts/bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <>
      <Navigation />
    </>
  );
}