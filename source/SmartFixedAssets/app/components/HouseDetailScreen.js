import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Colors, ScreenDimension} from '../styles/DefaultStyles';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {Rating} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {getPropertyDetail} from '../services/DataService';
import ShareData from '../utilities/ShareData';

export class HouseDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null, iconName: 'plus-circle'};
  }

  async componentDidMount() {
    let id = this.props.navigation.getParam('id', 1);
    let result = await getPropertyDetail(id);
    console.log(result);
    this.setState({data: result});

    this.getIconName();
  }

  getIconName() {
    let appData = ShareData.getInstance();
    let currentItem = appData.getCurrentItem();
    if (currentItem === null || this.state.data === null) {
      this.setState({iconName: 'plus-circle'});
    } else if (currentItem.id === this.state.data.id) {
      this.setState({iconName: 'minus-circle'});
    } else {
      this.setState({iconName: 'list-alt'});
    }
  }

  doComparison() {
    if (this.state.data === null) return;

    let appData = ShareData.getInstance();
    let currentItem = appData.getCurrentItem();
    if (currentItem === null) {
      appData.setCurrentItem(this.state.data);
      this.getIconName();
      ToastAndroid.show(
        'Add this house to further comparison',
        ToastAndroid.SHORT,
      );
    } else if (currentItem.id === this.state.data.id) {
      appData.setCurrentItem(null);
      this.getIconName();
      ToastAndroid.show(
        'Remove this house from comparison',
        ToastAndroid.SHORT,
      );
    } else {
      this.props.navigation.navigate('CompareAssert');
    }
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <View>
              <Image
                source={require('../assets/House1.jpg')}
                style={styles.imageView}
              />
              <LinearGradient
                colors={['transparent', 'transparent', 'white']}
                style={styles.linearImageView}
              />
            </View>
            <View style={styles.containView}>
              <Text style={styles.costText}>
                ${this.state.data !== null ? this.state.data.price : ''}
              </Text>
              <Text style={styles.addressText}>
                {this.state.data !== null ? this.state.data.productName : ''}
              </Text>
              <View style={styles.buttonContainView}>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: '#F29335'}]}>
                  <View style={styles.buttonInsideView}>
                    <Icon
                      name="shopping-cart"
                      type="font-awesome"
                      size={20}
                      color="#FFFFFF"
                    />
                    <Text style={styles.buttonText}>
                      Buy
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: '#106cc8'}]}>
                  <View style={styles.buttonInsideView}>
                    <Icon
                      name="history"
                      type="font-awesome"
                      size={20}
                      color="#FFFFFF"
                    />
                    <Text style={styles.buttonText}>
                      History
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Content */}
              <View
                style={styles.contentView}>
                <Rating
                  type="custom"
                  ratingImage={require('../assets/star.png')}
                  ratingColor="transparent"
                  ratingBackgroundColor="transparent"
                  imageSize={20}
                  readonly
                  startingValue={4}
                  ratingCount={this.state.data.ratingCount}
                  style={{alignSelf: 'flex-start', marginVertical: 5}}
                />
                <Text style={styles.description}>
                  {this.state.data !== null ? this.state.data.description : ''}
                </Text>
              </View>
              {/* List View */}
              <View
                style={styles.listView}>
                <Image
                  source={require('../assets/House2.jpg')}
                  style={{
                    borderRadius: 5,
                    flex: 1,
                    height: 100,
                  }}
                />
                <Image
                  source={require('../assets/House3.jpg')}
                  style={{
                    borderRadius: 5,
                    flex: 1,
                    height: 100,
                    marginHorizontal: 10
                  }}
                />
                <Image
                  source={require('../assets/House4.jpg')}
                  style={{
                    borderRadius: 5,
                    flex: 1,
                    height: 100,
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
          <TouchableOpacity onPress={() => this.doComparision()}>
            <Icon
              name={this.state.iconName}
              type="font-awesome"
              color={Colors.primary}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containView: {
    marginTop: -85,
    marginBottom: 16,
    alignSelf: 'center',
  },
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
  imageView: {
    width: ScreenDimension.width,
    height: 420,
    flex: 1,
  },
  linearImageView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  costText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  addressText: {
    fontSize: 22,
    color: Colors.primary,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  buttonContainView: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: ScreenDimension.SemiScreenWidth - 30,
    borderWidth: 0,
    paddingVertical: 5,
    marginRight: 10,
  },
  buttonInsideView: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 0.44,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  contentView: {
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 14,
    color: '#bebebe',
    alignSelf: 'center',
  },
  listView:{ 
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default HouseDetailScreen;
