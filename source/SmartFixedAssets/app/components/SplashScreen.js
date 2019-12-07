import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import AnimatedLinearGradient, {
    presetColors,
} from 'react-native-animated-linear-gradient';

const text = 'iLand';

class SplashScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            displayText: '',
        };
        StatusBar.setHidden(true);
    }

    componentWillUnmount() {
        StatusBar.setHidden(false);
    }

    performTimeConsumingTask = async () => {
        let count = 0;
        return new Promise(
            resolve =>
                (this.timerInterval = setInterval(() => {
                    if (this.state.displayText === text) {
                        clearInterval(this.timerInterval);
                        resolve('result');
                        this.props.navigation.navigate('App');
                    } else {
                        let newString = text[count];
                        this.setState({ displayText: this.state.displayText + newString });
                        count++;
                    }
                }, 1000)),
        );
    };

    async componentDidMount() {
        await this.performTimeConsumingTask();
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <AnimatedLinearGradient
                    customColors={presetColors.sunrise}
                    speed={1000}
                />
                <Text style={styles.textStyles}>{this.state.displayText}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
};

export default SplashScreen;
