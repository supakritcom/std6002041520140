/*
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
*/
// import Card from './Card';
import Login from './Login';
import Me from './Me.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';


/*
export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header name="อัลบั้ม" />
                <View style={{ marginTop: 20 }}>
                    <Card />
                </View>
            </View>
        );
    }
}                     
*/

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Me: Me
    }, {
        // initialRouteName: "Login"
        initialRouteName: "Me"
    }
);

export default createAppContainer(AppNavigator);