import { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { METRICS } from '../../view/theme/theme';

export const useTaskListAnimations = (scrollY: Animated.Value) => {
  const headerHeight = scrollY.interpolate({
    inputRange: [0, METRICS.height / 2.5], 
    outputRange: [METRICS.height / 2.5, 200], 
    extrapolate: 'clamp', 
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, METRICS.height / 2.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const imageHeight = scrollY.interpolate({
    inputRange: [0, METRICS.height / 2.5],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });

  const listHeight = scrollY.interpolate({
    inputRange: [0, METRICS.height / 2.5],
    outputRange: [METRICS.height / 2.5 + 20, 150],
    extrapolate: 'clamp', 
  });

  return {
    headerHeight,
    imageOpacity,
    imageHeight,
    listHeight
  };
};