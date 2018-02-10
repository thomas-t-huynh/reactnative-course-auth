import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/commons';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAi5TUcfjihKxDv3ZZ0WXdN0Q2ezfPYPt4",
            authDomain: "authentication-ace25.firebaseapp.com",
            databaseURL: "https://authentication-ace25.firebaseio.com",
            projectId: "authentication-ace25",
            storageBucket: "authentication-ace25.appspot.com",
            messagingSenderId: "203591062667"
        })
    }

    render() {
        return (
            <View>
                <Header headerText='authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App;