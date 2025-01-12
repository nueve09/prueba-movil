import { StyleSheet, Animated,FlatList, ActivityIndicator } from 'react-native'
import TaskCard from './taskCard';
import { useTaskListAnimations } from '../../hooks/useTaskListAnimations';
import { useTaskViewModel } from '../../viewmodels/useTaskViewModel';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import TaskListTitle from '../shared/taskListTitle';

interface TaskListProps {
  scrollY: Animated.Value;
}

const TaskList = ({scrollY}:TaskListProps) => {

  const {listHeight} = useTaskListAnimations(scrollY);
  const { filteredList } = useSelector((state:RootState) => state.task)

  const {removeItem  , isLoading} = useTaskViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Task'>>()
  

  return (
    <Animated.View style={[styles.container,{paddingTop:listHeight}]}>
      <TaskListTitle listLength={filteredList.length}/>
      {
        !filteredList && isLoading ?
        <ActivityIndicator />:
        <>
        <FlatList
          keyExtractor={(item,index)=>`${item}-${index}`}
          data={filteredList}
          renderItem={(task)=>
            <TaskCard task={task.item} 
            onRemove={(id,name)=>{removeItem(id,name)}} 
            onEdit={() => {navigation.navigate('Task',{task:task.item})}}
            />}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false }
            )}
            style={styles.list}
            scrollEventThrottle={16} 
            />
          </>
      }
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    list:{
      flex:1, 
      paddingHorizontal:20
    }
});
export default TaskList