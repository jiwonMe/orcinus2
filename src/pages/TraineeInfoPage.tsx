import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import { FiMail } from 'react-icons/fi';
import VerticalSpace from '../components/VerticalSpace';
import useAppStore from '../store/appStore';

interface TraineeInfoPageProps {
  addStep: () => void;
}

const TraineeInfoPage = (props: TraineeInfoPageProps) => {
  const {
    traineeName,
    traineeBirth,
    enlistmentDate,
    graduationDate,
    letterWritingPeriod,
    traineeAffiliation,
  } = useAppStore();

  return (
    <TraineeInfoPageLayout>
      <VerticalSpace size={120} />
      <TitleBox>
        <FiMail size={36} />
        <VerticalSpace size={16} />
        <Heading2>
          <span className='trainee-name'>
          {(
            letterWritingPeriod !== '20210802-20210827'
          ) ? traineeName : 'Loading...'
        }{' '}
          </span>훈련생에게 <br /> 편지를 작성합니다</Heading2>
        <Description>생년월일 및 소속, 입대날짜를 확인해주세요</Description>
      </TitleBox>
      <DescriptionBox>
        {
          !traineeName ? (
            <Description>
              <b>Loading...</b>
            </Description>
          ) : (
            <Description>
              <b>생년월일</b> {traineeBirth || import.meta.env.VITE_TRAINEE_BIRTH} <br />
              <b>소속</b> {traineeAffiliation || import.meta.env.VITE_TRAINEE_AFFIL} <br />
              <b>입대날짜</b> {enlistmentDate || '2023-10-30'}<br />
              <b>수료예정날짜</b> {graduationDate || '2023-12-01' }<br />
            </Description>
          )
        }
      </DescriptionBox>
      <Description
        style={{
          // underline
          textDecorationLine: 'underline',
        }}

        onClick={() => {
          alert('요청에 따라 훈련생 별로 링크를 만들어 드리고 있습니다. park@jiwon.me로 연락주세요.');
        }}
      >
        제가 쓰려는 훈련생이 아니에요.
      </Description>
      <Button
        variant="primary"
        onClick={() => {
          // if over letter writing period, show alert
          // format: 2023년 11월 13일 09시 ~ 2023년 11월 29일 17시

          const transformKoreanTimeToEnglishTime = (koreanTime: string) => {
            const year = koreanTime.split('년')[0];
            const month = koreanTime.split('년')[1].split('월')[0];
            const day = koreanTime.split('월')[1].split('일')[0];
            const hour = koreanTime.split('일')[1].split('시')[0];
            const minute = koreanTime.split('시')[1].split('분')[0] || '00';

            return `${year}-${month}-${day} ${hour}:${minute}`;
          }

          const now = new Date();
          // parse target date
          const targetDate = letterWritingPeriod?.split('~')[1].trim()
          const target = new Date(transformKoreanTimeToEnglishTime(targetDate));

          console.log(now, target);

          if (now > target) {
            alert('편지 작성이 마감되었습니다');
            return;
          }

          props.addStep();
        }}
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
  box-sizing: border-box;

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

