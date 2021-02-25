import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import {ScrollView, Image, Text} from 'react-native';
import {Container, View, Card, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../sections/navBarGoBack';

class UiDetailPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detallePlace: {
        id: this.props.navigation.getParam('id'),
        img: this.props.navigation.getParam('img'),
        title: this.props.navigation.getParam('title'),
        latitude: this.props.navigation.getParam('latitude'),
        longitude: this.props.navigation.getParam('longitude'),
        description: this.props.navigation.getParam('descripcion'),
        showComponent: this.props.navigation.getParam('showComponent'),
      },
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: <Header name="Informacion" leftButton={true} />,
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    let {detallePlace} = this.state;
    let latitude = parseFloat(detallePlace.latitude);
    let longitude = parseFloat(detallePlace.longitude);

    if (detallePlace.showComponent == 1) {
      return (
        <Container style={styles.container}>
          <ScrollView>
            <View style={styles.detailLugarContent}>
              <View style={styles.detailPlaceBody}>
                <Card style={styles.headerDetail}>
                  <Image
                    style={styles.imgDetailPlace}
                    source={{uri: detallePlace.img}}
                  />
                  <Text style={styles.titleDetailPlace}>
                    {detallePlace.title}
                  </Text>
                </Card>

                <Card style={styles.cardDetailPlace}>
                  <View style={styles.buttonPlace}>
                    <Button
                      style={styles.btnMap}
                      transparent={true}
                      onPress={() =>
                        navigate('Rutas', {
                          latitude: latitude,
                          longitude: longitude,
                        })
                      }>
                      <Icon name="map-marker" size={19} color="white" />
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: 'Rubik-Regular',
                          fontSize: 15,
                        }}>
                        {' '}
                        Ver en el mapa
                      </Text>
                    </Button>
                  </View>
                  <Text style={styles.descripcionDeatailPlace}>
                    {detallePlace.description}
                  </Text>
                </Card>
              </View>
            </View>
          </ScrollView>
        </Container>
      );
    } else {
      return (
        <Container style={styles.container}>
          <ScrollView>
            <View style={styles.detailLugarContent}>
              <Image
                style={styles.imgDetailPlace}
                source={{uri: detallePlace.img}}
              />

              <View style={styles.detailPlaceBody}>
                <Text style={styles.titleDetailPlace}>Estatico</Text>
                <Card style={styles.cardDetailPlace}>
                  <Text style={styles.descripcionDeatailPlace}>
                    Este es un pequeña descriccion del lugar, que sera llenado
                    por un API, Este es un pequeña descriccion del lugar, que
                    sera llenado por un API, Este es un pequeña descriccion del
                    lugar, que sera llenado por un API
                  </Text>
                  <View style={styles.buttonPlace}>
                    <Button
                      style={styles.btnMap}
                      transparent={true}
                      onPress={() => navigate('Rutas')}>
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
                  </View>
                </Card>
              </View>
            </View>
          </ScrollView>
        </Container>
      );
    }
  }
}

export default UiDetailPlace;
