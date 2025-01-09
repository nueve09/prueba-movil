import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import { Colors, METRICS } from '../../theme/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGloblaModalViewModel } from '../../viewmodels/useGloblaModalViewModel';

const {height, width} = METRICS;

interface ActionButtonProps {
  label:string;
  action:()=>void
}
const ActionButton = ({label,action}:ActionButtonProps) => {
  return(
    <TouchableOpacity onPress={action} style={styles.actionButton}>
      <Text style={styles.labelActionButton}>{label}</Text>
    </TouchableOpacity>
  )
}

const GlobalModal = () => {
    const { visible , message ,actionText , title, action } = useSelector((state:RootState) => state.modal)
    const { actionsHandler } = useGloblaModalViewModel()

  return (
    <Modal
    isVisible={visible}
    deviceWidth={height}
    deviceHeight={width}
    style={{flex:1, justifyContent:'center'}}
    backdropOpacity={0}
  >
    <View style={{ flex: 1 , justifyContent:'center'}}>
      <View style={[styles.contianer,styles.shadow]}>
        <View style={styles.title}>
          <Text>{ title } {action} </Text>
        </View>
        <View style={styles.content}>
          <Text>{message}</Text>
        </View>
        <View style={styles.actions}>
          <ActionButton label='Cancelar' action={()=>actionsHandler['hide']()}/>
          <ActionButton label={actionText} action={()=>actionsHandler[action]()}/>
        </View>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({

  contianer:{
    backgroundColor:Colors.white,
    minWidth:'90%',
    height:height * .5,
    borderRadius:20,
    borderColor:Colors.primary,
    borderWidth:3,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  title:{
    
  },
  content:{
    flex:1,
    justifyContent:'center'

  },
  actions:{
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16,

    elevation: 24,
  },
  actionButton:{
    backgroundColor:Colors.primary,
    width:100,
    padding:10,
    alignItems:'center',
    borderRadius:10
  },
  labelActionButton:{
    color:Colors.white,
    textAlign:'center'
  }
});

export default GlobalModal