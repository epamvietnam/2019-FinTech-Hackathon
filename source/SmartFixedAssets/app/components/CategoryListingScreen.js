import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
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

    renderHeader(touchBackPressed) {
        return <View>
            <View style={{ width: 25, height: 25 }}>
                <TouchableOpacity onPress={touchBackPressed}>
                    <Icon
                        name="chevron-left"
                        type="font-awesome"
                        color={Colors.disable}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 30, marginVertical: 20 }}>Properties</Text>
        </View>
    }

    render() {
        return (
            <FlatList style={{ margin: 10 }}
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                ListHeaderComponent={this.renderHeader(() => this.props.navigation.goBack())}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HouseDetail', { id: item.id })}>
                        <ProductItemRow product={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default CategoryListingScreen;
