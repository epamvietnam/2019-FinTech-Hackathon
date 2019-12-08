import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Category from './Category';

export class HomeScreen extends Component {
    onPress = () => {
        this.props.navigation.navigate('CategoryListing');
    };

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 20,
                        marginTop: 30,
                        marginBottom: 10,
                    }}>
                    <View>
                        <Text style={{ fontSize: 30 }}>Explore</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={this.onPress}>
                                    <View
                                        style={{
                                            borderRadius: 5,
                                            backgroundColor: '#3263a8',
                                            height: 100,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Icon
                                            name="home"
                                            type="font-awesome"
                                            color="#fff"
                                            size={20}
                                        />
                                        <Text style={{ color: '#fff' }}>Real Estate</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    width: 10,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    height: 100,
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        borderRadius: 5,
                                        backgroundColor: '#745B47',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Icon
                                        name="car"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Vehicles</Text>
                                </View>
                                <View
                                    style={{
                                        height: 10,
                                    }}
                                />
                                <View
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: '#42a832',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    <Icon
                                        name="mobile"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Electronics</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: 10,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    height: 100,
                                }}>
                                <View
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: '#6b2473',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    <Icon
                                        name="leaf"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Furniture</Text>
                                </View>
                                <View
                                    style={{
                                        height: 10,
                                    }}
                                />
                                <View
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: '#7EB0BA',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    <Icon
                                        name="wrench"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Machinery</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Category categoryName="Top Rating" />
                    <Category categoryName="Bidding" />
                </View>
            </ScrollView>
        );
    }
}

export default HomeScreen;
