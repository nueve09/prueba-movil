import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useAuthStore } from '../state/useAuthStore';
import { colors, fonts, fontSizes } from '../config/theme';
import { scale, verticalScale } from '../utils/responsive';
import Logout from '../assets/images/Logout.svg';
import Female from '../assets/images/Female.svg';
import Chart from '../assets/images/Pie-Chart.svg';
import Notifications from '../assets/images/Smartphone-Notifications.svg';
import ArrowBack from '../assets/images/Arrow-Back.svg';

const { width } = Dimensions.get('window');

interface HeaderProps {
  navigation: any;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ navigation, title }) => {
  const headerHeight = 250;
  const logout = useAuthStore(state => state.logout);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerSection}>
        <Svg
          style={[
            StyleSheet.absoluteFillObject,
            {
              borderBottomLeftRadius: verticalScale(40),
              borderBottomRightRadius: verticalScale(40),
            },
          ]}
          width={width}
          height={verticalScale(headerHeight)}
          viewBox={`0 0 ${width} ${headerHeight}`}
        >
          <Defs>
            <RadialGradient id="greenGradient" cx="30%" cy="30%" r="35%">
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

            <RadialGradient id="yellowGradient" cx="50%" cy="30%" r="55%">
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
          </Defs>

          <Circle cx="30%" cy="90%" r="60%" fill="url(#greenGradient)" />
          <Circle cx="90%" cy="20%" r="55%" fill="url(#yellowGradient)" />
        </Svg>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity style={styles.floatingButton} onPress={logout}>
            <Logout />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowBack />
          </TouchableOpacity>

          <View style={styles.iconsContainer} pointerEvents="none">
            <View style={[styles.iconWrapper, styles.chartIcon]}>
              <Chart width={25} height={25} />
            </View>
            <View style={[styles.iconWrapper, styles.femaleIcon]}>
              <Female width={scale(180)} height={verticalScale(180)} />
            </View>

            <View style={[styles.iconWrapper, styles.notificationIcon]}>
              <Notifications
                width={90}
                height={90}
                style={{ transform: [{ rotateY: '180deg' }] }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  headerSection: {
    backgroundColor: colors.background,
    paddingTop: 10,
    paddingBottom: 20,
    height: verticalScale(250),
    borderBottomLeftRadius: verticalScale(40),
    borderBottomRightRadius: verticalScale(40),
    shadowColor: colors.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  headerContainer: {
    position: 'relative',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: fontSizes.sm,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: fonts.lexendRegular,
  },
  floatingButton: {
    position: 'absolute',
    top: -5,
    right: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  iconsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  iconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartIcon: {
    top: 60,
    left: '15%',
  },
  femaleIcon: {
    top: '100%',
    left: '25%',
  },
  notificationIcon: {
    top: 90,
    right: '20%',
  },
});
