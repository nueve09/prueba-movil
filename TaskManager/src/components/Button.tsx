import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  Platform,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, fonts } from '../config/theme';
import { scale, verticalScale, fontScale } from '../utils/responsive';
import ArrowLeft from '../assets/images/Arrow-Left.svg';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'filled' | 'outline';
  icon?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  height?: number;
};

const DEFAULT_HEIGHT = verticalScale(52);

const Button = ({
  title,
  onPress,
  variant = 'filled',
  icon,
  disabled,
  style,
  textStyle,
  height = DEFAULT_HEIGHT,
}: Props) => {
  const isFilled = variant === 'filled';
  const backgroundColor = isFilled ? colors.primary : 'transparent';
  const borderColor = colors.primary;
  const textColor = isFilled ? colors.background : colors.primary;
  const value = Platform.select({
    android: 0.5,
    ios: 0.3,
    default: 0.5,
  });
  const styleDisabled = { opacity: disabled ? value : 1 };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.container, { height }, styleDisabled, style]}
    >
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 331 52"
        style={StyleSheet.absoluteFill}
        preserveAspectRatio="none"
      >
        <Path
          d="M0 15.724C0 8.10061 6.07038 1.88078 13.6925 1.74203C43.5022 1.19938 115.638 -0.00989058 166 0C215.917 0.00980318 287.606 1.20642 317.308 1.74379C324.931 1.8817 331 8.10192 331 15.7262V36.2738C331 43.898 324.931 50.1182 317.308 50.2561C287.606 50.7935 215.917 51.9902 166 52C115.638 52.0099 43.5022 50.8006 13.6925 50.2579C6.07037 50.1191 0 43.8993 0 36.2759V15.724Z"
          fill={backgroundColor}
          stroke={variant === 'outline' ? borderColor : 'none'}
          strokeWidth={variant === 'outline' ? 1 : 0}
        />
      </Svg>

      <Text
        style={[
          styles.text,
          { color: textColor, fontSize: fontScale(19) },
          textStyle,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {title}
      </Text>
      {icon && (
        <View style={[styles.icon, { right: scale(32) }]}>
          <ArrowLeft />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 600,
    flex: 1,
    textAlign: 'center',
    zIndex: 1,
    fontFamily: fonts.lexendSemiBold,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default Button;
