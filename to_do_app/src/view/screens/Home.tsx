import { View, StyleSheet, Animated } from 'react-native'
import Header from '../components/home/animatedHeader';
import TaskList from '../components/home/taskList';
import { GlobalStyles } from '../theme/theme';
import GlobalModal from '../components/modals/globalModal';
import { useSessionViewModel } from '../../viewmodels/useSessionViewModel';


const HomeScreen = () => {

  const scrollY = new Animated.Value(0); 
  const { logout } = useSessionViewModel()

  return (
    <View style={[styles.container,GlobalStyles.globalBackground]}>
      <GlobalModal action={logout}/>
      <Header scrollY={scrollY} />
      <TaskList scrollY={scrollY} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default HomeScreen