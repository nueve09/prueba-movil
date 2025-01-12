import { Image } from 'react-native'
import { RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigation';
import HeaderContainer from '../components/shared/headerContainer';
import { principal_detail } from '../theme/images';

import KeyboardAvoidContainer from '../components/shared/keyboardingAvoidContainer';

import GlobalModal from '../components/modals/globalModal';
import { useGloblaModalViewModel } from '../viewmodels/useGloblaModalViewModel';
import TaskForm from '../components/task/taskForm';
import { useNavigationActions } from '../hooks/useNabvigationActions';
import { useSessionViewModel } from '../viewmodels/useSessionViewModel';


type TaskDetailsRouteProp = RouteProp<RootStackParamList, 'Task'>;

interface TaskDetailsProps {
  route: TaskDetailsRouteProp;
}
const TaskScreen = ({route}:TaskDetailsProps) => {
  const {task} = route.params;

  const {goBack} = useNavigationActions()
  
  const {removeItem} = useGloblaModalViewModel()
  const { logout } = useSessionViewModel()

  
  return (
    <KeyboardAvoidContainer>
      <GlobalModal action={()=>removeItem(goBack)}/>
      <HeaderContainer title={!task?'Agregar tarea':'Editar tarea'} floating={false}>
        <Image source={principal_detail}/>
      </HeaderContainer>
      <TaskForm task={task}/>
    </KeyboardAvoidContainer>
  )
}

export default TaskScreen;