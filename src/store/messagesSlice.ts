// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const fetchMessages = createAsyncThunk(
//   'messages/fetchMessages',
//   async function () {
//     const response = await fetch(
//       'https://slack.com/api/conversations.history',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//         },
//         body: 'channel=C029LB2FU83&token=xoxb-768554034544-2349831297248-Sipo50BAHOfSMMnlXgAcsBri',
//       },
//     );
//     const data = await response.json();
//     return data.messages;
//   },
// );

// const messages = createSlice({
//   name: 'messages',
//   initialState: {
//     messages: [],
//     status: '',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchMessages.pending]: state => {
//       state.status = 'pending';
//       state.error = null;
//     },
//     [fetchMessages.fulfilled]: (state, action) => {
//       state.status = 'resolved';
//       state.messages = action.payload;
//     },
//     // [fetchMessages.rejected]: (state, action) => {},
//   },
// });

// export default messages.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async function () {
    try {
      const response = await fetch(
        'https://slack.com/api/conversations.history',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: 'channel=C029LB2FU83&token=xoxb-768554034544-2349831297248-Sipo50BAHOfSMMnlXgAcsBri',
        },
      );
      const data = await response.json();
      return data.messages;
    } catch (error) {
      console.log(error);
    }
  },
);

const messages = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMessages.pending, state => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.messages = action.payload;
    });
  },
});

export default messages.reducer;
