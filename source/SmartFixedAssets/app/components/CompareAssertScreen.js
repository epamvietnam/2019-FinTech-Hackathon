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
    title: 'House 1',
    address: 'This is address',
    image: require('../assets/House1.jpg'),
    Price: ['$250000', 4],
    NoOfBedroom: ['3 Bedroom', 3],
    NoOfToilet: ['2 Toilets', 2],
    NearIndustry: ['12 miles from industry', 3],
    NearSchool: ['2 miles from school', 5],
  },
  {
    id: 2,
    title: 'House 2',
    address: 'This is address',
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
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <Text style={styles.header}>{item.title}</Text>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.address}>{item.address}</Text>
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
  containView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  itemView: {
    width: ScreenDimension.SemiScreenWidth,
    alignItems: 'center',
    padding: 15,
  },
  image: {
    resizeMode: 'cover',
    width: 180,
    height: 150,
    marginBottom: 15,
    borderRadius: 3,
  },
  header: {
    fontSize: 18,
    marginBottom: 15,
    color: Colors.primary,
  },
  address: {
    fontSize: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    width: ScreenDimension.SemiScreenWidth - 20,
    backgroundColor: '#000000',
  },
  contentView: {
    backgroundColor: 'white',
    width: 180,
    padding: 15,
    marginBottom: 15,
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
});

export default CompareAssertScreen;
