import { View, Image } from 'react-native'
import React, { useState } from 'react'
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


type TaskDetailsRouteProp = RouteProp<RootStackParamList, 'Task'>;

interface TaskDetailsProps {
  route: TaskDetailsRouteProp;
}
const TaskScreen = ({route}:TaskDetailsProps) => {
  const {task} = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Task'>>()
  const [taskName,setTaskName] = useState(task?.title||'');
  const [status,setStatus] = useState(task?.completed||'') 

  return (
    <KeyboardAvoidContainer>
      <HeaderContainer title={!task?'Agregar tarea':'Editar tarea'} navigation={navigation}>
        <Image source={principal_detail}/>
      </HeaderContainer>

      <View style={{justifyContent:'space-between', flex:1, marginTop:30, paddingHorizontal:20}}>
        <View>
          <CustomTextInput
            placeholder='Nombre de la tarea'
            setValue={()=>{}}
            value={taskName}
          />
          <CustomDropDown
            placeholder='Status'
            setValue={()=>{}}
            value=''
          />
        </View>
        <View>
          <CustomButton
            label='Guardar'
            onPress={()=>{}}
            type={ButtonType.Filled}
          />
          <CustomButton
            label='Guardar'
            onPress={()=>{}}
            type={ButtonType.Rounded}
          />
        </View>
      </View>
      
    </KeyboardAvoidContainer>
  )
}

export default TaskScreen;