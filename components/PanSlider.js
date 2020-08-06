import React, { Component } from 'react';
import { StyleSheet, PanResponder, Dimensions } from 'react-native';

import * as theme from '../theme';
import Block from './Block';
import Text from './Text';

const { height } = Dimensions.get('window');
const CONTROLLER_HEIGHT = height * 0.28;

class PanSlider extends Component {
  state = {
    panValue:
      CONTROLLER_HEIGHT * (this.props.initialValue / (this.props.maxValue - this.props.minValue)),
    rangeValue: this.props.initialValue,
    percentage: (this.props.initialValue / (this.props.maxValue - this.props.minValue)) * 100,
  };

  handleMove = (moveValue) => {
    const { panValue } = this.state;
    const { minValue, maxValue } = this.props;
    const max = maxValue > CONTROLLER_HEIGHT ? maxValue : CONTROLLER_HEIGHT;
    const range = (maxValue || max) - minValue;
    let value = panValue - moveValue / range;
    if (value > max) {
      value = max;
    }
    if (value < minValue) {
      value = minValue;
    }
    const percentage = (value / max) * 100;
    const rangeValue = (range * percentage) / 100;

    this.setState({ panValue: value, rangeValue, percentage });
    this.props.onTemperatureChange(parseInt(rangeValue, 10));
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, { dy }) => this.handleMove(dy),
  });
  render() {
    const { minValue } = this.props;
    const { rangeValue, percentage } = this.state;
    return (
      <Block right {...this.panResponder.panHandlers} style={styles.contoller}>
        <Block center style={styles.contollerValue}>
          <Text weight="700" color="black">
            {rangeValue ? parseInt(rangeValue, 10) : minValue}
          </Text>
        </Block>
        <Block style={[styles.controllerOverlay, { height: `${percentage || minValue}%` }]} />
      </Block>
    );
  }
}

PanSlider.defaultProps = {
  minValue: 10,
  maxValue: 45,
  initialValue: 0,
};

export default PanSlider;

const styles = StyleSheet.create({
  contoller: {
    width: 85,
    height: CONTROLLER_HEIGHT,
    borderRadius: 10,
    backgroundColor: theme.colors.gray2,
    alignContent: 'center',
    overflow: 'hidden',
  },
  controllerOverlay: {
    width: 85,
    backgroundColor: theme.colors.accent,
  },
  contollerValue: {
    top: 24,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
});
