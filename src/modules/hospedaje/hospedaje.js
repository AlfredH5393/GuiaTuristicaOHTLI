import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import {
  Image,
  Text,
  TouchableNativeFeedback,
  RefreshControl,
  FlatList,
  View,
  ToastAndroid,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NotiConnection from '../sections/checkConnect';
import {Container, Card, Spinner} from 'native-base';
import ListaVacia from '../sections/emptyList';
import Header from '../sections/navBarGoBack';

const ruta = 'http://artehuasteco.com.mx/ohtli/src/img/';
const URLAPIPLACES =
  'http://artehuasteco.com.mx/ohtli/model/APIs/controllerApi.php';
class UiHospedaje extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      refreshing: false,
      connection_Status: false,
      internetReachable: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: <Header name="Hospedajes" leftButton={true} />,
    };
  };
  componentDidMount() {
    this.unsubscribe();
    this.getDataPlaceHospedajes();
  }

  componentDidUpdate() {
    if (this.state.data <= 0 && !this.state.internetReachable) {
      this.setState({internetReachable: true});
      this.getDataPlaceHospedajes();
    }
  }
  unsubscribe() {
    NetInfo.addEventListener((state) => {
      this.setState({connection_Status: state.isConnected});
      this.setState({internetReachable: state.isInternetReachable});
      console.log(this.state.connection_Status + '<----Coneect');
      console.log(this.state.internetReachable + '<----InternetRecheable');
    });
  }

  getDataPlaceHospedajes = () => {
    fetch(URLAPIPLACES, {
      method: 'POST',
      body: JSON.stringify({
        option: 'hospedaje',
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('encontro el json');
        this.setState({
          isLoading: false,
          data: responseJson.hospedajes,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        // Alert.alert('No tiene Datos de internet ');
        ToastAndroid.show(
          'Su conexion no proporciona datos a internet !',
          ToastAndroid.SHORT,
        );
        console.log(error + '<-- error ');
      });
  };

  componentListaVacia = () => {
    return <ListaVacia nameLugar="hospedajes" />;
  };

  componenteErrorConnection = () => {
    return <NotiConnection />;
  };
  _renderIntem = ({item, index}) => {
    const {navigate} = this.props.navigation;
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigate('DetalleHospedaje', {
            id: item.id,
            img: ruta + item.imagen,
            title: item.nombre,
            habitaciones: item.habitaciones,
            habitacionesDisponibles: item.disponibles,
            contacto: item.contacto,
            dirrecion: item.direccion,
          })
        }>
        <View style={styles.contentListPlace}>
          <Card style={styles.contentCardPlace}>
            <Image
              source={{
                uri: 'http://artehuasteco.com.mx/ohtli/src/img/' + item.imagen,
              }}
              style={styles.imgPlace}
            />
            <Text style={styles.titlePlace}>{item.nombre}</Text>
          </Card>
        </View>
      </TouchableNativeFeedback>
    );
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.getDataPlaceHospedajes();
    this.setState({refreshing: false});
  };

  render() {
    const {isLoading, data, connection_Status, internetReachable} = this.state;
    if (!connection_Status) {
      return <NotiConnection />;
    } else {
      return (
        <Container style={styles.container}>
          <Text style={styles.titleScreen2}>Catalogo de Hospedajes</Text>
          <FlatList
            data={this.state.data}
            ListHeaderComponent={
              isLoading && !data.length ? (
                <Spinner color="#34495e" />
              ) : data < 0 ? (
                this.componentListaVacia()
              ) : null
            }
            keyExtractor={(x, i) => i.toString()}
            renderItem={this._renderIntem}
            ListEmptyComponent={() =>
              data.length <= 0 && !isLoading ? this.componentListaVacia() : null
            }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          />
        </Container>
      );
    }
  }
}

export default UiHospedaje;
