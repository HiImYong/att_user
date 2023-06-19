import {useCallback, useEffect, useState} from 'react';
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

const shadowOpt = {
    width: 150,
    height: 50,
    color: '#000',
    border: 5,
    radius: 10,
    opacity: 0.3,
    x: 0,
    y: 0,
    style: { marginVertical: 10 },
  };
  

const ATT_DETAIL = () => {
  const [lodingState, setlodingState] = useState('Loading');
  const [imgurl, setImgurl] = useState(require('../design/image/start.gif'));

  var time: number = 0;

  function startInterval() {
    const itv = setInterval(() => {
      time += 1;
      console.log('안녕' + time);
    }, 1000);

    setTimeout(() => {
      setlodingState('finish');
      console.log('안녕' + time);
      clearInterval(itv);
    }, 3000);
  }

  useEffect(() => {
    startInterval();
  }, []);


  const changeImgurl = (prop: string) => {
    console.log(prop)
    setImgurl(prop);
  }

  return (
    <View style={styles.backgroundContainer}>
      {lodingState === 'finish' ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ marginHorizontal: 10 }}>
            <Button title="출근" onPress={()=>changeImgurl(require('../design/image/walk.gif'))}/>
            <Button title="외근" />
            <Button title="휴가(연차, 반차, 대체)" />
            <Button title="간식요청" />
            <Button title="퇴근" />

          </View>
            <Image
               source={imgurl}
              style={styles.backgroundImg} // 스타일링을 위해 이미지 컴포넌트에 스타일을 적용..
            ></Image>
        </View>
      ) : (
        <View>
          <View style={styles.overlayContainer}>
            <Text style={styles.overlayText}>{lodingState}</Text>
          </View>

            <ImageBackground
              source={require('../design/image/hello.gif')}
              style={styles.backgroundImg} // 스타일링을 위해 이미지 컴포넌트에 스타일을 적용..
            ></ImageBackground>
        </View>
      )}
    </View>
  );
};

export default ATT_DETAIL;
