import React, { Component } from 'react';
import { StyleSheet, Slider } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
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

  state = {
    temperature: 27,
    direction: 45,
    speed: 12,
  };

  initialDirection = this.state.direction;
  initialSpeed = this.state.speed;

  render() {
    const { navigation, settings } = this.props;
    const { name } = this.props.route.params;
    const Icon = settings[name].icon;
    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.8} row>
          <Block flex={1.3} column style={{ justifyContent: 'flex-start' }}>
            <Icon size={theme.sizes.font * 4} color={theme.colors.gray2}></Icon>
            <Block row style={{ alignItems: 'stretch' }}>
              <Text h1>{this.state.temperature}</Text>
              <Text h1 size={34} height={70} weight="600" spacing={0.1}>
                °C
              </Text>
            </Block>
            <Text caption>Temperature</Text>
          </Block>
          <Block flex={1} center>
            <PanSlider
              initialValue={this.state.temperature}
              onTemperatureChange={(value) => this.setState({ temperature: value })}
            />
          </Block>
        </Block>

        <Block flex={1} style={{ paddingTop: theme.sizes.base * 2 }}>
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">
                Direction
              </Text>
              <Text welcome color="black">
                {this.state.direction}
              </Text>
            </Block>
            <Slider
              value={this.initialDirection}
              minimumValue={0}
              maximumValue={90}
              thumbTintColor={theme.colors.accent}
              minimumTrackTintColor={theme.colors.accent}
              maximumTrackTintColor={theme.colors.gray}
              onValueChange={(value) => this.setState({ direction: parseInt(value, 10) })}
            />
          </Block>

          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">
                Speed
              </Text>
              <Text welcome color="black">
                {this.state.speed}
              </Text>
            </Block>
            <Slider
              value={this.initialSpeed}
              minimumValue={0}
              maximumValue={30}
              thumbTintColor={theme.colors.accent}
              minimumTrackTintColor={theme.colors.accent}
              maximumTrackTintColor={theme.colors.gray}
              onValueChange={(value) => this.setState({ speed: parseInt(value, 10) })}
            />
          </Block>
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
    backgroundColor: 'white',
  },
});
