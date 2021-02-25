import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class UiNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameScreen: props.name,
    };
  }

  render() {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.contentHeader}>
          <Text style={styles.textHeader2}> {this.state.nameScreen} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#506eab',
    paddingTop: 14,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  contentHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeaderSimple: {
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    width: '100%',
    fontSize: 23,
    color: 'white',
    paddingTop: 20,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
export default UiNavBar;
