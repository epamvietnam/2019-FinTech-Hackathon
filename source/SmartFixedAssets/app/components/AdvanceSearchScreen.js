import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Picker, StyleSheet, CheckBox, TextInput } from 'react-native';
import ProductItemRow from './ProductItemRow';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';

const bedrooms = ['Any', '1', '2', '3', '4', '5+'];
const bathrooms = ['Any', '1', '2', '3', '4', '5+'];
const priceRange = ['Any', '$500,000 - $750,000', '$750,000 - $1M', '$1M+'];

export class AdvanceSearchScreen extends Component {
    state = {
        bedrooms,
        bathrooms,
        priceRange,
    };

    map = (array) => {
        array.map((item) => {
            return (<Picker.Item label={item} value={item} />)
        })
    };

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
            <Text style={{ fontSize: 30, marginBottom: 5, marginTop: 20 }}>Advance Search</Text>
        </View>
    }

    renderSearchBar = () => {
        return (                    
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
                <TextInput style={{flex: 1, marginLeft: 4}}
                           placeholder='Input street name, ward or district'/>
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
        </TouchableHighlight>)
    }

    renderSelectView = (title, items, selectedItem, onValueChange) => {
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                    <Text style={{flex: 1.5, textAlignVertical: 'center'}}>{title}</Text>
                    <Picker
                        selectedValue={selectedItem}
                        style={styles.pickerStyle} 
                        onValueChange={onValueChange}>
                        {
                            items.map((item) => {
                                return (<Picker.Item label={item} value={item} />)
                        })}
                    </Picker>
                </View>
                <View style={{borderBottomColor: Colors.lightGrayColor, borderBottomWidth: 1.5}}/>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{margin: 10}}>
                    {this.renderHeader(() => this.props.navigation.goBack())}
                    <View>
                        <Text style={{flex: 1.5, textAlignVertical: 'center', marginVertical: 7}}>Location</Text>
                        {this.renderSearchBar()}
                    </View>
                    {this.renderSelectView('Price Range', priceRange, this.state.priceRange, (item) =>
                        {this.setState({priceRange: item})}
                    )}
                    {this.renderSelectView('Bedrooms', bedrooms, this.state.bedroom, (item) =>
                        {this.setState({bedroom: item})}
                    )}
                    {this.renderSelectView('Bathrooms', bathrooms, this.state.bathroom, (item) =>
                        {this.setState({bathroom: item})}
                    )}
                    <View style={{marginVertical: 7}}>
                        <Text style={{flex: 1.5, textAlignVertical: 'center', marginVertical: 7}}>Utilities</Text>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <CheckBox/>
                                <Text style={{textAlignVertical: 'center'}}>Near Schools</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <CheckBox/>
                                <Text style={{textAlignVertical: 'center'}}>Near Industries</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <CheckBox/>
                                <Text style={{textAlignVertical: 'center'}}>Near MRTs</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomColor: Colors.lightGrayColor, borderBottomWidth: 1.5}}/>
                </View>
            </ScrollView>
            <TouchableHighlight style={{height: 60, backgroundColor: Colors.primary, justifyContent: 'center'}}
                                onPress={() => this.props.navigation.goBack()}>
                <Text style={{color: Colors.whiteColor, textAlignVertical: 'center', textAlign: 'center', fontSize: 20}}>Search</Text>
            </TouchableHighlight>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    pickerStyle : {
        height: 50, 
        flex: 1
    }
})

export default AdvanceSearchScreen;