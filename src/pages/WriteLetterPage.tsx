import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading3 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';
import { useState } from 'react';
import TextArea from '../components/TextArea';

interface WriteLetterProps {
  addStep: () => void;
}

const WriteLetter = (props: WriteLetterProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <WriteLetterLayout>
      <TitleBox>
        <Heading3>편지를 작성해주세요</Heading3>
        <Description>부적절한 내용은 전달되지 않을 수 있습니다</Description>
      </TitleBox>

      <VerticalSpace size={36} />

      <InputLabel>
      제목
      </InputLabel>    
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <VerticalSpace size={16} />

      <InputLabel>
      내용
      </InputLabel>
      <TextArea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
  
      <Button
        variant="primary"
        onClick={props.addStep}
      >다음</Button>
    </WriteLetterLayout>
  )
}

export default WriteLetter;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

const WriteLetterLayout = styled.div`
  ${Button} {
    position: absolute;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);
  }

  ${TextArea} {
    max-height: calc(100vh - 400px);
    min-height: calc(100vh - 400px);
  }
`;

const InputLabel = styled(Description)`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.gray700};

  gap: 4px;

  margin-bottom: 4px;
  margin-left: 4px;
`;
