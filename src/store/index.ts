import {configureStore} from '@reduxjs/toolkit';
import messagesReducer from './messagesSlice';
import membersReducer from './membersSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    members: membersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;