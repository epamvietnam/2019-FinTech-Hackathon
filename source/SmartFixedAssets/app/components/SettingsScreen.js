import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class SettingsScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

export default SettingsScreen;
