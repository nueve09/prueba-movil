import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

import Watch from '../assets/images/Blue-Stopwatch.svg';
import Chart from '../assets/images/Pie-Chart.svg';
import Calendar from '../assets/images/Blue-Calendar.svg';
import Tulips from '../assets/images/Tulips.svg';
import Notifications from '../assets/images/Smartphone-Notifications.svg';
import Female from '../assets/images/Female.svg';
import Coffee from '../assets/images/Coffee-Cup.svg';
import { scale, verticalScale } from '../utils/responsive';
import { colors } from '../config/theme';

const { width, height } = Dimensions.get('window');

const BackgroundImagesLogin = () => {
  return (
    <View style={styles.iconsContainer}>
      <Svg style={StyleSheet.absoluteFillObject} width={width} height={height}>
        <Defs>
          <RadialGradient id="greenGradient" cx="30%" cy="30%" r="25%">
            <Stop
              offset="0%"
              stopColor={colors.greenGradient}
              stopOpacity="0.8"
            />
            <Stop
              offset="0%"
              stopColor={colors.greenGradient}
              stopOpacity="0.3"
            />
            <Stop
              offset="100%"
              stopColor={colors.greenGradient}
              stopOpacity="0"
            />
          </RadialGradient>

          <RadialGradient id="yellowGradient" cx="50%" cy="30%" r="25%">
            <Stop
              offset="0%"
              stopColor={colors.yellowGradient}
              stopOpacity="0.8"
            />
            <Stop
              offset="0%"
              stopColor={colors.yellowGradient}
              stopOpacity="0.3"
            />
            <Stop
              offset="100%"
              stopColor={colors.yellowGradient}
              stopOpacity="0"
            />
          </RadialGradient>

          <RadialGradient id="blueGradient" cx="70%" cy="70%" r="35%">
            <Stop
              offset="0%"
              stopColor={colors.blueGradient}
              stopOpacity="0.7"
            />
            <Stop
              offset="0%"
              stopColor={colors.blueGradient}
              stopOpacity="0.3"
            />
            <Stop
              offset="60%"
              stopColor={colors.blueGradient}
              stopOpacity="0"
            />
          </RadialGradient>
        </Defs>

        <Circle cx="20%" cy="30%" r="25%" fill="url(#greenGradient)" />
        <Circle cx="80%" cy="20%" r="25%" fill="url(#yellowGradient)" />
        <Circle cx="15%" cy="45%" r="25%" fill="url(#blueGradient)" />
        <Circle cx="70%" cy="15%" r="0.5%" fill={colors.blueLight} />
        <Circle cx="56%" cy="18%" r="0.3%" fill={colors.purpleLight} />
        <Circle cx="80%" cy="45%" r="0.3%" fill={colors.greenLight} />
        <Circle cx="70%" cy="47%" r="0.5%" fill={colors.yellowLight} />
        <Circle cx="50%" cy="49%" r="0.3%" fill={colors.blueExtraLight} />
        <Circle cx="40%" cy="48%" r="0.5%" fill={colors.pinkLight} />
      </Svg>
      <View style={styles.iconsContainer} pointerEvents="none">
        <View style={[styles.iconWrapper, styles.watchPosition]}>
          <Watch width={scale(40)} height={verticalScale(50)} />
        </View>

        <View style={[styles.iconWrapper, styles.chartPosition]}>
          <Chart width={scale(26)} height={verticalScale(26)} />
        </View>

        <View style={[styles.iconWrapper, styles.calendarPosition]}>
          <Calendar width={scale(30)} height={verticalScale(26)} />
        </View>

        <View style={[styles.iconWrapper, styles.tulipsPosition]}>
          <Tulips width={scale(36)} height={verticalScale(52)} />
        </View>

        <View style={[styles.iconWrapper, styles.coffeePosition]}>
          <Coffee width={scale(18)} height={verticalScale(22)} />
        </View>

        <View style={[styles.iconWrapper, styles.notificationsPosition]}>
          <Notifications width={scale(62)} height={verticalScale(42)} />
        </View>

        <View style={[styles.iconWrapper, styles.femalePosition]}>
          <Female width={scale(159)} height={verticalScale(184)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flex: 1,
  },
  iconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  watchPosition: {
    top: '25%',
    left: '25%',
  },
  chartPosition: {
    top: '50%',
    left: '20%',
  },
  calendarPosition: {
    top: '45%',
    right: '15%',
    transform: [{ rotate: '20deg' }],
  },
  tulipsPosition: {
    bottom: '10%',
    left: '20%',
  },
  coffeePosition: {
    bottom: '10%',
    left: '18%',
    transform: [{ rotate: '35deg' }],
  },
  notificationsPosition: {
    bottom: '25%',
    right: '18%',
    transform: [{ rotate: '180deg' }],
    zIndex: 2,
  },
  femalePosition: {
    top: '45%',
    left: '60%',
    transform: [{ translateX: -100 }],
  },
});

export default BackgroundImagesLogin;
