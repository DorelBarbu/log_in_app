import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Provider>
        );
    }
}


export default App;