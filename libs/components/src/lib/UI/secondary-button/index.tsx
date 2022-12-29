import { FC } from 'react';
import { ButtonProps } from 'antd';
import { baseTheme } from 'src/styles/theme';

import { StyledButton } from './styles';

export const SecondaryButton: FC<ButtonProps> = props => {
  return (
    <StyledButton theme={baseTheme} {...props}>
      {props.children}
    </StyledButton>
  );
};
