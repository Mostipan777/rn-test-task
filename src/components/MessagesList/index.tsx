import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {fetchMessages} from '../../store/messagesSlice';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../common/theme';

interface currentMember {
  profile?: Record<string, string>;
  real_name?: string;
}

export default function App() {
  const [dataLength, setDataLength] = useState(15);
  const [isRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const members = useSelector((state: RootState) => state.members.members);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onRefreshHandler = () => {
    dispatch(fetchMessages());
    setDataLength(15);
    setAllLoaded(false);
  };

  const loadMoreMessages = () => {
    if (isLoadingMore || allLoaded) {
      return null;
    }
    setIsLoadingMore(true);
    if (dataLength >= messages.length) {
      setAllLoaded(true);
    }
    setTimeout(() => {
      setDataLength(dataLength + 10);
      setIsLoadingMore(false);
    }, 1000);
  };

  const Message = ({item}: Record<string, any>) => {
    const currentMember: currentMember | any = members.find(
      (member: Record<string, string>) => member.id === item.user,
    );

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
            {item.reply_count && (
              <View style={styles.repliesContainer}>
                {item.reply_users.map((currentUser: string) => {
                  const user: any = members.find(
                    (member: Record<string, string>) =>
                      member.id === currentUser,
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

  return (
    <FlatList
      data={messages.slice(0, dataLength)}
      renderItem={Message}
      keyExtractor={(item: Record<string, string>) => item.ts}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefreshHandler}
          title="Pull to refresh"
          tintColor={theme.textPrimary}
          titleColor={theme.textPrimary}
        />
      }
      onEndReached={loadMoreMessages}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <>
          {isLoadingMore ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              color={theme.textPrimary}
              size="large"
            />
          ) : null}
        </>
      }
    />
  );
}
