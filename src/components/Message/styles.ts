import {StyleSheet} from 'react-native';
import {colors, theme} from '../../common/theme';
import {css} from '@emotion/native';
import {Dimensions} from 'react-native';
let width = Dimensions.get('window').width / 1.17;

export const styles = {
  item: css`
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
  `,
  itemContent: css`
    flex: 1;
    margin-top: 12px;
    margin-right: 12px;
  `,
  title: css`
    font-size: 13px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.65);
    margin-left: 8px;
  `,
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 4,
    margin: 12,
  },
  subtitle: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: white;
  `,
  text: css`
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: gray;
    width: 100%;
  `,
};
