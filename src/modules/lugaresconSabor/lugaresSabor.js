import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import {ScrollView, Image, Text} from 'react-native';
import {Container, View, Card} from 'native-base';

class UiLugaresSabor extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <View style={styles.contentListPlace}>
            <Card style={styles.contentCardPlace}>
              <Image
                source={require('./assets/img/list1.jpg')}
                style={styles.imgPlace}
              />
              <Text style={styles.titlePlace}>Taz Pizza</Text>
              <View style={styles.infoDisplayNone}></View>
            </Card>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default UiLugaresSabor;
