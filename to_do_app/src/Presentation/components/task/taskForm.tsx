import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../shared/customTextInput'
import CustomDropDown from '../shared/customDropDown'
import ErrorLabel from '../shared/errorLabel'
import CustomButton from '../shared/customButton'
import { useTaskForm } from '../../hooks/useTaskForm'
import { Task } from '../../../Domain/entities/Task'
import { ButtonType, Colors } from '../../theme/theme'

interface TaskFormProps {
    task:Task | undefined
}

const TaskForm = ({task} : TaskFormProps) => {
    const { 
        taskForm, 
        setTitle, 
        setStatus, 
        error, 
        save, 
        dimiss
    } = useTaskForm(task)

  return (
      <View style={styles.container}>
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

  )
}

export default TaskForm

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between', 
        flex:1, 
        marginTop:30, 
        paddingHorizontal:20,
        backgroundColor:Colors.white
    }
})