import React, {useState, useEffect} from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import fetchReplies from '../../slackApi/fetchReplies';
import {theme} from '../../common/theme';

interface currentMember {
  profile?: Record<string, string>;
  real_name?: string;
}

export default function Thread() {
  const [dataLength, setDataLength] = useState(15);
  const [isRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [replies, setReplies] = useState([]);
  const members = useSelector((state: RootState) => state.members.members);
  const route: Record<any, any> = useRoute();
  const timestamp = route?.params?.ts;

  const fetchedReplies = fetchReplies(timestamp);

  const onRefreshHandler = async () => {
    setReplies(await fetchedReplies);
    setDataLength(15);
    setAllLoaded(false);
  };

  const loadMoreMessages = () => {
    if (isLoadingMore || allLoaded || replies.length < 15) {
      return null;
    }
    setIsLoadingMore(true);
    if (dataLength >= replies.length) {
      setAllLoaded(true);
    }
    setTimeout(() => {
      setDataLength(dataLength + 10);
      setIsLoadingMore(false);
    }, 1000);
  };

  useEffect(() => {
    const newReplies = async () => setReplies(await fetchedReplies);
    newReplies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Reply = ({item, index}: Record<any, any>) => {
    const currentMember: currentMember | any = members.find(
      (member: Record<string, string>) => member.id === item.user,
    );

    if (index === 0) {
      return (
        <View>
          <View style={styles.item}>
            <Image
              source={{
                uri: currentMember?.profile?.image_48,
              }}
              style={styles.avatar}
            />
            <View style={styles.firstItemContent}>
              <Text style={styles.authorName}>{currentMember?.real_name}</Text>
              <Text style={styles.firstDate}>
                {new Date(+item.ts * 1000).toLocaleString('en-US', {
                  hour: 'numeric',
                  hour12: true,
                  minute: 'numeric',
                })}
              </Text>
            </View>
          </View>
          <Text style={styles.firstText}>{item.text}</Text>
          <View style={styles.repliesContainer}>
            <Text style={styles.repliesText}>{`${
              replies.length - 1
            } replies`}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: currentMember?.profile?.image_48,
          }}
          style={styles.avatar}
        />
        <View style={styles.itemContent}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.name}>{currentMember?.real_name}</Text>
            <Text style={styles.date}>
              {new Date(+item.ts * 1000).toLocaleString('en-US', {
                hour: 'numeric',
                hour12: true,
                minute: 'numeric',
              })}
            </Text>
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={replies.slice(0, dataLength)}
      renderItem={Reply}
      keyExtractor={(item: Record<any, any>) => item.ts}
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
