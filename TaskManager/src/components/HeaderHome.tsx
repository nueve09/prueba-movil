import React, { PropsWithChildren } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useAuthStore } from '../state/useAuthStore';
import { colors, fonts, fontSizes } from '../config/theme';
import { scale, verticalScale } from '../utils/responsive';
import Logout from '../assets/images/Logout.svg';
import Watch from '../assets/images/Blue-Stopwatch.svg';

const { width } = Dimensions.get('window');

const HeaderHome: React.FC<PropsWithChildren> = ({ children }) => {
  const headerHeight = 200;
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

          <Circle cx="30%" cy="80%" r="60%" fill="url(#greenGradient)" />
          <Circle cx="90%" cy="20%" r="55%" fill="url(#yellowGradient)" />
        </Svg>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{'Organizador de Tareas'}</Text>

          <TouchableOpacity style={styles.floatingButton} onPress={logout}>
            <Logout />
          </TouchableOpacity>

          <View style={styles.iconsContainer}>
            <View style={styles.iconWrapper}>
              <Watch width={45} height={45} />
            </View>

            <View style={styles.iconWrapper}>
              <Image
                source={require('../assets/images/Blue-Calendar.png')}
                style={styles.calendarIcon}
              />
            </View>
          </View>
        </View>

        <View style={styles.contentSection}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  headerSection: {
    backgroundColor: colors.background,
    paddingTop: 10,
    paddingBottom: 20,
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
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  contentSection: {
    paddingHorizontal: scale(30),
    paddingTop: 10,
    width: '100%',
  },
  calendarIcon: {
    width: scale(30),
    height: verticalScale(30),
    resizeMode: 'cover',
    transform: [{ rotate: '10deg' }],
  },
});
