import { Dimensions, PixelRatio, Platform } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/**
 *  Scales a horizontal size value based on the device's screen width
 */
export const scale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

/**
 * Scales a vertical size value based on the device's screen height
 */
export const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

/**
 * Moderately scales a size value, allowing you to control the scaling factor
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/**
 *  Scales a font size value based on the device's screen width and platform
 */
export const fontScale = (size: number) => {
  const newSize = scale(size);
  return Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
