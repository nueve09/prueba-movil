import { Dimensions, StyleSheet } from "react-native"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const METRICS = {
    width,
    height
}


export const GlobalFontFamily = {
    lex_black:'LexendDeca-Black',
    lex_bold:'LexendDeca-Bold',
    lex_extra_bold:'LexendDeca-ExtraBold',
    lex_light:'LexendDeca-Light',
    lex_extra_light:'LexendDeca-ExtraLight',
    lex_regular:'LexendDeca-Regular',
    lex_medium:'LexendDeca-Medium',
    lex_semi_bold:'LexendDeca-SemiBold',
    lex_thin:'LexendDeca-Thin',

    lato_black:'Lato-Black',
    lato_black_italic:'Lato-Black-Italic',
    lato_bold:'Lato-Bold',
    lato_bold_italic:'Lato-BoldItalic',
    lato_italic:'Lato-Italic',
    lato_light:'Lato-Light',
    lato_light_italic:'Lato-LightItalic',
    lato_regular:'Lato-Regular',
    lato_thin:'Lato-Hairline',
    lato_thin_italic:'Lato-HairlineItalic',

}

export const Colors = {
    primary: '#5F33E1',
    accent: '#cccccc',
    white: '#ffffff',
    gray: '#4A4A4A'
}

export enum ButtonType  {
    Rounded = 'rounded',
    Filled = 'filled'
}


export const GlobalStyles = StyleSheet.create({
    globalBackground:{
        backgroundColor:Colors.white
    }
});
