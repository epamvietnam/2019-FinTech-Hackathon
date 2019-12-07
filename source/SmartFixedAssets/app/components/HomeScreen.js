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
                                            name="heartbeat"
                                            type="font-awesome"
                                            color="#fff"
                                            size={20}
                                        />
                                        <Text style={{ color: '#fff' }}>Properties</Text>
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
                                        backgroundColor: '#42a832',
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Icon
                                        name="heartbeat"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Classified</Text>
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
                                        name="heartbeat"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Motors</Text>
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
                                        name="heartbeat"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Services</Text>
                                </View>
                                <View
                                    style={{
                                        height: 10,
                                    }}
                                />
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
                                        name="heartbeat"
                                        type="font-awesome"
                                        color="#fff"
                                        size={18}
                                    />
                                    <Text style={{ color: '#fff', marginLeft: 5 }}>Jobs</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Category categoryName="Popular Trending" />
                    <Category categoryName="Featured Ads" />
                    <Category categoryName="Top Deals" />
                </View>
            </ScrollView>
        );
    }
}

export default HomeScreen;
