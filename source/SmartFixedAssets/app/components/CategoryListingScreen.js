import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import ProductItemRow from './ProductItemRow';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';

const product = {
    ProductName: 'ProductName',
    Address: 'Address',
    Price: 'Price',
};

export class CategoryListingScreen extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        margin: 10,
                    }}>
                    <View style={{ width: 25, height: 25 }}>
                        <Icon
                            name="chevron-left"
                            type="font-awesome"
                            color={Colors.disable}
                            size={25}
                        />
                    </View>
                    <Text style={{ fontSize: 30, marginVertical: 20 }}>Properties</Text>
                    <ProductItemRow product={product} />
                    <ProductItemRow product={product} />
                    <ProductItemRow product={product} />
                    <ProductItemRow product={product} />
                    <ProductItemRow product={product} />
                    <ProductItemRow product={product} />
                </View>
            </ScrollView>
        );
    }
}

export default CategoryListingScreen;
