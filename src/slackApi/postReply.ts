import {SlackToken} from '../../accessToken';

const postReply = async (text: string, ts: string) => {
  const formatedText = text.split(' ').join('%20');
  try {
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: `channel=C029LB2FU83&token=${SlackToken}&text=${formatedText}&thread_ts=${ts}&pretty=1&pretty=1`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default postReply;
