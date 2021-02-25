import React from 'react';
import styles from '../../../assets/style/style';
import {ScrollView, Image, Text} from 'react-native';
import {Container, View, Card} from 'native-base';

function listLugares(props) {
  return (
    <Card style={styles.contentCardPlace}>
      <Image source={require(props.Image)} style={styles.imgPlace} />
      <Text style={styles.titlePlace}>{props.title}</Text>
      <View style={styles.infoDisplayNone}></View>
    </Card>
  );
}

export default listLugares;
