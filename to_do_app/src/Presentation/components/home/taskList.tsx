import { Text, StyleSheet, Animated,FlatList } from 'react-native'
import TaskCard from './taskCard';
import { useTaskListAnimations } from '../../hooks/useTaskListAnimations';
import { useTaskViewModel } from '../../viewmodels/useTaskViewModel';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';

interface TaskListProps {
  scrollY: Animated.Value;
}

const TaskList = ({scrollY}:TaskListProps) => {

  const {listHeight} = useTaskListAnimations(scrollY);

  const {filteredList , removeItem } = useTaskViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Task'>>()
  
  return (
    <Animated.View style={[styles.container,{paddingTop:listHeight}]}>
      <Text style={styles.title}>{filteredList?.length} tareas registradas</Text>
      <FlatList
        keyExtractor={(item,index)=>`${item}-${index}`}
        data={filteredList}
        renderItem={(task)=>
          <TaskCard task={task.item} 
          onRemove={(id)=>{removeItem(id)}} 
          onEdit={() => {navigation.navigate('Task',{task})}}
          />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        style={styles.list}
        scrollEventThrottle={16} 
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
      textAlign:'center', 
      marginBottom:10
    },
    list:{
      flex:1, 
      paddingHorizontal:20
    }
});
export default TaskList