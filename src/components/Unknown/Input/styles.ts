import {theme} from '../../../common/theme';
import {css} from '@emotion/native';

export const styles = {
  container: css`
    border-top-width: 1px;
    border-color: ${theme.accentColor};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  text: css`
    color: ${theme.textSecondary};
    font-size: 16px;
    padding: 12px;
  `,
  button: css`
    padding: 10px;
  `,
};
