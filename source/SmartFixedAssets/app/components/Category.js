import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Colors } from '../styles/DefaultStyles';

export class Category extends Component {
    render() {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                    <Text style={{ fontSize: 20, flex: 1 }}>{this.props.categoryName}</Text>
                    <Text style={{ color: Colors.primary }}>View all</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 20,
                    }}>
                    <Image
                        source={require('../assets/home.jpg')}
                        style={{
                            borderRadius: 5,
                            flex: 1,
                            height: 100,
                        }}
                    />
                    <View
                        style={{
                            width: 10,
                        }}
                    />
                    <Image
                        source={require('../assets/home.jpg')}
                        style={{
                            borderRadius: 5,
                            flex: 1,
                            height: 100,
                        }}
                    />
                    <View
                        style={{
                            width: 10,
                        }}
                    />
                    <Image
                        source={require('../assets/home.jpg')}
                        style={{
                            borderRadius: 5,
                            flex: 1,
                            height: 100,
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default Category;
