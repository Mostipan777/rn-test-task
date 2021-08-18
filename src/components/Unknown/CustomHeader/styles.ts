import {css} from '@emotion/native';
import {theme} from '../../../common/theme';

export const styles = {
  container: css`
    flex: 1;
  `,
  title: css`
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.textPrimary};
  `,
  subtitle: css`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: ${theme.primaryColor};
  `,
};
