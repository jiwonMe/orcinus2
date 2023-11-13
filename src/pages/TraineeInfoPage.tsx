import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2, Heading3 } from '../designs/typographys';
import { FiMail } from 'react-icons/fi';
import VerticalSpace from '../components/VerticalSpace';

interface TraineeInfoPageProps {
  addStep: () => void;
}

const TraineeInfoPage = (props: TraineeInfoPageProps) => {

  return (
    <TraineeInfoPageLayout>
      <VerticalSpace size={120} />
      <TitleBox>
        <FiMail size={36} />
        <VerticalSpace size={16} />
        <Heading2>
          <span className='trainee-name'>
          {import.meta.env.VITE_TRAINEE_NAME}{' '}
          </span>훈련생에게 <br /> 편지를 작성합니다</Heading2>
        <Description>생년월일 및 소속, 입대날짜를 확인해주세요</Description>
      </TitleBox>
      <DescriptionBox>
        <Description>
          <b>생년월일</b> {import.meta.env.VITE_TRAINEE_BIRTH} <br />
          <b>소속</b> {import.meta.env.VITE_TRAINEE_AFFIL} <br />
          <b>입대날짜</b> 2023-10-30 <br />
          <b>수료예정날짜</b> 2023-12-01 <br />
        </Description>
      </DescriptionBox>
      <Description
        style={{
          // underline
          textDecorationLine: 'underline',
        }}

        onClick={() => {
          alert('다른 훈련생은 아직 준비중입니다. park@jiwon.me로 연락주세요');
        }}
      >
        제가 쓰려는 훈련생이 아니에요.
      </Description>
      <Button
        variant="primary"
        onClick={props.addStep}
      >다음</Button>
    </TraineeInfoPageLayout>
  )
}

export default TraineeInfoPage;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-bottom: 28px;
  gap: 4px;


  text-align: center;

  .trainee-name {
    color: ${({ theme }) => theme.colors.blue300};
    font-weight: bold;
  }
`;

const TraineeInfoPageLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  ${Button} {
    position: absolute;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DescriptionBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 8px;

  width: 100%;

  ${Description} {
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

