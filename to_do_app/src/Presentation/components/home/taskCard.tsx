import { View, Text } from 'react-native'
import { Task } from '../../../Domain/entities/Task'

interface TaskCardProps {
    task:Task
}

const TaskCard = ({task}:TaskCardProps) => {
  return (
    <View>
      <Text>{task.title}</Text>
    </View>
  )
}

export default TaskCard