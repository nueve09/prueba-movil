import { useState } from 'react';
import { View, Text } from 'react-native'
import Modal from "react-native-modal";
import { METRICS } from '../../theme/theme';

const {height, width} = METRICS;

const ExitModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <Modal
    isVisible={isModalVisible}
    deviceWidth={height}
    deviceHeight={width}
  >
    <View style={{ flex: 1 }}>
      <Text>I am the modal content!</Text>
    </View>
  </Modal>
  )
}

export default ExitModal