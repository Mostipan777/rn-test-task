import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from '../components/Unknown/CustomHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {theme} from '../common/theme';
import {css} from '@emotion/native';
import ChannelScreen from '../screens/ChannelScreen';
import ThreadScreen from '../screens/ThreadScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const members = useSelector((state: RootState) => state.members.members);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChannelScreen"
          component={ChannelScreen}
          options={{
            headerTitle: () => (
              <CustomHeader
                title="#test-tasks"
                subtitle={`${members.length} members`}
              />
            ),
            headerStyle: css`
              background-color: ${theme.backgroundColor};
            `,
          }}
        />
        <Stack.Screen
          name="ThreadScreen"
          component={ThreadScreen}
          options={{
            headerTitle: () => (
              <CustomHeader title="Thread" subtitle="#test-tasks" />
            ),
            headerStyle: css`
              background-color: ${theme.backgroundColor};
            `,
            headerTintColor: theme.textPrimary,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
