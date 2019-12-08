import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';
import { getImagePath } from '../utilities/CommonHelper';

export class CartDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, buySuccess: false };
    }

    async componentDidMount() {
        let detail = this.props.navigation.getParam('detail', null);
        this.setState({ data: detail });
    }

    render() {

        let button;
        if (!this.state.buySuccess) {
            button = <TouchableOpacity style={{ height: 60, backgroundColor: Colors.primary, justifyContent: 'center', marginTop: 50 }}
                onPress={() => this.setState({ buySuccess: true })}>
                <Text style={{ color: Colors.whiteColor, textAlignVertical: 'center', textAlign: 'center', fontSize: 20 }}>Buy</Text>
            </TouchableOpacity>
        }
        else {
            button = <TouchableOpacity style={{ height: 60, backgroundColor: '#fff', justifyContent: 'center', marginTop: 50 }}
                onPress={() => this.props.navigation.goBack()}>
                <Icon
                    name="check"
                    type="font-awesome"
                    color={Colors.primary}
                    size={30}
                />
            </TouchableOpacity>
        }

        return (
            <View style={{ marginTop: 10, flex: 1 }}>
                <View style={{ width: 25, height: 25, marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon
                            name="chevron-left"
                            type="font-awesome"
                            color={Colors.disable}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        padding: 5,
                        flexDirection: 'row',
                        borderRadius: 5,
                        marginVertical: 20,
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
                        }}
                    />
                    <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                            {this.state.data !== null ? this.state.data.productName : ''}
                        </Text>
                        <Text style={{ fontSize: 15, color: Colors.disable }}>
                            {this.state.data !== null ? this.state.data.address : ''}
                        </Text>
                        <Text style={{ fontSize: 25, color: Colors.primary }}>
                            ${this.state.data !== null ? this.state.data.price : ''}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        padding: 5,
                        flexDirection: 'row',
                        borderRadius: 5,
                        marginVertical: 20,
                        borderColor: '#f2f2f2',
                        borderWidth: 0.5,
                        marginHorizontal: 10
                    }}>
                    <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                            Your wallet:
                        </Text>
                        <Text style={{ fontSize: 15, color: Colors.disable, marginVertical: 5 }}>
                            Exchange Rate:
                        </Text>
                        <Text style={{ fontSize: 25, color: Colors.primary }}>
                            Price:
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1 }} />
                {button}
            </View>
        )
    }
}

export default CartDetailScreen;
