import {css} from '@emotion/native';
import {theme} from '../../common/theme';

export const styles = {
  item: css`
    flex: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
  `,
  itemContent: css`
    flex: 1;
    margin-top: 12px;
    margin-right: 12px;
  `,
  time: css`
    font-size: 13px;
    font-weight: 300;
    color: ${theme.secondaryColor};
    margin-left: 8px;
  `,
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 4,
    marginTop: 12,
    marginHorizontal: 12,
  },
  repliesAvatar: {
    width: 28,
    height: 28,
    borderRadius: 4,
    marginRight: 8,
  },
  name: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: ${theme.textPrimary};
  `,
  text: css`
    margin-top: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: ${theme.textSecondary};
    width: 100%;
  `,
  repliesText: css`
    font-size: 14px;
    font-weight: 400;
    color: ${theme.primaryColor};
    width: 100%;
  `,
  repliesContainer: css`
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
  `,
  messageInfo: css`
    flex-direction: row;
    align-items: center;
  `,
  container: {
    flex: 1,
  },
  activityIndicator: css`
    padding-bottom: 50px;
    padding-top: 50px;
  `,
};
