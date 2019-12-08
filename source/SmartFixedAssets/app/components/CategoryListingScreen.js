import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ProductItemRow from './ProductItemRow';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';
import { getAllProperties } from '../services/DataService';

export class CategoryListingScreen extends Component {
    onAdvanceSearchPress = () => {
        console.log('AdvanceSearch');
        this.props.navigation.navigate('AdvanceSearch', {
            receivedSearchResult: this.receivedSearchResult
        });
    };

    constructor(props) {
        super(props);
        this.state = { 
            data: null,
            originalData: null,
        };
    }

    async componentDidMount() {
        let result = await getAllProperties();
        console.log(result);
        this.setState((
            { 
                data: result,
                originalData: result,
            }
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
            <Text style={{ fontSize: 30, marginBottom: 5, marginTop: 20 }}>Real Estate</Text>
            {this.renderSearchBar()}
        </View>
    }

    renderSearchBar(){
        return (
            <TouchableHighlight
            style={{
                borderRadius: 8,
                borderWidth: 1,
                backgroundColor: Colors.whiteColor,
                borderColor: Colors.lightGrayColor,
                marginTop: 0,
                marginBottom: 15,
                height: 38
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                <TextInput style={{flex: 1, marginLeft: 4}}
                           placeholder='Input street name, ward or district'/>
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
        )
    }

    render() {
        return (
            <FlatList style={{ margin: 10 }}
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                ListHeaderComponent={
                    this.renderHeader(() => this.props.navigation.goBack())
                }
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

    receivedSearchResult = (filter) => {
        console.log(filter);
        console.log('receivedSearchResult');
        this.setState({data: this.filterList(this.state.data, filter)});
    }

    filterList = (list, filter) => {
        let filteredList = this.state.originalData;
        console.log('filtering: ', filter);
        if(filter !== null && filteredList !== null && filter.nearSchool === true)
        {
            filteredList = list.filter(
                item => item.id === 2 || item.id === 3
            )
        }
        return filteredList;
      };
}

export default CategoryListingScreen;
