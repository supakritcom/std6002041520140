import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

let style = {
    input: {
        fontSize: 18, 
        borderBottomColor: "#CCC", 
        borderBottomWidth: 2,
        marginBottom: 20
    }
}

export default class Login extends React.Component {
    static navigationOptions = {
        title: "Login",
        headerStyle: {
            backgroundColor: "#F39C12",
        },
        headerTintColor: "#FFF",
    };
    
    constructor() {
        super();

        this.state = {
            email: "",
            password: "" 
        };
    }

    async componentDidMount() {
        try {
            if (await AsyncStorage.getItem("login_token") !== null) {
                this.props.navigation.navigate("Me");
            }
        } catch (error) {
            console.error(error);
        }
    }

    goLogin() {
        axios.post("http://128.199.240.120:9999/api/auth/login", {
            email: this.state.email,
            password: this.state.password
        }).then(async function (response) {
            // alert("Logined !");

            console.log(response.data.data.token);
            try {
                await AsyncStorage.setItem("login_token", response.data.data.token);
            } catch (error) {
                alert("Save token error !");

                return;
            }

            this.props.navigation.navigate("Me");
        }.bind(this))
        .catch(function (error) {
            alert("Login fail !");

            console.log(error);
        });
    }

    render() {
        return (
            <View style={{ paddingTop: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 28, color: "#F39C12" }}>Login Form</Text>
                <View style={{ padding: 20 }}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        style={style.input}
                    />

                    <TextInput
                        placeholder="Password"
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        style={style.input}
                        secureTextEntry
                    />

                    <Button title="Login" onPress={this.goLogin.bind(this)} />
                </View>
            </View>
        );
    }
}