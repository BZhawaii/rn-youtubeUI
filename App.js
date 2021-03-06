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
          <Image source={require('./app/images/puppyToon.jpeg')} style={{width: 400, height: 800}} ></Image>
        </View>

        <View style={styles.tabBar} >
          <TouchableOpacity>
            <Icon  name='home' size={25} />
            <Text style={styles.tabTitle} >Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon  name='whatshot' size={25} />
            <Text style={styles.tabTitle} >Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon  name='subscriptions' size={25} />
            <Text style={styles.tabTitle} >Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon  name='folder' size={25} />
            <Text style={styles.tabTitle} >Library</Text>
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
    backgroundColor: 'red',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  }
});
