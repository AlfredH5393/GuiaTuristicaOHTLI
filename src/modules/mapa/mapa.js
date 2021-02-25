import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import {PermissionsAndroid, ToastAndroid} from 'react-native';
import {View, Button, Text} from 'native-base';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../sections/navBarGoBack';

class UiMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: this.props.navigation.getParam('latitude'),
        longitude: this.props.navigation.getParam('longitude'),
      },
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: <Header name="Rutas " leftButton={true} />,
    };
  };

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso',
          message: 'Ohtli accedera a su localizacion',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        ToastAndroid.show('Su localización esta activa!', ToastAndroid.SHORT);
      } else {
        console.log('location permission denied');
        ToastAndroid.show('Permiso denegado', ToastAndroid.SHORT);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    let {coords} = this.state;
    if (coords.latitude == null || coords.longitude == null) {
      return (
        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            followsUserLocation={true}
            showsUserLocation={true}
            initialRegion={{
              latitude: 21.141396,
              longitude: -98.420062,
              latitudeDelta: 0.0922 * 0.6,
              longitudeDelta: 0.0421 * 0.6,
            }}></MapView>
          <Button
            onPress={this.requestLocationPermission}
            style={styles.buttonUbication}>
            <Text style={styles.textButtonUbicacion}>
              {' '}
              Mi Ubicación <Icon name="map-marker" size={15} />{' '}
            </Text>
          </Button>
        </View>
      );
    } else {
      return (
        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            followsUserLocation={true}
            showsUserLocation={true}
            initialRegion={{
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.091 * 0.2,
              longitudeDelta: 0.0411 * 0.2,
            }}>
            <Marker
              coordinate={{
                latitude: coords.latitude,
                longitude: coords.longitude,
              }}
              title="Parque constitucion"
            />
          </MapView>
          <Button
            onPress={this.requestLocationPermission}
            style={styles.buttonUbication}>
            <Text style={styles.textButtonUbicacion}>
              {' '}
              Mi Ubicación <Icon name="map-marker" size={15} />{' '}
            </Text>
          </Button>
        </View>
      );
    }
  }
}
export default UiMap;
