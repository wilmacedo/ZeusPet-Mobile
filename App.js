import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigation from './src/routes';

const fetchFonts = () => {
  return Font.loadAsync({
    'light': require('./assets/fonts/light.otf'),
    'regular': require('./assets/fonts/regular.otf'),
    'bold': require('./assets/fonts/bold.otf')
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