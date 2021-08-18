import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

interface currentMember {
  profile?: Record<string, string>;
  real_name?: string;
}

const Message = ({item}: Record<string, any>, {members}: any) => {
  const navigation = useNavigation();
  const currentMember: currentMember | any = members.find(
    (member: Record<string, string>) => member.id === item.user,
  );
  console.log(members, item);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          'ThreadScreen' as never,
          {
            ts: item.ts,
          } as never,
        )
      }
      style={styles.container}>
      <View style={styles.item}>
        <Image
          source={{
            uri: currentMember?.profile?.image_48,
          }}
          style={styles.avatar}
        />
        <View style={styles.itemContent}>
          <View style={styles.messageInfo}>
            <Text style={styles.name}>{currentMember?.real_name}</Text>
            <Text style={styles.time}>
              {new Date(+item.ts * 1000).toLocaleString('en-US', {
                hour: 'numeric',
                hour12: true,
                minute: 'numeric',
              })}
            </Text>
          </View>
          <Text style={styles.text}>{item.text}</Text>
          {item.reply_user && (
            <View style={styles.repliesContainer}>
              {item.reply_users.map((currentUser: string) => {
                const user: any = members.find(
                  (member: Record<string, string>) => member.id === currentUser,
                );
                return (
                  <Image
                    key={currentUser}
                    source={{
                      uri: user?.profile?.image_48,
                    }}
                    style={styles.repliesAvatar}
                  />
                );
              })}
              <Text style={styles.repliesText}>
                {`${item.reply_count} replies`}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Message;
