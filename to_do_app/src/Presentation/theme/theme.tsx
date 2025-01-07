import { Dimensions } from "react-native"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const METRICS = {
    width,
    height
}

export const Colors = {
    primary: '#5F33E1',
    accent: '#cccccc'
}

export enum ButtonType  {
    Rounded = 'rounded',
    Filled = 'filled'
}

export const purpleShapeButton = require('../../assets/roundedButton.png')
export const outlinePurpleShapeButton = require('../../assets/outlineRoundedButton.png')
export const logout = require('../../assets/logout.png')