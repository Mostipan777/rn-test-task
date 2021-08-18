import React, {useState, useEffect} from 'react';
import {theme} from '../common/theme';
import {useDispatch} from 'react-redux';
import {SafeAreaView, KeyboardAvoidingView, StatusBar} from 'react-native';
import MessagesList from '../components/MessagesList';
import {fetchMessages} from '../store/messagesSlice';
import {fetchMembers} from '../store/membersSlice';
import postMessage from '../slackApi/postMessage';
import Input from '../components/Unknown/Input';

const ChannelScreen = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <SafeAreaView style={theme.mainContainer}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={95}
        style={theme.container}>
        <MessagesList />
        <Input
          text={text}
          onChangeText={onChangeText}
          postMessage={() => postMessage(text)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChannelScreen;
