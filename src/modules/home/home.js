import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import {
  ScrollView,
  Image,
  Text,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';
import {Container, View, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../sections/navBarGoBack';
// import navigationScreenHome from '../../util/navigationScreen';

class UiHome extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: <Header name="Guía Turistica" leftButton={false} />,
    };
  };

  // Funciones para navegar entre las pantallas
  screenLugares = () => {
    this.props.navigation.navigate('Lugares');
  };
  screenRutas = () => {
    this.props.navigation.navigate('Rutas');
  };
  screenHospedaje = () => {
    this.props.navigation.navigate('Hospedaje');
  };
  screenGaleria = () => {
    this.props.navigation.navigate('Galeria');
  };
  screenProximamente = () => {
    this.props.navigation.navigate('Work');
  };
  screenGallery = () => {
    this.props.navigation.navigate('Gallery');
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.1)" />
        <ScrollView>
          <View style={styles.containerMenu}>
            <View style={styles.headerBody}>
              {/* <Text style={styles.titleHeader}> Guia Turistica</Text> */}
              <Image
                source={require('../../../assets/img/logo.png')}
                style={styles.logo}
              />
            </View>

            <View style={styles.menuContent}>
              <Text style={styles.titleScreen}>Menu</Text>
              <View style={styles.menuBody}>
                <TouchableNativeFeedback onPress={this.screenLugares}>
                  <Card style={styles.cardSmall}>
                    <View style={[styles.circle, styles.purple]}>
                      <Icon
                        name="map-marker"
                        color="#fff"
                        size={30}
                        style={styles.iconMenu}
                      />
                    </View>
                    <Text style={styles.titleOption}>Lugares</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.textDescripcionOption}>
                      Descubre nuevos lugares no te aburras
                    </Text>
                  </Card>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={this.screenProximamente}>
                  <Card style={styles.cardSmall}>
                    <View style={[styles.circle, styles.orangeSoda]}>
                      <Icon
                        name="coffee"
                        color="#fff"
                        size={30}
                        style={styles.iconMenu}
                      />
                    </View>
                    <Text style={styles.titleOption}>Lugares con sabor</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.textDescripcionOption}>
                      Lugares exquisitos, ricos platillos
                    </Text>
                  </Card>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={this.screenHospedaje}>
                  <Card style={styles.cardSmall}>
                    <View style={[styles.circle, styles.greenCrayola]}>
                      <Icon
                        name="hotel"
                        color="#fff"
                        size={30}
                        style={styles.iconMenu}
                      />
                    </View>
                    <Text style={styles.titleOption}>Hospedaje</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.textDescripcionOption}>
                      Directorio de hospedajes y hoteles
                    </Text>
                  </Card>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={this.screenRutas}>
                  <Card style={styles.cardSmall}>
                    <View style={[styles.circle, styles.yankeesBlue]}>
                      <Icon
                        name="map-o"
                        color="#fff"
                        size={30}
                        style={styles.iconMenu}
                      />
                    </View>
                    <Text style={styles.titleOption}>Mapa</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.textDescripcionOption}>
                      Mapa de la región de Huejutla
                    </Text>
                  </Card>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={this.screenGallery}>
                  <Card style={styles.cardMedium}>
                    <View style={[styles.circleM, styles.orange]}>
                      <Icon
                        name="photo"
                        color="#fff"
                        size={30}
                        style={styles.iconMenu}
                      />
                    </View>
                    <Text style={styles.titleOption}>Galeria</Text>
                    <View style={styles.border}></View>
                    <Text style={styles.textDescripcionOption}>
                      Fotos de los lugares
                    </Text>
                  </Card>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default UiHome;
