import {StyleSheet, Dimensions} from 'react-native';
let SCREENHEIGHT = Dimensions.get('window').height;
import {Metrics, Colors} from '../../theme/index';
const white = '#fff',
  black = '#000',
  // garyTitle = '#34495e',
  interRegular = 'Inter-Regular',
  interBold = 'Inter-Bold';

const styles = StyleSheet.create({
  //---------------------estillos HEADER--------------------
  container: {
    flex: Metrics.containerFlex,
    width: '100%',
    backgroundColor: Colors.containerBackground,
  },
  containerMenu: {
    flex: Metrics.containerFlex,
  },
  titleScreen: {
    color: Colors.titleSection,
    paddingTop: Metrics.titleScreen.paddingTop,
    textAlign: 'left',
    fontFamily: interBold,
    paddingLeft: Metrics.titleScreen.paddingLeft,
    letterSpacing: Metrics.titleScreen.letterSpacing,
  },
  titleScreen2: {
    color: Colors.titleSection,
    textAlign: 'left',
    fontFamily: interBold,
    paddingLeft: Metrics.titleScreen2.paddingLeft,
    letterSpacing: Metrics.titleScreen2.letterSpacing,
    marginTop: Metrics.titleScreen2.marginTop,
  },
  headerBody: {
    flex: Metrics.headerBody.flex,
    height: SCREENHEIGHT,
    padding: Metrics.headerBody.padding,
    alignItems: 'center',
    backgroundColor: Colors.headerColor,
  },
  logo: {
    width: 130,
    height: 128,
    marginTop: 10,
    borderRadius: 90,
    marginBottom: 10,
  },
  //----------------------- fIN estilos Header--------------------

  //-------------Estilos Card Menu----------------
  menuContent: {
    flex: 0.8,
    width: '100%',
    height: SCREENHEIGHT,
    justifyContent: 'center',
    paddingBottom: 5,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 197,
    backgroundColor: Colors.containerBackground,
  },
  menuBody: {
    flex: 1.2,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardSmall: {
    width: '39%',
    height: 144,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 9,
    marginBottom: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: Metrics.borderRadiusCardMenu,
  },
  cardMedium: {
    width: '83%',
    height: 150,
    marginTop: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: Metrics.borderRadiusCardMenu,
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '34%',
    height: '34%',
    borderRadius: Metrics.borderRadiusCircle,
  },
  circleM: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '15%',
    height: '32%',
    borderRadius: Metrics.borderRadiusCircle,
  },
  iconMenu: {
    textAlign: 'center',
  },
  purple: {
    backgroundColor: Colors.purple,
  },
  orange: {
    backgroundColor: Colors.orange,
  },
  orangeSoda: {
    backgroundColor: Colors.orangeSoda,
  },
  greenCrayola: {
    backgroundColor: Colors.greenCrayola,
  },
  yankeesBlue: {
    backgroundColor: Colors.yankeesBlue,
  },
  border: {
    width: '90%',
    height: '1%',
    backgroundColor: Colors.separetor,
    marginTop: 6,
    marginBottom: 6,
  },
  titleOption: {
    fontSize: 13,
    fontFamily: interBold,
    color: Colors.textTitleOption,
  },
  textDescripcionOption: {
    textAlign: 'center',
    width: '80%',
    fontSize: 11,
    color: Colors.textDescription,
    fontFamily: interRegular,
  },

  // -------------FIN Es tilos Card Menu----------------
  //-------------Estilo de CARD Place-------------------
  contentListPlace: {
    marginLeft: 4,
    marginRight: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  contentCardPlace: {
    width: '97%',
    height: 200,
    marginBottom: 10,
    borderRadius: Metrics.borderRadiusCardMenu,
  },
  imgPlace: {
    width: '100%',
    height: Metrics.heigthImgPlace,
    borderTopLeftRadius: Metrics.borderRadiusImg,
    borderTopRightRadius: Metrics.borderRadiusImg,
  },
  titlePlace: {
    // position: 'absolute',
    padding: 10,
    // top:120,
    // left:0,
    // right: 0,
    textAlign: 'center',
    fontFamily: interBold,
    color: black,
  },
  infoDisplayNone: {
    display: 'none',
  },
  //-------------Fin Estilo de CARD Place-------------------
  //-------------Estilo detail Place----------------------
  detailLugarContent: {
    flex: Metrics.containerFlex,
    // backgroundColor:"#e7bfbf",
    paddingBottom: 50,
  },
  imgDetailPlace: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  detailPlaceBody: {
    marginTop: 5,
    padding: 12,
  },
  titleDetailPlace: {
    fontFamily: interBold,
    fontSize: 50,
    lineHeight: 49.0,
    paddingTop: 12,
  },
  headerDetail: {
    padding: 13,
    borderRadius: 20,
    marginBottom: 35,
  },
  cardDetailPlace: {
    paddingTop: 30,
    padding: 12,
    borderRadius: 20,
  },
  // cardDetailPlaceSmall:{
  //   padding: 12,
  //   paddingBottom: 45,
  //   borderRadius: 20,
  // },
  // cardDetailPlaceMedium:{
  //   padding: 12,
  //   paddingBottom: 65,
  //   borderRadius: 20,
  // },
  descripcionDeatailPlace: {
    color: Colors.primary,
    fontFamily: interRegular,
    paddingBottom: 40,
  },
  buttonPlace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    top: -25,
  },
  btnMap: {
    padding: 14,
    color: white,
    borderRadius: 20,
    backgroundColor: Colors.btnBlueYonder,
  },
  //-------------Fin Estilo detail Place----------------------
  //--------------- Estilos detalle Info Place Hospedaje And Restaurantes
  contentcardCircle: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardCircle: {
    width: '44%',
    backgroundColor: Colors.containerBackground,
    padding: 15,
    borderRadius: 90,
    height: 154,
    marginLeft: Metrics.cardCirclesMargin,
    marginRight: Metrics.cardCirclesMargin,
    marginTop: Metrics.cardCirclesMargin,
    marginBottom: Metrics.cardCirclesMargin,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCircleMedium: {
    width: '90%',
    backgroundColor: Colors.containerBackground,
    padding: 15,
    borderRadius: 20,
    height: 154,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCircle: {
    fontSize: 15,
    fontFamily: interBold,
  },
  textDirection: {
    textAlign: 'center',
    fontSize: 20,
  },
  textInfoHotel: {
    fontSize: 20,
  },
  //---------------------------------Estilos de Mapas----------
  map: {
    height: '94.5%',
  },
  containerMap: {
    height: '100%',
  },
  buttonUbication: {
    backgroundColor: Colors.btnBlueYonder,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonUbicacion: {
    display: 'flex',
    color: white,
    textAlign: 'center',
  },
  //------------------Fin estilo de Mapa--------------
  containerWork: {
    flex: 2,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.containerBackground,
    padding: 10,
  },
  contentItemsWorking: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imgWorking: {
    width: 400,
    height: 360,
  },
});
export default styles;
