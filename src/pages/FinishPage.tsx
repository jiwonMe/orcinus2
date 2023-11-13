import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import TextArea from '../components/TextArea';
import VerticalSpace from '../components/VerticalSpace';

import { FiCheckCircle } from 'react-icons/fi';

interface FinishPageProps {
  addStep: () => void;
}

const FinishPage = (props: FinishPageProps) => {

  return (
    <FinishPageLayout>
      <VerticalSpace size={100} />
      <TitleBox>
        <FiCheckCircle size={36} />
        <VerticalSpace size={16} />
        <Heading2>편지 전송이 완료되었습니다</Heading2>
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

