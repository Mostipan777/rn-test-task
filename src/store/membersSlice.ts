import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchMembers = createAsyncThunk(
  'messages/fetchMembers',
  async function () {
    try {
      const response = await fetch('https://slack.com/api/users.list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: 'channel=C029LB2FU83&token=xoxb-768554034544-2349831297248-Sipo50BAHOfSMMnlXgAcsBri',
      });
      const data = await response.json();
      return data.members;
    } catch (error) {
      console.log(error);
    }
  },
);

const members = createSlice({
  name: 'members',
  initialState: {
    members: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMembers.pending, state => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.members = action.payload;
    });
  },
});

export default members.reducer;
