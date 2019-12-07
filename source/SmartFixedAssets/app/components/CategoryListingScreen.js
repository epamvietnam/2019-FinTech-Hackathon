import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import ProductItemRow from './ProductItemRow';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';
import { getAllProperties } from '../services/DataService';

export class CategoryListingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    async componentDidMount() {
        let result = await getAllProperties();
        console.log(result);
        this.setState((
            { data: result }
        ));
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        margin: 10,
                    }}>
                    <TouchableOpacity style={{ width: 25, height: 25 }} onPress={() => this.props.navigation.goBack()}>
                        <View>
                            <Icon
                                name="chevron-left"
                                type="font-awesome"
                                color={Colors.disable}
                                size={25}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, marginVertical: 20 }}>Properties</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ProductItemRow product={item} />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default CategoryListingScreen;
