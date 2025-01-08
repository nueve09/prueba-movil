import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import CustomTextInput from '../shared/customTextInput'
import CustomButton from '../shared/customButton'
import { useLogout } from '../../hooks/useLogout'
import { shcedule , logout as logoutIcon} from '../../theme/images'
import { useTaskListAnimations } from '../../hooks/useTaskListAnimations'
import { useTaskViewModel } from '../../viewmodels/useTaskViewModel'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/StackNavigation'

interface headerProps {
  scrollY: Animated.Value;
}

const animatedHeader = ({scrollY}:headerProps) => {

  const { headerHeight, imageHeight ,imageOpacity} = useTaskListAnimations(scrollY)
  const { setValueToFind, valueToFind} = useTaskViewModel();
  const {logout} = useLogout();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Task'>>()

  return (
    <Animated.View style={[styles.container, {height: headerHeight}]}>

      <View style={styles.titlerow}>
        <Text style={styles.title}>Organizador de Tareas</Text>
        <TouchableOpacity style={styles.icon} onPress={logout}>
          <Image source={logoutIcon} style={styles.imageLogout} />
        </TouchableOpacity>
      </View>

      <Animated.Image source={shcedule} style={[styles.imageSchedule,{ opacity: imageOpacity,height: imageHeight  }]} />

      
      <View>
        <CustomTextInput
          placeholder="Buscar tarea"
          setValue={(value) => setValueToFind(value)}
          value={valueToFind}
        />

        <CustomButton label="Agregar" onPress={() => {navigation.navigate('Task',{})}} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'red',
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
    titlerow:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    title:{
      padding:5
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
      marginVertical:10
    },
  })

export default animatedHeader