import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';
import { getImagePath } from '../utilities/CommonHelper';

export class CartDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    async componentDidMount() {
        let detail = this.props.navigation.getParam('detail', null);
        this.setState({ data: detail });
    }

    render() {
        return (
            <View style={{ marginTop: 0, marginBottom: 0, flex: 1 }}>
                <View style={{backgroundColor: '#09C286', paddingVertical: 10, paddingBottom: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ width: 25, height: 25, marginHorizontal: 10, marginTop: 5 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon
                                    name="chevron-left"
                                    type="font-awesome"
                                    color={Colors.disable}
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: Colors.lightGrayColor, fontSize: 25, textAlign: 'center', flex: 1, textAlignVertical: 'center', justifySelf: 'center'}}>YOUR WALLET</Text>
                        <View style={{ width: 25, height: 25, marginHorizontal: 10 }}></View>
                    </View>
                    <View>
                    <View style={{paddingTop: 15}}>
                        <Text style={{color: Colors.whiteColor, fontSize: 40, textAlign: 'center', fontFamily: 'bold'}}>47.893932 BTC</Text>
                        <Text style={{color: Colors.whiteColor, fontSize: 20, textAlign: 'center', opacity: 0.7}}>$ 354,804.47</Text>
                    </View>
                </View>
                </View>
                <View style={{marginHorizontal: 15, marginTop: 15, marginVertical: 7, borderBottomColor: Colors.lightGrayColor, borderBottomWidth: 1.5 }}/>
                <View>
                    <View
                        style={{
                            padding: 5,
                            flexDirection: 'row',
                            borderRadius: 5,
                            marginTop: 0,
                            marginBottom: 5,
                            borderColor: '#f2f2f2',
                            borderWidth: 0.5,
                            marginHorizontal: 10
                        }}>
                        <Image
                            source={getImagePath(this.state.data !== null ? this.state.data.image : '')}
                            style={{
                                borderRadius: 5,
                                height: 90,
                                width: 100,
                                justifySelf: 'center'
                            }}
                        />
                        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                {this.state.data !== null ? this.state.data.productName : ''}
                            </Text>
                            <Text style={{ fontSize: 15, color: Colors.disable }}>
                                {this.state.data !== null ? this.state.data.address : ''}
                            </Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal: 15}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 18, textAlign: 'left', marginTop: 5, fontWeight: '700', color: Colors.primary}}>You will pay:</Text>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 30, textAlign: 'right', fontFamily: 'bold'}}>26.98 BTC</Text>
                                <Text style={{fontSize: 20, textAlign: 'right', opacity: 0.5}}>
                                    $ 200,000
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginHorizontal: 15, marginVertical: 7, borderBottomColor: Colors.lightGrayColor, borderBottomWidth: 1.5 }}/>
                <View>
                    <View style={{marginHorizontal: 15, marginVertical: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 18, textAlign: 'left', marginTop: 5, fontWeight: '700', color: Colors.primary}}>After balance:</Text>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 30, textAlign: 'right', fontFamily: 'bold'}}>20.913932 BTC</Text>
                                <Text style={{fontSize: 20, textAlign: 'right', opacity: 0.5}}>$ 154,806.18</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginHorizontal: 15, marginVertical: 7, borderBottomColor: Colors.lightGrayColor, borderBottomWidth: 1.5 }}/>
                <View style={{flex: 1}}/>
                <TouchableOpacity style={{ height: 60, backgroundColor: Colors.primary, justifyContent: 'center', marginTop: 50, marginBottom: 0 }}
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={{ color: Colors.whiteColor, textAlignVertical: 'center', textAlign: 'center', fontSize: 20 }}>Pay</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CartDetailScreen;
