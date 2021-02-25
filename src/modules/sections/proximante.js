import React, {Component} from 'react';
import {Image, ScrollView} from 'react-native';
import {Container, View, Card, Text} from 'native-base';
import styles from '../../../assets/style/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../sections/navBarGoBack';

class UiWorking extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: <Header name="En proceso" leftButton={true} />,
    };
  };
  render() {
    return (
      <View style={styles.containerWork}>
        <View style={styles.contentItemsWorking}>
          <Image
            style={styles.imgWorking}
            source={require('../../../assets/img/working2.png')}
          />
          <Text style={styles.titlePlace}>Apartado en proceso..</Text>
          <Icon name="code" size={20} style={styles.titlePlace} />
        </View>
      </View>
    );
  }
}

export default UiWorking;
