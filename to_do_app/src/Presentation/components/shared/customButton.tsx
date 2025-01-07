import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {
  ButtonType,
  Colors,
  outlinePurpleShapeButton,
  purpleShapeButton,
} from '../../theme/theme';

interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  onPress: () => void;
  disable?: boolean
}

const CustomButton = ({
  label,
  onPress,
  type = ButtonType.Filled,
  disable = false
}: CustomButtonProps) => {
  return (
    <TouchableOpacity 
        disabled={disable}
        onPress={onPress} 
        style={styles.container}>
      <Image
        source={
          type === ButtonType.Filled
            ? purpleShapeButton
            : outlinePurpleShapeButton
        }
        style={[styles.image,disable && styles.disable]}
      />
      <Text
        style={[
          styles.label,
          type === ButtonType.Filled ? styles.labelWhite : styles.labelPurple,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    justifyContent: 'center',
    marginVertical: 8
  },
  labelWhite: {
    color: '#ffffff',
  },
  labelPurple: {
    color: Colors.primary,
  },
  label: {
    position: 'absolute',
    top: 18,
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  disable:{
    opacity:0.8
  }
});

export default CustomButton;
