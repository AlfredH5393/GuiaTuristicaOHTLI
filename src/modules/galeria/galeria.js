import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  Image,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';
import {Spinner, Container} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import styles from '../../../assets/style/style';
import ListaVacia from '../sections/emptyList';
import NotiConnection from '../sections/checkConnect';
import Header from '../sections/navBarGoBack';

const numColumns = 2;
const rutaImagen = 'http://artehuasteco.com.mx/ohtli/src/img/';
const URLAPIPLACES =
  'http://artehuasteco.com.mx/ohtli/model/APIs/controllerApi.php';

export default class ImageGallery extends Component {
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
      header: <Header name="Galeria" leftButton={true} />,
    };
  };
  componentDidMount() {
    this.unsubscribe();
    this.getDataPhotos();
  }
  componentDidUpdate() {
    if (this.state.data <= 0 && !this.state.internetReachable) {
      this.setState({internetReachable: true});
      this.getDataPhotos();
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

  getDataPhotos = () => {
    fetch(URLAPIPLACES, {
      method: 'POST',
      body: JSON.stringify({
        option: 'galeria',
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('encontro el json');
        this.setState({
          isLoading: false,
          data: responseJson.fotos,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
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

  _renderIntem = ({item, index}) => {
    const {navigate} = this.props.navigation;
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigate('DetalleLugar', {
            id: item.id,
            img: rutaImagen + item.imagen,
            title: item.nombre,
            latitude: item.latitud,
            longitude: item.longitud,
            descripcion: item.descripcion,
            showComponent: 1,
          })
        }>
        <Image
          source={{
            uri: 'http://artehuasteco.com.mx/ohtli/src/img/' + item.imagen,
          }}
          style={styless.Image}
        />
      </TouchableNativeFeedback>
    );
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.getDataPhotos();
    this.setState({refreshing: false});
  };

  render() {
    const {isLoading, data, connection_Status} = this.state;
    if (!connection_Status) {
      return <NotiConnection />;
    } else {
      return (
        <Container style={styles.container}>
          <FlatList
            data={data}
            ListHeaderComponent={() =>
              isLoading && !data.length ? (
                <Spinner color="#34495e" />
              ) : data < 0 ? (
                this.componentListaVacia()
              ) : null
            }
            keyExtractor={(x, i) => i.toString()}
            numColumns={numColumns}
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

const styless = StyleSheet.create({
  Image: {
    flex: 1,
    width: 160,
    height: 200,
    margin: 2,
  },
});
