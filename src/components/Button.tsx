import styled, { css } from 'styled-components';
import { ButtonText } from '../designs/typographys';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;

  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonLayout
      {...props}
      onClick={props.disabled ? undefined : props.onClick}
    >
      <ButtonText>{props.children}</ButtonText>
    </ButtonLayout>
  );
};

export default styled(Button)``;

const ButtonLayout = styled.button<{
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}>`
  width: 100%;
  height: 48px;

  border-radius: 16px;

  ${({ variant, disabled, theme }) => {
    switch (variant) {
    default:
    case 'primary':
      return disabled
        ? css`
              background-color: ${theme.colors.gray100};
              border: none;
              color: ${theme.colors.gray300};
            `
        : css`
              background-color: ${theme.colors.blue500};
              border: none;
              color: ${theme.colors.white};

              &:active {
                background-color: ${theme.colors.blue300};
              }
            `;
    case 'secondary':
      return disabled
        ? css`
              background-color: transparent;
              border: 1px solid ${theme.colors.gray300};
              color: ${theme.colors.gray300};
            `
        : css`
              background-color: transparent;
              border: 1px solid ${theme.colors.blue500};
              color: ${theme.colors.blue500};

              &:active {
                background-color: ${theme.colors.blue100};
              }
            `;
    }
  }}
`;
