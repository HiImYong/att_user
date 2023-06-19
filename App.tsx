/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState, createContext } from 'react';
import type {PropsWithChildren}
from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

import {styles} from './design/design';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ATT_MAIN from './views/att_main'
import ATT_DETAIL from './views/att_detail'
import ATT_SIGNUP from './views/att_signup'

import dayjs from 'dayjs';

type SectionProps = PropsWithChildren < {
    title: string;
} >;

function Section({children, title} : SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle, {
                        color: isDarkMode
                            ? Colors.white
                            : Colors.black
                    }
                ]}>
                {title}
            </Text>

            <Text
                style={[
                    styles.sectionDescription, {
                        color: isDarkMode
                            ? Colors.light
                            : Colors.dark
                    }
                ]}>
                {children}
            </Text>

        </View>
    );
}

const TimeContext = createContext<string>('');


function App(): JSX.Element {
    
    const isDarkMode = useColorScheme() === 'dark';
    const [timeNow, setTimeNow] = useState(dayjs().locale('ko').format('YYYY년 MM월 DD일 HH:mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeNow(dayjs().locale('ko').format('YYYY년 MM월 DD일 HH:mm:ss'));
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    const backgroundStyle = {
        backgroundColor: isDarkMode
            ? Colors.darker
            : Colors.lighter
    };

    const Stack = createStackNavigator();



    return (    
    
    <TimeContext.Provider value={timeNow}>


      <React.Fragment>

            <View style={{alignItems: 'center'}}>
                <Image source={require('./design/image/cube.gif')}></Image>
                <Text>❤현재시간 : {timeNow}</Text>
                
            </View>

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="ATT_MAIN" component={ATT_MAIN} options={{ headerShown: false }}/>
                    <Stack.Screen name="ATT_DETAIL" component={ATT_DETAIL} options={{ headerShown: false }}/>
                    <Stack.Screen name="ATT_SIGNUP" component={ATT_SIGNUP} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>

            </React.Fragment> 
            </TimeContext.Provider>

    );
}

export default App;
export { TimeContext };

