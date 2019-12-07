import {Dimensions} from 'react-native';

export const Colors = {
  primary: '#4199ba',
  disable: '#808080',
  background: '#f2f2f2',
};

export const ScreenDimension = {
  ScreenHeight: Dimensions.get('window').height,
  ScreenWidth: Dimensions.get('window').width,
  SemiScreenWidth: Dimensions.get('window').width / 2,
};
