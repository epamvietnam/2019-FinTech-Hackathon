import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import InitialNavigator from './app/navigators/InitialNavigator';
import { ThemeProvider } from 'react-native-elements';

const Container = createAppContainer(InitialNavigator);

export class App extends PureComponent {
  render() {
    return (
      <ThemeProvider>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <Container />
        </View>
      </ThemeProvider>
    );
  }
}

export default App;
