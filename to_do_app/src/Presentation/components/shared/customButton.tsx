import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {
  arrowLeft,
  outlinePurpleShapeButton,
  purpleShapeButton,
} from '../../theme/images';
import { ButtonType, Colors, GlobalFontFamily } from '../../theme/theme';


interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  onPress: () => void;
  disable?: boolean,
  showIcon?:boolean
}

const CustomButton = ({
  label,
  onPress,
  type = ButtonType.Filled,
  disable = false,
  showIcon =false
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
      {
        showIcon&&
              <Image source={arrowLeft} style={{position:'absolute', right:10, height:25, width:25}}/>

      }
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
    top: 15,
    width: '100%',
    textAlign: 'center',
    fontSize:20,
    fontFamily:GlobalFontFamily.lex_bold
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
