import React, {Component} from 'react';
import styles from '../../../assets/style/style';
import ListaVacia from '../sections/emptyList';
import {
  Image,
  Text,
  TouchableNativeFeedback,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {Container, View, Card, Spinner} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import NotiConnection from '../sections/checkConnect';
import APILUGARES from '../../util/clsLugar';
import Header from '../sections/navBarGoBack';

const ruta = 'http://artehuasteco.com.mx/ohtli/src/img/';
class UiLugares extends Component {
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
      header: <Header name="Lugares" leftButton={true} />,
    };
  };

  componentDidMount() {
    this.unsubscribe();
    this.setDataPlace();
  }
  componentDidUpdate() {
    if (this.state.data && !this.state.internetReachable) {
      this.setState({internetReachable: true});
      this.setDataPlace();
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

  setDataPlace = async () => {
    const response = await APILUGARES.obtenerLugares();
    try {
      console.log('Encontro el json');
      this.setState({
        isLoading: false,
        data: response.lugares,
      });
      console.log('se colocarn los datos');
      console.log('lugares : ' + this.state.data);
    } catch (error) {
      ToastAndroid.show(
        'Su conexion no proporciona datos a internet !',
        ToastAndroid.SHORT,
      );
      console.log(`Error --> ${error}`);
    }
  };

  componentListaVacia = () => {
    return <ListaVacia nameLugar="lugares" />;
  };

  _renderIntem = ({item, index}) => {
    const {navigate} = this.props.navigation;
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigate('DetalleLugar', {
            id: item.id,
            img: ruta + item.imagen,
            title: item.nombre,
            latitude: item.latitud,
            longitude: item.logitud,
            descripcion: item.descripcion,
            showComponent: 1,
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
    this.setDataPlace();
    this.setState({refreshing: false});
  };

  render() {
    const {isLoading, data, connection_Status} = this.state;
    if (!connection_Status) {
      return <NotiConnection />;
    } else {
      return (
        <Container style={styles.container}>
          <Text style={styles.titleScreen2}>Catalogo de lugares</Text>
          <FlatList
            data={this.state.data}
            ListHeaderComponent={() =>
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

export default UiLugares;
