import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAUgKa1ZaN4UkUe6nispeV8duyQMNLyKEw',
      authDomain: 'manager-d8c4d.firebaseapp.com',
      databaseURL: 'https://manager-d8c4d.firebaseio.com',
      projectId: 'manager-d8c4d',
      storageBucket: 'manager-d8c4d.appspot.com',
      messagingSenderId: '729143999579',
      appId: '1:729143999579:web:4486725bc40e5c996dd37e',
      measurementId: 'G-WK70ZCDWGS',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
