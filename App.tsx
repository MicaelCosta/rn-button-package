/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from './src';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}>
      <Button title="Button" onPress={() => {}} />
      <Button title="Button" onPress={() => {}} disabled />
    </View>
  );
}

export default App;
