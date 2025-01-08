import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Task } from '../../../Domain/entities/Task'
import { edit, remove } from '../../theme/images'
import { Colors } from '../../theme/theme'

interface TaskCardProps {
    task:Task|null;
    onEdit:()=>void;
    onRemove:(id:number)=>void;
}

const TaskCard = ({task,onRemove ,onEdit}:TaskCardProps) => {
  if(!task) return 
  return (
    <View style={styles.card}>
      <View style={styles.labels}>
        <Text style={styles.statusLabel}>{task.completed ? "Completada" : "Pendiente"}</Text>
        <Text style={styles.titleLabel}>{task.title}</Text>
      </View>
      <View style={styles.buttons}> 
        <TouchableOpacity onPress={()=>onEdit()}>
          <Image source={edit}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onRemove(task.id)}>
          <Image source={remove}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    height:100,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#dcdcdc'
  },
  buttons:{
    width:50,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  labels:{
    width:'80%'
  },
  statusLabel:{
    color:Colors.primary
  },
  titleLabel:{
  }
});

export default TaskCard