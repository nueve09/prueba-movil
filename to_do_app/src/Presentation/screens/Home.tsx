import { View, Text, StyleSheet, Image } from 'react-native'
import { logout, METRICS } from '../theme/theme';
import CustomTextInput from '../components/shared/customTextInput';
import CustomButton from '../components/shared/customButton';
import Header from '../components/home/header';
import List from '../components/home/taskList';
import TaskList from '../components/home/taskList';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>

      <TaskList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
const stylesList = StyleSheet.create({
  container:{
    flex:1
  }
});


export default Home