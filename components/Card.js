import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection >
                    <View style={{ flexDirection: 'row' }}>
                    <Image 
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://goo.gl/63aHfT' }} 
                    ></Image>
                    <View style={{ marginTop: 37, marginLeft: 30 }}>
                    <Text>ศุภกฤต ชุนประวัติ</Text>
                    <Text>KMUTNB</Text>
                    </View>
                </View>
                </CardSection>
                <CardSection >
                <Image 
                    style={{ width: 420, height: 280.0 }}
                    source={{ uri: 'https://goo.gl/63aHfT' }} 
                    ></Image>
                </CardSection>
                <CardSection>
                    <View style={ styles.button }>
                    <View style={{ width: 100}}>
                    <Button
                        title="Buy"
                    />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    }
}

export default Card;