import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigation from './src/routes';

const loadFonts = () => Font.loadAsync({
  'light': require('./assets/fonts/light.ttf'),
  'regular': require('./assets/fonts/regular.ttf'),
  'bold': require('./assets/fonts/bold.ttf'),
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  } else {
    return (
      <Navigation />
    );
  }

}