import { StyleSheet, Image } from 'react-native';


export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '800',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundContainer:{
    flex:1,
    justifyContent: 'center', // 내부 컴포넌트를 수직 방향으로 중앙 정렬
    // alignItems: 'center', // 내부 컴포넌트를 수평 방향으로 중앙 정렬
    
    // backgroundImage : require('/image/daisy.png') // require는 정적경로로 인지
  },
  backgroundImg:{
    width : '100%' ,
    height : 300 ,
    // resizeMode : 'contain',
    // justifyContent: 'center', // 내부 컴포넌트를 수직 방향으로 중앙 정렬
    // alignItems: 'center', // 내부 컴포넌트를 수평 방향으로 중앙 정렬
  },

  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  overlayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 컬러에 투명도 추가
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainButtons:{
    justifyContent:'center', width:200, marginTop:10
  },

  mainButtonsText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:50
  }

  
});