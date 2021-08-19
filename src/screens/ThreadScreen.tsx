import React, {useState} from 'react';
import {SafeAreaView, KeyboardAvoidingView, StatusBar} from 'react-native';
import {theme} from '../common/theme';
import {useRoute} from '@react-navigation/native';
import postReply from '../slackApi/postReply';
import Input from '../components/Unknown/Input';
import Thread from '../components/Thread';

const ThreadScreen = () => {
  const route: Record<any, any> = useRoute();
  const timestamp = route?.params?.ts;
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={theme.mainContainer}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={90}
        style={theme.container}>
        <Thread />
        <Input
          text={text}
          onChangeText={onChangeText}
          postMessage={() => postReply(text, timestamp)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ThreadScreen;
