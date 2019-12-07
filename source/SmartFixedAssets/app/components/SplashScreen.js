import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';

const appName = 'Smart Fixed Assets';
const version = '1.0.0';

class SplashScreen extends React.Component {
    constructor() {
        super();
        StatusBar.setHidden(true);
    }

    componentWillUnmount() {
        StatusBar.setHidden(false);
    }

    performTimeConsumingTask = async () => {
        return new Promise(
            resolve =>
                setTimeout(() => {
                    resolve('result');
                    this.props.navigation.navigate('App');
                }, 3000));
    };

    async componentDidMount() {
        await this.performTimeConsumingTask();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{
                    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: null,
                    height: null,
                }} source={require('../assets/splash_screen.jpg')} />
                <View style={{
                    position: 'absolute', bottom: 10, right: 10,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                    <Text style={{
                        color: '#fff', fontSize: 25
                    }}>{appName}</Text>
                    <Text style={{
                        color: '#fff', fontSize: 15
                    }}>{version}</Text>
                </View>

            </View>
        );
    }
}

const styles = {
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
};

export default SplashScreen;
