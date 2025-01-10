import { View, Image } from 'react-native'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigation';
import HeaderContainer from '../components/shared/headerContainer';
import { principal_detail } from '../theme/images';
import CustomTextInput from '../components/shared/customTextInput';
import CustomButton from '../components/shared/customButton';
import { ButtonType } from '../theme/theme';
import KeyboardAvoidContainer from '../components/shared/keyboardingAvoidContainer';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomDropDown from '../components/shared/customDropDown';
import ErrorLabel from '../components/shared/errorLabel';
import { useTaskForm } from '../hooks/useTaskForm';
import GlobalModal from '../components/modals/globalModal';
import { useGloblaModalViewModel } from '../viewmodels/useGloblaModalViewModel';


type TaskDetailsRouteProp = RouteProp<RootStackParamList, 'Task'>;

interface TaskDetailsProps {
  route: TaskDetailsRouteProp;
}
const TaskScreen = ({route}:TaskDetailsProps) => {
  const {task} = route.params;
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Task'>>()

  const { 
    taskForm, 
    setTitle, 
    setStatus, 
    error, 
    save, 
    dimiss
  } = useTaskForm(task)

  const {removeItem} = useGloblaModalViewModel()
  
  return (
    <KeyboardAvoidContainer>
      <GlobalModal action={()=>removeItem(()=>navigation.goBack())}/>
      <HeaderContainer title={!task?'Agregar tarea':'Editar tarea'} navigation={navigation}>
        <Image source={principal_detail}/>
      </HeaderContainer>

      <View style={{justifyContent:'space-between', flex:1, marginTop:30, paddingHorizontal:20}}>
        <View>
          <CustomTextInput
            placeholder='Nombre de la tarea'
            setValue={(value)=>setTitle(value)}
            value={taskForm?.title}
          />
          <CustomDropDown
            placeholder='Status'
            setValue={(value)=>setStatus(value)}
            value={taskForm?.completed}
          />
        </View>
        <View>
          <ErrorLabel error={error}/>
          <CustomButton
            label='Guardar'
            onPress={save}
            type={ButtonType.Filled}
          />
          <CustomButton
            label={!task?'Cancelar':'Eliminar'}
            onPress={dimiss}
            type={ButtonType.Rounded}
          />
        </View>
      </View>
      
    </KeyboardAvoidContainer>
  )
}

export default TaskScreen;