//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';


//create component
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>
                {this.props.title}</Text>
            </View>
        );
    }
}

//style
const styles = {
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor:"green"
    },
    text: {
        fontSize: 50
    }
}


////export
export default Header;


