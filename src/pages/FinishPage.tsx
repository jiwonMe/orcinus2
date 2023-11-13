import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading3 } from '../designs/typographys';
import TextArea from '../components/TextArea';

interface FinishPageProps {
  addStep: () => void;
}

const FinishPage = (props: FinishPageProps) => {
  return (
    <FinishPageLayout>
      <TitleBox>
        <Heading3>편지 전송이 완료되었습니다</Heading3>
        <Description>일반적으로 1~2일 이내에 전달됩니다</Description>
      </TitleBox>

      <Button
        variant="primary"
        onClick={props.addStep}
      >처음으로</Button>
    </FinishPageLayout>
  )
}

export default FinishPage;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

const FinishPageLayout = styled.div`
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

