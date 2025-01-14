import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import CustomTextInput from '../shared/customTextInput'
import CustomButton from '../shared/customButton'
import { shcedule , logout as logoutIcon} from '../../theme/images'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/StackNavigation'
import { Colors, GlobalFontFamily } from '../../theme/theme'
import HeaderContainer from '../shared/headerContainer'
import { useTaskViewModel } from '../../../viewmodels/useTaskViewModel'
import { useTaskListAnimations } from '../../../hooks/task/useTaskListAnimations'

interface headerProps {
  scrollY: Animated.Value;
}

const animatedHeader = ({scrollY}:headerProps) => {

  const { imageHeight ,imageOpacity} = useTaskListAnimations(scrollY)
  const { setValueToFind, valueToFind } = useTaskViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Task'>>();

  return (
    <HeaderContainer title='Organizador de tareas' floating={true} scrollY={scrollY}>
      <View style={styles.imageContainer}>
        <View style={{ flex:1, justifyContent:'center'}}>
          <Animated.Image source={shcedule} style={[styles.imageSchedule,{ opacity: imageOpacity,height: imageHeight  }]} />
        </View>
      <View>
        <CustomTextInput
          placeholder="Buscar tarea"
          setValue={(value) => setValueToFind(value)}
          value={valueToFind}
        />

        <CustomButton label="Agregar" onPress={() => {navigation.navigate('Task',{})}} />
      </View>
      </View>
    </HeaderContainer>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:Colors.white,
      margin:0,
      borderBottomLeftRadius:40,
      borderBottomRightRadius:40,
      paddingHorizontal:20,
      justifyContent:'space-between',
      paddingTop:5,
      paddingBottom:15,
      position: 'absolute',
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
   
    icon:{
      position:'absolute',
      right:5
    },
    imageLogout:{
      height:20,
      width:20
    },
    imageSchedule:{
      alignSelf:'center',
      marginVertical:10,
      resizeMode:'contain',
    },
    imageContainer:{
        flex:1, 
        width:'100%',
        height:'100%',
        justifyContent:'space-between'
    }
  })

export default animatedHeader