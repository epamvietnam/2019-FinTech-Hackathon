import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors, ScreenDimension} from '../styles/DefaultStyles';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {Rating} from 'react-native-elements';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';

export class HouseDetailScreen extends Component {
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
            <View style={{flex: 2}}>
              <Image
                source={require('../assets/House1.jpg')}
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                  flex: 1,
                }}
              />
              <LinearGradient
                colors={['transparent', 'transparent', 'white']}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
            </View>
            <View
              style={{
                flex: 5,
                marginTop: -85,
                marginBottom: 16,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#FFFF',
                  alignSelf: 'center',
                }}>
                ¥1120000
              </Text>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: Colors.primary,
                  }}>
                  House on Mountain
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    width: 120,
                    borderWidth: 0,
                    paddingVertical: 5,
                    marginRight: 10,
                    backgroundColor: '#F29335',
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                    }}>
                    <Icon
                      name="shopping-cart"
                      type="font-awesome"
                      size={20}
                      color="#FFFFFF"
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 14,
                        letterSpacing: 0.44,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        marginHorizontal: 10,
                      }}>
                      Buy
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    width: 120,
                    borderWidth: 0,
                    paddingVertical: 5,
                    backgroundColor: '#106cc8',
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                    }}>
                    <Icon
                      name="history"
                      type="font-awesome"
                      size={20}
                      color="#FFFFFF"
                    />
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 14,
                        letterSpacing: 0.44,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        marginHorizontal: 10,
                      }}>
                      History
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Content */}
              <View
                style={{
                  flexDirection: 'column',
                  marginVertical: 20,
                  marginHorizontal: 15,
                  backgroundColor: '#ffff',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000',
                    alignSelf: 'flex-start',
                  }}>
                  Two Bed Room Apartment
                </Text>
                <Rating
                  imageSize={20}
                  readonly
                  startingValue={4}
                  ratingCount={5}
                  style={{alignSelf: 'flex-start', marginVertical: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: '#bebebe',
                    alignSelf: 'center',
                  }}>
                  This test message This test message This test message This
                  test message This test message This test message This test
                  message This test message This test message This test message
                  This test message This test message This test message This
                  test message This test message This test message
                </Text>
              </View>
              {/* List View */}
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#ffff',
                  padding: 7,
                  borderRadius: 5,
                  marginHorizontal: 15,
                }}>
                <Image
                  source={require('../assets/House2.jpg')}
                  style={{
                    borderRadius: 5,
                    flex: 1,
                    height: 100,
                  }}
                />
                <View
                  style={{
                    width: 10,
                  }}
                />
                <Image
                  source={require('../assets/House3.jpg')}
                  style={{
                    borderRadius: 5,
                    flex: 1,
                    height: 100,
                  }}
                />
                <View
                  style={{
                    width: 10,
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CompareAssert')}>
            <Icon
              name="plus-circle"
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
    flex: 1,
    backgroundColor: Colors.background,
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
    transform: [{rotate:45}]
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
    transform: [{rotate:-45}]
  },
});

export default HouseDetailScreen;
