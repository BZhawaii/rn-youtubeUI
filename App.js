import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
          <Image source={require('./app/images/youtubeLogo.png')} style={{width: 98, height: 22}} />
          <View style={styles.rightNav}>
            <TouchableOpacity> 
              <Icon style={styles.navItem} name='search' size={25}  />
            </TouchableOpacity>
            <TouchableOpacity> 
              <Icon name='account-circle' size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body} >

        </View>

        <View style={styles.tabBar} >
          <TouchableOpacity>
            <Icon  />
          </TouchableOpacity>
          <TouchableOpacity>

          </TouchableOpacity>
          <TouchableOpacity>

          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
