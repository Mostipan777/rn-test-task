import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Arrow from '../../../assets/icons/Arrow';
import {theme} from '../../../common/theme';
import {styles} from './styles';

interface InputProps {
  text: string;
  onChangeText: (text: string) => void;
  postMessage: () => void;
}

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={props.onChangeText}
        placeholder="Add a reply"
        placeholderTextColor={theme.secondaryColor}
        value={props.text}
        keyboardAppearance="dark"
        style={styles.text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.postMessage();
          props.onChangeText('');
        }}>
        <Arrow color={props.text ? theme.primaryColor : theme.secondaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
