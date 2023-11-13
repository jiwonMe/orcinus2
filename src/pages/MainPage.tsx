import styled from 'styled-components';
import { Description, Heading2 } from '../designs/typographys';
import Button from '../components/Button';
import { useState } from 'react';
import TraineeInfoPage from './TraineeInfoPage';
import UserInfoPage from './UserInfoPage';
import WriteLetterPage from './WriteLetterPage';
import SetPasswordPage from './SetPasswordPage';

const MainPage = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const addStep = () => {
    setCurrentStep(currentStep + 1);
  }

  return (
    <MainPageLayout>
      {
        currentStep === 0 && (
          <>
            <TitleBox>
              <Heading2>Oricinus</Heading2>
              <Description>공군기초군사훈련단 인터넷 편지</Description>
            </TitleBox>
            <Button
              variant="primary"
              onClick={addStep}
            >시작하기</Button>
          </>
        )
      }
      {
        currentStep === 1 && (
          <TraineeInfoPage
            addStep={addStep}
          />
        )
      }
      {
        currentStep === 2 && (
          <UserInfoPage
            addStep={addStep}
          />
        )
      }
      {
        currentStep === 3 && (
          <WriteLetterPage
            addStep={addStep}
          />
        )
      }
      {
        currentStep === 4 && (
          <SetPasswordPage
            addStep={addStep}
            />
        )
      }
    </MainPageLayout>
  )
}

const MainPageLayout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 36px;
  padding-top: 36px;

  height: 100%;

  ${Description}#contact {
    font-size: 12px;
    text-align: center;
  }

  ${Button} {
    position: absolute;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);

    width: calc(100% - 72px);

    margin-bottom: 60px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 18px;
  margin-bottom: 28px;
  gap: 4px;
`;

export default MainPage;