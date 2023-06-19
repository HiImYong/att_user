import {useCallback, useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import {styles} from '../design/design';
import { TimeContext } from '../App';
import axios from 'axios';
import dayjs from 'dayjs';

const ATT_SIGNUP = () => {
  const BOT_TOKEN = '6022665482:AAE8KeZ5kax5Sc1fvLg3pjN1pak4rvc1eaM';
//   const CHAT_ID = '5332314724';
  const CHAT_ID = '-952669335';

  const timeNow = useContext(TimeContext);
  const timeParts = timeNow.split(' ')[3].split(':');
  const showTime = '출근 ' + timeParts[0] + ':' + timeParts[1]


  
  const sendMessageToTelegram = async () => {

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text: showTime,
        },
      );
      console.log('메시지 전송 성공:', response.data);
    } catch (error) {
      console.error('메시지 전송 실패:', error);
    }
  };

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = () => {
    sendMessageToTelegram();
  };

  return (
    <View style={{alignItems: 'center'}}>
    <Text>메시지 전송 테스트</Text>
      <TouchableOpacity
        style={styles.mainButtons}
        onPress={sendMessageToTelegram}>
        <Text style={[styles.mainButtonsText,{width : 200, fontSize:25, backgroundColor:'white'}]}>텔레그램에 메시지 보내기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ATT_SIGNUP;
