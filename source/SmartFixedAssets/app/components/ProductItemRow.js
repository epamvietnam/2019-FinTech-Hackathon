import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Colors } from '../styles/DefaultStyles';

export class ProductItemRow extends Component {
    render() {
        return (
            <View
                style={{
                    padding: 5,
                    flexDirection: 'row',
                    borderRadius: 5,
                    marginVertical: 5,
                    borderColor: '#f2f2f2',
                    borderWidth: 0.5,
                }}>
                <Image
                    source={require('../assets/House1.jpg')}
                    style={{
                        borderRadius: 5,
                        height: 90,
                        width: 100,
                    }}
                />
                <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                        {this.props.product.productName}
                    </Text>
                    <Text style={{ fontSize: 15, color: Colors.disable }}>
                        {this.props.product.address}
                    </Text>
                    <Text style={{ fontSize: 25, color: Colors.primary }}>
                        {this.props.product.price}
                    </Text>
                </View>
            </View>
        );
    }
}

export default ProductItemRow;
