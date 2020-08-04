import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import * as theme from '../theme';
import { Block, Text } from '../components';
import mocks from '../settings';

class Dashboard extends Component {
  static navigationOptions = {
    headerShown: false,
    // title: '',
    // headerStyle: {
    //   elevation: 0,
    //   shadowOpacity: 0,
    // },
  };

  render() {
    const { navigation, settings } = this.props;
    const LightIcon = settings['light'].icon;
    const AcIcon = settings['ac'].icon;
    const FanIcon = settings['fan'].icon;
    const TemperatureIcon = settings['temperature'].icon;
    const WifiIcon = settings['wi-fi'].icon;
    const ElectricityIcon = settings['electricity'].icon;

    return (
      <ScrollView contentContainerStyle={styles.dashboard} showsVerticalScrollIndicator={false}>
        <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
          <Text welcome> Welcome</Text>
          <Text name> Jhonny Walker</Text>
        </Block>

        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: 'flex-end' }}>
            <Text h1>34</Text>
            <Text h1 size={34} height={80} weight="600" spacing={0.1}>
              °C
            </Text>
          </Block>
          <Block flex={1} column>
            <Text caption>Humidity</Text>
            <Text>Chart</Text>
          </Block>
        </Block>

        <Block column space="between">
          <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Settings', { name: 'light' });
              }}>
              <Block center middle style={styles.button}>
                <LightIcon size={38} />
                <Text button>{settings['light'].name}</Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Settings', { name: 'ac' });
              }}>
              <Block center middle style={styles.button}>
                <AcIcon size={38} />
                <Text button>{settings['ac'].name}</Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Settings', { name: 'temperature' });
              }}>
              <Block center middle style={styles.button}>
                <TemperatureIcon size={38} />
                <Text button>{settings['temperature'].name}</Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Settings', { name: 'fan' });
              }}>
              <Block center middle style={styles.button}>
                <FanIcon size={38} />
                <Text button>{settings['fan'].name}</Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Settings', { name: 'wi-fi' });
              }}>
              <Block center middle style={styles.button}>
                <WifiIcon size={38} />
                <Text button>{settings['wi-fi'].name}</Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Settings', { name: 'electricity' });
              }}>
              <Block center middle style={styles.button}>
                <ElectricityIcon size={38} />
                <Text button>{settings['electricity'].name}</Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

Dashboard.defaultProps = {
  settings: mocks,
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    padding: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 4,
    flexGrow: 1,
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});
