import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import { Block, Text } from '../components';
import mocks from '../settings';

class Settings extends Component {
  static navigationOptions = {
    title: '',
    headerBackImage: () => (
      <FontAwesome
        size={theme.sizes.font * 1.5}
        color={theme.colors.black}
        name="arrow-left"></FontAwesome>
    ),
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
  };

  renderController() {
    return (
      <Block flex={1} right style={styles.contoller}>
        <Block center style={styles.contollerValue}>
          <Text color="white">34</Text>
        </Block>
        <Block flex={0.8} style={[styles.controllerOverlay]} />
      </Block>
    );
  }

  render() {
    const { navigation, settings } = this.props;
    const { name } = this.props.route.params;
    const Icon = settings[name].icon;
    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.8} row>
          <Block column>
            <Icon size={theme.sizes.font * 4} color={theme.colors.gray}></Icon>
            <Block flex={1.2} row style={{ alignItems: 'flex-end' }}>
              <Text h1>34</Text>
              <Text h1 size={34} height={80} weight="600" spacing={0.1}>
                °C
              </Text>
            </Block>
            <Text caption>Temperature</Text>
          </Block>
          <Block flex={1} center>
            {this.renderController()}
          </Block>
        </Block>

        <Block flex={1} center middle>
          <Text> Extra settings</Text>
        </Block>
      </Block>
    );
  }
}

Settings.defaultProps = {
  settings: mocks,
};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  contoller: {
    width: 85,
    borderRadius: 10,
    backgroundColor: theme.colors.gray,
    alignContent: 'center',
  },
  controllerOverlay: {
    width: 85,
    borderRadius: 10,
    backgroundColor: theme.colors.accent,
  },
  contollerValue: {
    paddingTop: 24,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
});
