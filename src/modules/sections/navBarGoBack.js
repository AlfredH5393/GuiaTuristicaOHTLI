import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';

class UiNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameScreen: props.name,
      leftButton: props.leftButton,
    };
  }

  //Function para volver
  goBack = () => this.props.navigation.goBack();

  render() {
    if (this.state.leftButton) {
      return (
        <View style={styles.containerHeader}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this.goBack}>
              <Icon name="angle-left" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleWrap}>
            <Text style={styles.textHeader2}> {this.state.nameScreen} </Text>
          </View>
          {/* <View style={[styles.displayNone, styles.iconContainer]}>
            <Icon name="tag" color="#fff" size={25} style={styles.displayNone} />
          </View> */}
        </View>
      );
    } else {
      return (
        <View style={styles.containerHeader}>
          <View style={styles.contentHeader}>
            <Text style={styles.textHeaderSimple}> {this.state.nameScreen} </Text>
          </View>
        </View>
      );
    }
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
  textHeader2: {
    textAlign: 'center',
    fontWeight: '300',
    width: '100%',
    fontSize: 24,
    color: 'white',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingTop: 20,
    fontFamily: 'Inter-Bold',
  },
  iconContainer: {
    display: 'flex',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  titleWrap: {
    flex: 0.89,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default withNavigation(UiNavBar);
