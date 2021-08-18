import {SlackToken} from '../../accessToken';

const fetchData = async (timestamp: string) => {
  try {
    const response = await fetch(
      'https://slack.com/api/conversations.replies',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: `channel=C029LB2FU83&token=${SlackToken}&ts=${timestamp}&pretty=1`,
      },
    );
    const data = await response.json();
    return data.messages;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
