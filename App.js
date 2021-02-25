import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/modules/home/home';
import Rutas from './src/modules/mapa/mapa';
import Lugares from './src/modules/lugares/lugares';
import Hospedaje from './src/modules/hospedaje/hospedaje';
import Work from './src/modules/sections/proximante';
import Gallery from './src/modules/galeria/galeria';
import DetalleLugar from './src/modules/lugares/detailPlace';
import DetalleHospedaje from './src/modules/hospedaje/detailHospedaje';
import Splash from './screens/splashScreen';
import Header from './src/modules/sections/navBar';
import Header2 from './src/modules/sections/navBarGoBack';

const headerAling = 'center',
  fontFamlyInter = 'Inter-Bold',
  colorWhite = '#fff',
  colorHeader = '#506eab';
const typeText = 'uppercase';

const ohtliNavigator = createStackNavigator(
  {
    // Home: {
    //   screen: Home,
    //   navigationOptions: {
    //     title: 'Guia Turistica',
    //     headerTitleAlign: headerAling,
    //     headerTitleStyle: {
    //       color: colorWhite,
    //       fontFamily: fontFamlyInter,
    //     },
    //     headerStyle: {
    //       backgroundColor: colorHeader,
    //     },
    //   },
    // },
    Home,
    Rutas,
    Lugares,
    DetalleLugar,
    Hospedaje,
    DetalleHospedaje,
    Work,
    Gallery,
    Header2,
  },
  {defaultNavigationOptions: {header: <Header> </Header>}},
);

const splashNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: splashNavigator,
    Home: ohtliNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(SwitchNavigator);
