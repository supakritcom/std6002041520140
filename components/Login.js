import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Login extends React.Component {
    static navigationOptions = {
        title: "Login",
        headerStyle: {
            backgroundColor: "#F39C12",
        },
        headerTintColor: "#FFF",
        headerLeft: null,
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
            // console.error(error);
        }
    }

    goLogin() {
        axios.post("http://128.199.240.120:9999/api/auth/login", {
            email: this.state.email,
            password: this.state.password
        }).then(async function (response) {
            // alert("Logined !");

            // console.log(response.data.data.token);
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

            // console.log(error);
        });
    }

    render() {
        return (
            <View style={{ paddingTop: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 28, color: "#F39C12" }}>Login Form</Text>
                <View style={{ 
                    margin: 20, 
                    /*
                    borderWidth: 1,
                    borderColor: "#CCC",
                    backgroundColor: "#FFF",
                    */
                    backgroundColor: "#FFF",
                    borderRadius: 6,
                    elevation: 4
                }}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        style={{
                            fontSize: 18,
                            marginLeft: 6
                        }}
                    />
                    
                    <View style={{
                        backgroundColor: "#F0F3F4",
                        height: 1
                    }}></View>

                    <TextInput
                        placeholder="Password"
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        style={{
                            fontSize: 18,
                            marginLeft: 6
                        }}
                        secureTextEntry
                    />

                    {/*<Button 
                        title="Login" 
                        onPress={this.goLogin.bind(this)} 
                        style={{
                            borderRadius: 0,
                            elevation: 0
                        }}
                    />*/}

                    <TouchableOpacity onPress={this.goLogin.bind(this)}>
                        <View style={{
                            borderColor: "#CCC",
                            backgroundColor: "#F39C12",
                            padding: 10,
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6
                        }}>
                            <Text style={{ 
                                textAlign: "center", 
                                fontSize: 18,
                                color: "#FFF",
                                fontWeight: "bold"
                            }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
