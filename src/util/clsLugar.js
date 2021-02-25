import {ToastAndroid} from 'react-native';
const URLAPILUGAR =
  'http://artehuasteco.com.mx/ohtli/model/APIs/Apilugares.php';
class ClsLugar {
  // function requuestApiLugares() {
  // fetch(URLAPIPLACES, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log('encontro el json');
  //     this.setState({
  //       isLoading: false,
  //       data: responseJson.lugares,
  //     });
  //     console.log(this.state.data);
  //   })
  //   .catch((error) => {
  //     ToastAndroid.show(
  //       'Su conexion no proporciona datos a internet !',
  //       ToastAndroid.SHORT,
  //     );
  //     console.log(error + '<-- error ');
  //   });
  // }

  async obtenerLugares() {
    const query = await fetch(URLAPILUGAR, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = query.json();
    return data;
  }
}
export default new ClsLugar();
