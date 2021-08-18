import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface CustomHeaderProps {
  title: string;
  subtitle: string;
}

const CustomHeader = ({title, subtitle}: CustomHeaderProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

export default CustomHeader;
