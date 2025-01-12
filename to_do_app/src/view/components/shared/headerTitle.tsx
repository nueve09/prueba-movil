import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoutButton from './logoutButton'
import { arrowLeft } from '../../theme/images'
import { Colors, GlobalFontFamily } from '../../theme/theme';
import { useNavigationActions } from '../../../hooks/navigation/useNabvigationActions';

interface HeaderTitleProps {
    title:string;
}

const HeaderTitle = ({title}: HeaderTitleProps) => {
  const {goBack , canGoBack }  = useNavigationActions();
  return (
    <View style={styles.titlerow}>
      { canGoBack() &&
        <TouchableOpacity onPress={goBack} style={styles.backIcon}>
        <Image source={arrowLeft} style={styles.backImage} />
      </TouchableOpacity>}
      <Text style={styles.title}>{title}</Text>
      <LogoutButton />
    </View>
  );
};

export default HeaderTitle

const styles = StyleSheet.create({
    titlerow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontFamily:GlobalFontFamily.lex_regular,
        padding: 5,
      },
      backIcon:{
        position:'absolute',
        left:5,
    },
    backImage:{
        width:30,
        height:30,
        resizeMode:'contain',
        transform:[{ rotate: '180deg' }],
        tintColor:Colors.primary
    }
})