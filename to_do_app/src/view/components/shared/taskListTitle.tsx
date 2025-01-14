import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, GlobalFontFamily } from '../../theme/theme'
import { capitalize } from '../../utils/utils'
import { useTaskViewModel } from '../../../viewmodels/useTaskViewModel'

interface TaskListTitleProps {
    listLength:number
} 

const TaskListTitle = ({listLength}:TaskListTitleProps) => {

    const [filter,setFilter] = useState('all')
    const {oddOrEven} = useTaskViewModel();
    useEffect(()=>{
        oddOrEven(filter)
    },[filter])
  return (
    <View style={styles.titleRow}>
        <Text style={styles.title}>{listLength} tareas registradas</Text>
        <TouchableOpacity onPress={()=>{
            if(filter === 'all') return setFilter('Par');
            if(filter === 'Par') return setFilter('Inpar');
            return setFilter('all');
        }}
        style={styles.button}>
        <Text style={{color:Colors.white, textAlign:'center'}}>{capitalize(filter)}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center', 
        marginBottom:10,
        fontFamily:GlobalFontFamily.lato_regular
      },
      titleRow:{
        flexDirection:'row',
        justifyContent:'center' , 
      },
      button:{
        position:'absolute',
        right:10,
        padding:3,
        backgroundColor:Colors.primary,
        borderRadius:5,
        width:70,

      }
});

export default TaskListTitle