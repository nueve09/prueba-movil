import { View, Animated, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { useTaskListAnimations } from '../../hooks/useTaskListAnimations';
import { Colors, GlobalFontFamily } from '../../theme/theme';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import HeaderTitle from './headerTitle';
import LinearGradient from 'react-native-linear-gradient';


interface HeaderProps {
    scrollY?: Animated.Value;
    children: ReactNode;
    title:string;
    floating:boolean
  }

const HeaderContainer = ({children , scrollY = new Animated.Value(0),title,floating}: HeaderProps) => {
    const { headerHeight} = useTaskListAnimations(scrollY)
  return (
    <Animated.View style={[styles.container,styles.shadow, {height:headerHeight, position:floating?'absolute':'relative'}]}>
      <LinearGradient colors={['#DAFBE6','#ffffff','#F5FAE1']}   start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.0}}
 style={[{flex:1, position:'absolute', width:'100%', top:0, right:0,bottom:0,left:0, alignSelf:'stretch',  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,}]}>

      <>
      <HeaderTitle title={title}/>
        <View style={styles.childrenContainer}>
        {children}
        </View>
      </>
    </LinearGradient>
    </Animated.View>
  );
};

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      justifyContent: 'space-between',
      paddingTop: 5,
      paddingBottom: 15,
      borderWidth:2,
      borderColor:'#cccc',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      overflow:'hidden'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: .8,
        shadowRadius: 2,
    
        elevation: 1,
      },
    childrenContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20
    }
  });
export default HeaderContainer