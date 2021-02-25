import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import {ScrollView, Image, Text} from 'react-native';
import {Container, View, Card} from 'native-base';
import Header from '../sections/navBarGoBack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalleHospedaje: {
        id: this.props.navigation.getParam('id'),
        img: this.props.navigation.getParam('img'),
        title: this.props.navigation.getParam('title'),
        habitaciones: this.props.navigation.getParam('habitaciones'),
        disponibles: this.props.navigation.getParam('habitacionesDisponibles'),
        direccion: this.props.navigation.getParam('dirrecion'),
        contacto: this.props.navigation.getParam('contacto'),
      },
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      header: <Header name="Informacion" leftButton={true} />,
    };
  };
  render() {
    let {detalleHospedaje} = this.state;
    return (
      <Container style={styles.container}>
        <ScrollView>
          <View style={styles.detailLugarContent}>
            <View style={styles.detailPlaceBody}>
              <Card style={styles.headerDetail}>
                <Image
                  style={styles.imgDetailPlace}
                  source={{uri: detalleHospedaje.img}}
                />
                <Text style={styles.titleDetailPlace}>
                  {detalleHospedaje.title}
                </Text>
              </Card>

              <Card style={styles.cardDetailPlace}>
                <View style={styles.contentcardCircle}>
                  <View style={styles.cardCircle}>
                    <Image
                      source={require('../../../assets/img/buildings.png')}
                    />
                    <Text style={styles.titleCircle}>Habitaciones</Text>
                    <Text style={styles.textInfoHotel}>
                      {detalleHospedaje.habitaciones}
                    </Text>
                  </View>
                  <View style={styles.cardCircle}>
                    <Image
                      source={require('../../../assets/img/interface.png')}
                    />
                    <Text style={styles.titleCircle}>Disponibles</Text>
                    <Text style={styles.textInfoHotel}>
                      {detalleHospedaje.habitaciones}
                    </Text>
                  </View>
                  <View style={styles.cardCircleMedium}>
                    <Image
                      source={require('../../../assets/img/communications.png')}
                    />
                    <Text style={styles.titleCircle}>Contacto</Text>
                    <Text style={styles.textInfoHotel}>
                      {detalleHospedaje.contacto}
                    </Text>
                  </View>
                  <View style={styles.cardCircleMedium}>
                    <Image source={require('../../../assets/img/signs.png')} />
                    <Text style={styles.titleCircle}>Direccion</Text>
                    <Text style={styles.textDirection}>
                      {detalleHospedaje.direccion}
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
