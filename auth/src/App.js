import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB9HHs_4uG0MXAAqmlENwaXZp6S-u3OT78',
      authDomain: 'auth-328ef.firebaseapp.com',
      databaseURL: 'https://auth-328ef.firebaseio.com',
      projectId: 'auth-328ef',
      storageBucket: 'auth-328ef.appspot.com',
      messagingSenderId: '1084205224997',
      appId: '1:1084205224997:web:889c91acca1fcc5ad7dbcc',
      measurementId: 'G-8RQ2JT5NYL',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
