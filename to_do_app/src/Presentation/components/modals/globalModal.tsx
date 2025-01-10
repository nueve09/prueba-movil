import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import { Colors, GlobalFontFamily, METRICS } from '../../theme/theme';
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

interface GlobalModalProps {
  action:()=>void,
  
} 

const GlobalModal = ({action}:GlobalModalProps) => {
    const { visible , message ,actionText , title } = useSelector((state:RootState) => state.modal)
    const { hide } = useGloblaModalViewModel()

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
          <Text style={styles.titleLabel}>{ title } </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.messageLabel}>{message}</Text>
        </View>
        <View style={styles.actions}>
          <ActionButton label='Cancelar' action={()=>hide()}/>
          <ActionButton label={actionText} action={()=>action()}/>
        </View>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({

  contianer:{
    backgroundColor:Colors.white,
    minWidth:'70%',
    height:height * .45,
    borderRadius:20,
    borderColor:Colors.primary,
    borderWidth:3,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  title:{
    marginTop:20
  },
  titleLabel:{
    fontFamily:GlobalFontFamily.lex_bold,
    fontSize:15
    
  },
  messageLabel:{
    fontFamily:GlobalFontFamily.lato_regular,
    textAlign:'center',
    fontSize:15

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
    borderRadius:10,
  },
  labelActionButton:{
    color:Colors.white,
    fontFamily:GlobalFontFamily.lex_medium,
    textAlign:'center'
  }
});

export default GlobalModal