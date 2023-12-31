import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';

import TextArea from '../components/TextArea';
import useAppStore from '../store/appStore';

import { FiPenTool } from 'react-icons/fi';

interface WriteLetterProps {
  addStep: () => void;
}

const WriteLetter = (props: WriteLetterProps) => {
  const {
    title, setTitle,
    contents: content, setContents: setContent,
  } = useAppStore();

  return (
    <WriteLetterLayout>
      <VerticalSpace size={50} />
      <TitleBox>
        <FiPenTool size={36} />
        <VerticalSpace size={16} />
        <Heading2><b>편지</b>를 작성해주세요</Heading2>
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
        maxLength={1100}
      />

      <VerticalSpace size={200} />
  
      <Button
        variant="primary"
        onClick={props.addStep}
        disabled={title.length === 0 || content.length === 0}
      >다음</Button>
    </WriteLetterLayout>
  )
}

export default WriteLetter;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-bottom: 28px;
  gap: 4px;


  text-align: center;

  b {
    color: ${({ theme }) => theme.colors.blue300};
    font-weight: bold;
  }
`;

const WriteLetterLayout = styled.div`
  ${Button} {
    position: fixed;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);
  }

  ${TextArea} {
    max-height: calc(100vh - 450px);
    min-height: calc(100vh - 450px);
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
