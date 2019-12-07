import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/DefaultStyles';
import LinearGradient from 'react-native-linear-gradient';
import CheckInIcon from '../assets/Check_In_Pin_Icon.svg';

export class HouseDetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4 }}>
                    <Image
                        source={require('../assets/house.png')}
                        style={{
                            resizeMode: 'cover',
                            width: '100%',
                            flex: 1,
                        }}
                    />
                    <LinearGradient
                        colors={['transparent', '#FFF']}
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                    />
                </View>
                <View style={{ flex: 5, marginTop: -50, paddingHorizontal: 15 }}>
                    <View
                        style={{
                            alignSelf: 'flex-end',
                            flexDirection: 'row',
                        }}>
                        <Text
                            style={{
                                fontSize: 22,
                                color: Colors.primary,
                            }}>
                            House on Mountain
            </Text>
                        <CheckInIcon
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            alignSelf: 'flex-end',
                            flexDirection: 'row',
                            marginTop: 10,
                        }}>
                        <TouchableOpacity
                            style={{
                                alignSelf: 'stretch',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 120,
                                borderWidth: 0,
                                paddingVertical: 5,
                                marginRight: 10,
                                backgroundColor: '#ff0000B3',
                            }}>
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 14,
                                    letterSpacing: 0.44,
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                }}>
                                Buy
              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                alignSelf: 'stretch',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 120,
                                borderWidth: 0,
                                paddingVertical: 5,
                                backgroundColor: '#106cc8B3',
                            }}>
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 14,
                                    letterSpacing: 0.44,
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                }}>
                                History
              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default HouseDetailScreen;
