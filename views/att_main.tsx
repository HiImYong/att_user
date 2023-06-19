import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {styles} from '../design/design';


interface attributes {
  // 해당 인터페이스를 구현한 객체는 인터페이스에서 정의한 속성과 타입을 가져야 한다.
  navigation: any; // = navigation 이라는 속성은 any 타입이다.
}

const ATT_MAIN: React.FC<attributes> = nav => {
  // ATT_MAIN은 함수 컴포넌트이다. 그러므로 타입에 React.FC를 지정해주고, attributes 인터페이스를 Props로 받아온다.
  // 컴포넌트 내용은 아래 return으로 렌더링된다.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  // useEffect(
  //   () => {
  //     axios
  //       .get('http://18.217.36.75:8000/hello/')
  //       .then(response => {
  //         // 요청 성공 시 실행할 코드
  //         console.log(response.data.test);
  //       })
  //       .catch(error => {
  //         // 요청 실패 시 실행할 코드
  //         console.error('에러...발생!!!');
  //         console.log(error);
  //       });
  //   },
  //   [username], // clickFunc >> setCounter >> counter 변화 바라본 후 실행
  // );



  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // axios.get('http://naver.com').then(res => {console.log(res.data)}) .catch(error => {console.log(error)})
  };



  return (
    <View style={{flex:1, justifyContent:'space-between'}}>
      <View style={{alignItems:'center'}}>
        <TextInput
          style={{backgroundColor: 'white', marginTop: 20, width: 250, }}
          placeholder="아이디"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={{backgroundColor: 'white', marginTop: 5, width: 250}}
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* <View style={{alignItems: 'center'}}>
      <Image source={require('../design/image/cube.gif')}></Image>
      </View> */}

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={[
            styles.mainButtons,
            {backgroundColor: isPressed ? 'red' : 'white'},
          ]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={handleLogin}>
          <Text style={styles.mainButtonsText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => nav.navigation.navigate('ATT_SIGNUP')}>
          <Text style={styles.mainButtonsText}>테스트</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainButtons}
          onPress={() => nav.navigation.navigate('ATT_DETAIL')}>
          <Text style={styles.mainButtonsText}>로그인후</Text>
        </TouchableOpacity>
      </View>




    </View>
  );
};

export default ATT_MAIN;
