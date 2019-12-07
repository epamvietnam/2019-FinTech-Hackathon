import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import ProductItemRow from './ProductItemRow';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';

const product = {
    ProductName: 'ProductName',
    Address: 'Address',
    Price: 'Price',
};

export class CategoryListingScreen extends Component {
    onAdvanceSearchPress = () => {
        console.log('AdvanceSearch');
        this.props.navigation.navigate('AdvanceSearch');
    };
    
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
                    <TouchableHighlight
                            style={{
                                borderRadius: 8,
                                borderWidth: 1,
                                backgroundColor: Colors.whiteColor,
                                borderColor: Colors.lightGrayColor,
                                marginTop: 10,
                                height: 38
                            }}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                            <TextInput style={{flex: 1, marginLeft: 4}}/>
                            <TouchableOpacity
                                style={{justifyContent: 'center', alignContent: 'center', paddingHorizontal: 10}}
                                onPress={this.onAdvanceSearchPress}>
                                <Icon
                                    name="settings-applications"
                                    type="MaterialIcons"
                                    color={Colors.disable}
                                    size={25}
                                />
                            </TouchableOpacity>
                            <View style={{color: Colors.lightGrayColor, alignContent: 'center', borderLeftWidth: 1.5, opacity: 0.5, marginVertical: 4}}/>
                            <TouchableOpacity
                                style={{justifyContent: 'center', alignContent: 'center', paddingHorizontal: 10}}>
                                <Icon
                                    name="search"
                                    type="AntDesign"
                                    color={Colors.disable}
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>
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
