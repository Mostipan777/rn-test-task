import {theme} from '../../common/theme';
import {css} from '@emotion/native';

export const styles = {
  firstItem: css`
    margin-top: 5px;
    flex-direction: row;
  `,
  item: css`
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
  `,
  firstItemContent: css`
    flex: 1;
    margin-top: 12px;
    margin-right: 12px;
  `,
  itemContent: css`
    flex: 1;
    margin-top: 12px;
    margin-right: 12px;
  `,
  authorName: css`
    margin-top: 2px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: ${theme.textPrimary};
  `,
  firstDate: css`
    margin-top: 6px;
    font-size: 13px;
    font-weight: 300;
    color: ${theme.secondaryColor};
  `,
  date: css`
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
    font-weight: 400;
    line-height: 16px;
    color: ${theme.textPrimary};
  `,
  firstText: css`
    margin-top: 4px;
    margin-left: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: ${theme.textSecondary};
    width: 100%;
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
    color: ${theme.secondaryColor};
    width: 100%;
  `,
  repliesContainer: css`
    padding: 12px;
    margin-top: 12px;
    width: 100%;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-bottom-color: ${theme.accentColor};
    border-top-color: ${theme.accentColor};
  `,
  activityIndicator: css`
    padding-bottom: 50px;
    padding-top: 50px;
  `,
};
