import { scale, fontScale } from '../utils/responsive';
import { Platform } from 'react-native';

export const colors = {
  primary: '#5F33E1',
  background: '#FFFFFF',
  text: '#1C1C1C',
  inputBorder: '#E0E0E0',
  error: '#FF4D4F',
  success: '#4CAF50',
  textSecondary: '#4A4A4A',
  greenGradient: '#46F080',
  yellowGradient: '#EDF046',
  blueGradient: '#46BDF0',
  blueLight: '#92DEFF',
  purpleLight: '#BE9FFF',
  greenLight: '#7FFCAA',
  yellowLight: '#EAED2A',
  blueExtraLight: '#A4E7F9',
  pinkLight: '#FFD7E4',
  shadowBlack: '#000',
  borderGray: '#DCDCDC',
  purpleTransparent: '#5F33E163',
  overlayBlack: 'rgba(0,0,0,0.5)',
};

export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(40),
};

export const fontSizes = {
  xs: fontScale(12),
  sm: fontScale(14),
  base: fontScale(16),
  md: fontScale(18),
  lg: fontScale(22),
  xl: fontScale(28),
  xxl: fontScale(36),
};

export const fonts = {
  // Lexend Deca
  lexendThin: Platform.select({
    ios: 'LexendDeca-Thin',
    android: 'LexendDecaThin',
  }),
  lexendExtraLight: Platform.select({
    ios: 'LexendDeca-ExtraLight',
    android: 'LexendDecaExtraLight',
  }),
  lexendLight: Platform.select({
    ios: 'LexendDeca-Light',
    android: 'LexendDecaLight',
  }),
  lexendRegular: Platform.select({
    ios: 'LexendDeca-Regular',
    android: 'LexendDecaRegular',
  }),
  lexendMedium: Platform.select({
    ios: 'LexendDeca-Medium',
    android: 'LexendDecaMedium',
  }),
  lexendSemiBold: Platform.select({
    ios: 'LexendDeca-SemiBold',
    android: 'LexendDecaSemiBold',
  }),
  lexendBold: Platform.select({
    ios: 'LexendDeca-Bold',
    android: 'LexendDecaBold',
  }),
  lexendExtraBold: Platform.select({
    ios: 'LexendDeca-ExtraBold',
    android: 'LexendDecaExtraBold',
  }),
  lexendBlack: Platform.select({
    ios: 'LexendDeca-Black',
    android: 'LexendDecaBlack',
  }),

  // Lato
  latoThin: Platform.select({ ios: 'Lato-Thin', android: 'LatoThin' }),
  latoThinItalic: Platform.select({
    ios: 'Lato-ThinItalic',
    android: 'LatoThinItalic',
  }),
  latoLight: Platform.select({ ios: 'Lato-Light', android: 'LatoLight' }),
  latoLightItalic: Platform.select({
    ios: 'Lato-LightItalic',
    android: 'LatoLightItalic',
  }),
  latoRegular: Platform.select({ ios: 'Lato-Regular', android: 'LatoRegular' }),
  latoItalic: Platform.select({ ios: 'Lato-Italic', android: 'LatoItalic' }),
  latoBold: Platform.select({ ios: 'Lato-Bold', android: 'LatoBold' }),
  latoBoldItalic: Platform.select({
    ios: 'Lato-BoldItalic',
    android: 'LatoBoldItalic',
  }),
  latoBlack: Platform.select({ ios: 'Lato-Black', android: 'LatoBlack' }),
  latoBlackItalic: Platform.select({
    ios: 'Lato-BlackItalic',
    android: 'LatoBlackItalic',
  }),
};
