/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

// import dependencies
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => {
  return <Header />;
};

// Display the component
AppRegistry.registerComponent('albums', () => App);
