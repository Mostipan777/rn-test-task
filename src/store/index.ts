import {configureStore} from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice';
import membersReducer from './membersSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    members: membersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
