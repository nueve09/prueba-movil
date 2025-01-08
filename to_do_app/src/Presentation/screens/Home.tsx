import { View, StyleSheet, Animated } from 'react-native'
import Header from '../components/home/animatedHeader';
import TaskList from '../components/home/taskList';
import { GlobalStyles } from '../theme/theme';
const HomeScreen = () => {

  const scrollY = new Animated.Value(0); 

  return (
    <View style={[styles.container,GlobalStyles.globalBackground]}>
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