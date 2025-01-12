

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    Home: undefined;
    Task: { taskId: number };
    Profile: undefined;
  };
  
  type NavigationProps = StackNavigationProp<RootStackParamList>;

export const useNavigationActions = () => {
const navigation = useNavigation<NavigationProps>();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToTask = (taskId: number) => {
    navigation.navigate('Task', { taskId });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const replaceWithHome = () => {
    navigation.replace('Home');
  };

  const canGoBack = () => navigation.canGoBack()

  return {
    navigateToHome,
    navigateToTask,
    goBack,
    replaceWithHome,
    canGoBack
  };
};
