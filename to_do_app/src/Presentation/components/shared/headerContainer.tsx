import { View, Text, Animated, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { createContext, ReactNode } from 'react'
import { useTaskListAnimations } from '../../hooks/useTaskListAnimations';
import { useLogout } from '../../hooks/useLogout';
import { shcedule , logout as logoutIcon, arrowLeft} from '../../theme/images'
import { Colors, METRICS } from '../../theme/theme';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { StackNavigationProp } from '@react-navigation/stack';


interface HeaderProps {
    scrollY?: Animated.Value;
    children: ReactNode;
    title:string;
    navigation:StackNavigationProp<RootStackParamList, "Task">
  }

const HeaderContainer = ({children , scrollY = new Animated.Value(0),title, navigation}: HeaderProps) => {
    const { headerHeight} = useTaskListAnimations(scrollY)
  const {logout} = useLogout();
  return (
    <Animated.View style={[styles.container,styles.shadow, {height:headerHeight}]}>
      <View style={styles.titlerow}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backIcon}>
            <Image source={arrowLeft} style={styles.backImage}/>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.icon} onPress={logout}>
          <Image source={logoutIcon} style={styles.imageLogout} />
        </TouchableOpacity>
      </View>
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        {children}
        </View>
    </Animated.View>
  );
};

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      paddingTop: 5,
      paddingBottom: 15,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: .8,
        shadowRadius: 2,
    
        elevation: 5,
      },
    titlerow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      padding: 5,
    },
    imageLogout: {
      height: 20,
      width: 20,
    },
    icon:{
        position:'absolute',
        right:5
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
  });
export default HeaderContainer