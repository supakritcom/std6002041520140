import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection >
                    <Image 
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://goo.gl/63aHfT' }} 
                    ></Image>
                    <Text>พรุ่งนี้ค่อย</Text>
                    <Text>POP</Text>
                </CardSection>
                <CardSection >
                <Image 
                    style={{ width: 450, height: 300 }}
                    source={{ uri: 'https://goo.gl/63aHfT' }} 
                    ></Image>
                </CardSection>
                <CardSection>
                    <View style={ styles.button }>
                    <View style={{ width: 100, backgroundColor: 'red' }}>
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
        marginTop: 30
    }
}

export default Card;