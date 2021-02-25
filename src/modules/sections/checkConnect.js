import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, Platform} from 'react-native';
class UiCheckInternet extends Component {
  render() {
    return (
      <SafeAreaView style={styles.backgroundArea}>
        <Text style={styles.textConnect}>No tiene conexion a internet</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundArea: {
    backgroundColor: '#e74c3c',
  },
  textConnect: {
    padding: 12,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 1.5,
    fontSize: Platform.OS === 'android' ? 13 : 16,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
  },
});
export default UiCheckInternet;
