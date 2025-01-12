import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Task } from '../../../Domain/entities/Task'
import { edit, remove } from '../../theme/images'
import { Colors, GlobalFontFamily } from '../../theme/theme'
import { capitalize } from '../../utils/utils';

interface TaskCardProps {
    task:Task|null;
    onEdit:()=>void;
    onRemove:(id:number,name:string)=>void;
}

const TaskCard = ({task,onRemove ,onEdit}:TaskCardProps) => {
  if(!task) return 
  return (
    <View style={styles.card}>
      <View style={styles.labels}>
        <Text style={styles.statusLabel}>{capitalize(task.completed)}</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.titleLabel}>{task.id} - {task.title}</Text>
      </View>
      <View style={styles.buttons}> 
        <TouchableOpacity onPress={()=>onEdit()}>
          <Image source={edit}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onRemove(task.id,task.title)}>
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
    borderWidth:2,
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
    color:Colors.primary,
    fontFamily:GlobalFontFamily.lato_regular,
     marginBottom:10
  },
  titleLabel:{
    fontFamily:GlobalFontFamily.lato_regular
  }
});

export default TaskCard