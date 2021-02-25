import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../../../assets/style/style';
class emptyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameLugar: props.nameLugar,
    };
  }
  render() {
    return (
      <View style={styles.containerWork}>
        <View style={styles.contentItemsWorking}>
          <Image
            style={styles.imgWorking}
            source={require('../../../assets/img/listavacia.png')}
          />
          <Text style={styles.titlePlace}>
            No hay {this.state.nameLugar} registrados
          </Text>
        </View>
      </View>
    );
  }
}

export default emptyList;
