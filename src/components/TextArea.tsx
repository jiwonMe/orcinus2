import styled from 'styled-components';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
}

const Textarea = (props: TextareaProps) => {
  return <StyledTextarea {...props} />;
};

export default styled(Textarea)``;

const StyledTextarea = styled.textarea<TextareaProps>`
  box-sizing: border-box;

  width: 100%;
  padding: 12px 16px; // Padding inside the textarea

  border-radius: 16px; // Match the Button border-radius
  border: none;
  background-color: ${({ theme }) => theme.colors.gray50};
  color: ${({ theme, disabled }) => disabled ? theme.colors.gray500 : theme.colors.gray700};

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray500};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }

  // Adjust font styling to match your design requirements
  font-size: 16px; // Example font-size, adjust as needed
  line-height: 1.5; // Example line-height, adjust as needed
  resize: vertical; // Allows the user to resize the textarea vertically

  // Set the minimum height to align with the Button component's height or as required
  min-height: 48px;
`;

// You can adjust the TextareaProps and StyledTextarea to fit your theme and design requirements.
