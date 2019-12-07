import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, ScreenDimension} from '../styles/DefaultStyles';

const DATA = [
  {
    title: 'House 1',
    Price: ['$250000', 4],
    NoOfBedroom: ['3 Bedroom', 3],
    NoOfToilet: ['2 Toilets', 2],
    NearIndustry: ['12 miles', 3],
    NearSchool: ['2 miles', 5],
  },
  {
    title: 'House 2',
    Price: ['$150000', 3],
    NoOfBedroom: ['1 Bedroom', 2],
    NoOfToilet: ['1 Toilets', 2],
    NearIndustry: ['3 miles', 1],
    NearSchool: ['12 miles', 1],
  },
];

export class CompareAssertScreen extends Component {
  itemSeparator = () => {
    return (
      <View
        style={{
          width: 0.75,
          width: '100%',
          backgroundColor: Colors.dividerGray,
        }}
      />
    );
  };

  render() {
    return (
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        ItemSeparatorComponent={this.itemSeparator}
        sections={this.props.groupedAlerts}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  containView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  itemView: {
    width: ScreenDimension.SemiScreenWidth,
    backgroundColor: 'green',
  },
});

export default CompareAssertScreen;
