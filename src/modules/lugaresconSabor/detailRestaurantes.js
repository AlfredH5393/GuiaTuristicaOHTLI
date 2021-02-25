import React, {Component} from 'react';
import styles from './assets/style/style';
import {ScrollView, Image, Text} from 'react-native';
import {Container, View, Card, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <View style={styles.detailLugarContent}>
            <Image
              style={styles.imgDetailPlace}
              source={require('./assets/img/list1.jpg')}
            />

            <View style={styles.detailPlaceBody}>
              <Text style={styles.titleDetailPlace}>Enchiladas Meches</Text>
              <Card style={styles.cardDetailPlace}>
                <View style={styles.contentInfoCard}>
                  <View style={styles.leftTitles}>
                    <Text style={styles.titleInfoCard}>Mesas:</Text>
                    <Text style={styles.titleInfoCard}>Disponibles:</Text>
                    <Text style={styles.titleInfoCard}>Contacto:</Text>
                    <Text style={styles.titleInfoCard}>Dirreccion:</Text>
                  </View>
                  <View style={styles.rightInformation}>
                    <Text style={styles.textInformation}>9</Text>
                    <Text style={styles.textInformation}>9</Text>
                    <Text style={styles.textInformation}>982739182</Text>
                    <Text style={styles.textInformation}>
                      Calle Revolucion Col. Zona Centro, avenida Revolucion
                    </Text>
                  </View>
                </View>
              </Card>
            </View>
            {/* <View style={styles.buttonPlace}>
              <Button style={styles.btnMap} transparent={true}>
                <Icon name="map-marker" size={19} />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Rubik-Regular',
                    fontSize: 15,
                  }}>
                  {' '}
                  Ver en el mapa
                </Text>
              </Button>
            </View> */}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default App;
