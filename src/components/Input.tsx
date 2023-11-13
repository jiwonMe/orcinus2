import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default styled(Input)``;

const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;

  width: 100%;
  height: 40px; // Adjust height as needed to align with Button height
  padding: 0 16px; // Padding inside the input

  border-radius: 16px; // Match the Button border-radius
  border: 1px solid ${({ theme, disabled }) => disabled ? theme.colors.gray300 : theme.colors.blue500};
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.gray100 : theme.colors.white};
  color: ${({ theme, disabled }) => disabled ? theme.colors.gray300 : theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue300}; // Focus state border color
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  // Adjust font styling as needed to match ButtonText
  font-size: 16px; // Example font-size, adjust as needed
  line-height: 1.5; // Example line-height, adjust as needed
`;

// You may need to adjust the InputProps and StyledInput to fit your theme and design requirements.
