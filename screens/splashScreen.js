import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import stylesSplash from '../assets/style/styleSplashScreen';
import * as Animatable from 'react-native-animatable';

class UiSplash extends Component {
  goToScreen(routeName) {
    this.props.navigation.navigate(routeName);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen('Home');
      },
      2200,
      this,
    );
  }

  render() {
    return (
      <View style={stylesSplash.containerSplash}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.1)" />
        <Animatable.Image
          animation="zoomInUp"
          easing="ease-out"
          iterationCount={1}
          delay={5}
          source={require('../assets/img/logo.png')}
          style={stylesSplash.Img}
        />
      </View>
    );
  }
}

export default UiSplash;
