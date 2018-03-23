import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyATiJc4IfbHH-OoWmFd-RTRyTxPy87t0t8",
            authDomain: "log-in-app-6d1e5.firebaseapp.com",
            databaseURL: "https://log-in-app-6d1e5.firebaseio.com",
            projectId: "log-in-app-6d1e5",
            storageBucket: "log-in-app-6d1e5.appspot.com",
            messagingSenderId: "840042710478"
        };
        firebase.initializeApp(config);
    }

    render() {
        store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}


export default App;