import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors, ScreenDimension} from '../styles/DefaultStyles';
import {Rating, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: 1,
    index: 0,
    title: 'House 1',
    address: '150 Kennedy Road, Wan Chai, Hong Kong',
    image: require('../assets/House1.jpg'),
    Price: ['$250000', 4],
    NoOfBedroom: ['3 Bedroom', 3],
    NoOfToilet: ['2 Toilets', 2],
    NearIndustry: ['12 miles from industry', 3],
    NearSchool: ['2 miles from school', 5],
  },
  {
    id: 2,
    index: 1,
    title: 'House 2',
    address: '150 Kennedy Road, Wan Chai, Hong Kong',
    image: require('../assets/House2.jpg'),
    Price: ['$150000', 3],
    NoOfBedroom: ['1 Bedroom', 2],
    NoOfToilet: ['1 Toilets', 2],
    NearIndustry: ['3 miles from industry', 1],
    NearSchool: ['12 miles from school', 1],
  },
];

export class CompareAssertScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.containView}>
        <FlatList
          style={styles.containView}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <View>
                <Image source={item.image} 
                       style={styles.image} />
                <LinearGradient
                  colors={['transparent', 'transparent', 'white']}
                  style={styles.linearImageContent}
                />
              </View>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.header}>{item.index == 0 ? 'Price' : ''}</Text>
              <View style={styles.contentView}>
                <LinearGradient
                  colors={['white', 'lightblue']}
                  style={styles.linearContent}
                />
                <Rating
                  imageSize={20}
                  readonly
                  ratingCount={item.Price[1]}
                  type="custom"
                  ratingImage={require('../assets/star.png')}
                  ratingColor="transparent"
                  ratingBackgroundColor="transparent"
                  style={styles.rating}
                />
                <Text style={styles.content}>{item.Price[0]}</Text>
              </View>
              <Text style={styles.header}>{item.index == 0 ? 'No. of Bedrooms' : ''}</Text>
              <View style={styles.contentView}>
                <LinearGradient
                  colors={['white', 'lightyellow']}
                  style={styles.linearContent}
                />
                <Rating
                  imageSize={20}
                  readonly
                  ratingCount={item.NoOfBedroom[1]}
                  type="custom"
                  ratingImage={require('../assets/star.png')}
                  ratingColor="transparent"
                  ratingBackgroundColor="transparent"
                  style={styles.rating}
                />
                <Text style={styles.content}>{item.NoOfBedroom[0]}</Text>
              </View>
              <Text style={styles.header}>{item.index == 0 ? 'No. of Toilet' : ''}</Text>
              <View style={styles.contentView}>
                <LinearGradient
                  colors={['white', '#FFB775']}
                  style={styles.linearContent}
                />
                <Rating
                  imageSize={20}
                  readonly
                  ratingCount={item.NoOfToilet[1]}
                  type="custom"
                  ratingImage={require('../assets/star.png')}
                  ratingColor="transparent"
                  ratingBackgroundColor="transparent"
                  style={styles.rating}
                />
                <Text style={styles.content}>{item.NoOfToilet[0]}</Text>
              </View>
              <Text style={styles.header}>{item.index == 0 ? 'Near Industry' : ''}</Text>
              <View style={styles.contentView}>
                <LinearGradient
                  colors={['white', '#DFC2FF']}
                  style={styles.linearContent}
                />
                <Rating
                  imageSize={20}
                  readonly
                  ratingCount={item.NearIndustry[1]}
                  type="custom"
                  ratingImage={require('../assets/star.png')}
                  ratingColor="transparent"
                  ratingBackgroundColor="transparent"
                  style={styles.rating}
                />
                <Text style={styles.content}>{item.NearIndustry[0]}</Text>
              </View>
              <Text style={styles.header}>{item.index == 0 ? 'Near School' : ''}</Text>
              <View style={styles.contentView}>
                <LinearGradient
                  colors={['white', '#E2FFC2']}
                  style={styles.linearContent}
                />
                <Rating
                  imageSize={20}
                  readonly
                  ratingCount={item.NearSchool[1]}
                  type="custom"
                  ratingImage={require('../assets/star.png')}
                  ratingColor="transparent"
                  ratingBackgroundColor="transparent"
                  style={styles.rating}
                />
                <Text style={styles.content}>{item.NearSchool[0]}</Text>
              </View>
            </View>
          )}
        />
        <Text style={styles.summary}>
          This summary This summary This summary This summary This summary This summary This summary 
        </Text>
        <LinearGradient
          colors={['transparent', 'white']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearBackIcon}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', 'white']}
          style={styles.linearAddIcon}
        />
        <View style={styles.backIcon}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="chevron-left"
              type="font-awesome"
              color={Colors.primary}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addIcon}>
          <TouchableOpacity onPress={() => this.doComparison()}>
            <Icon
              name="filter"
              type="font-awesome"
              color={Colors.primary}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  linearBackIcon: {
    position: 'absolute',
    top: -98,
    bottom: 0,
    left: -75,
    right: 0,
    height: 150,
    width: 150,
    transform: [{rotate: 45}],
  },
  addIcon: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: 15,
  },
  linearAddIcon: {
    position: 'absolute',
    top: -98,
    bottom: 0,
    left: ScreenDimension.ScreenWidth - 75,
    right: 0,
    height: 150,
    width: 150,
    transform: [{rotate: -45}],
  },
  containView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  itemView: {
    width: ScreenDimension.SemiScreenWidth,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: ScreenDimension.SemiScreenWidth,
    height: 200,
    marginBottom: 15
  },
  address: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  header: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 15,
  },
  contentView: {
    backgroundColor: 'white',
    width: ScreenDimension.SemiScreenWidth - 20,
    height: 70,
    padding: 15,
    marginBottom: 15,
  },
  linearImageContent: {
    position: 'absolute',
    height: 200,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  linearContent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    fontSize: 13,
    alignSelf: 'center',
  },
  rating: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  summary: {
    textAlign: 'center',
    color: '#6C8EFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    marginHorizontal: 15,
  },
});

export default CompareAssertScreen;
