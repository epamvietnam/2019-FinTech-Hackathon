import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight, Picker, StyleSheet } from 'react-native';
import ProductItemRow from './ProductItemRow';
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/DefaultStyles';

const product = {
    ProductName: 'ProductName',
    Address: 'Address',
    Price: 'Price',
};

const numbersArray = ['Any', '1', '2', '3', '4', '5'];

export class AdvanceSearchScreen extends Component {
    state = {
        bedroom: 1
    };
    map = (array) => {
        array.map((item) => {
            return (<Picker.Item label={item} value={item} />)
        })
    };

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Picker
                        selectedValue={this.state.bedroom}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({bedroom: itemValue})
                        }>
                            {
                                numbersArray.map((item) => {
                                    return (<Picker.Item label={item} value={item} />)
                            })}
                    </Picker>
                </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    pickerStyle : {
        height: 50, width: 100
    }
})

export default AdvanceSearchScreen;