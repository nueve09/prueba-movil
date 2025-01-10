import { Dimensions, StyleSheet } from "react-native"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const METRICS = {
    width,
    height
}


export const GlobalFontFamily = {
    black:'LexendDeca-Black',
    bold:'LexendDeca-Bold',
    extra_bold:'LexendDeca-ExtraBold',
    light:'LexendDeca-Light',
    extra_light:'LexendDeca-ExtraLight',
    regular:'LexendDeca-Regular',
    medium:'LexendDeca-Medium',
    semi_bold:'LexendDeca-SemiBold',
    thin:'LexendDeca-Thin',

}

export const Colors = {
    primary: '#5F33E1',
    accent: '#cccccc',
    white: '#ffffff'
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
