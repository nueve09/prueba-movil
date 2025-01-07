import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import TaskCard from './taskCard';
import { Task } from '../../../Domain/entities/Task';

const fake:Task[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      }
]

const TaskList = () => {
  return (
    <View style={styles.container}>
      <Text>12 tareas registradas</Text>
      <FlatList
        data={fake}
        renderItem={(task)=><TaskCard task={task.item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
export default TaskList