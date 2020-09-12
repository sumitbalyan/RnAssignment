import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

test('Contact renders correctly', () => {
  const render = renderer.create(<App />).toJSON();
  expect(render).toMatchSnapshot();
});
