import styled from 'styled-components';
import { Description, Heading2 } from '../designs/typographys';
import Button from '../components/Button';
import { useState } from 'react';
import TraineeInfoPage from './TraineeInfoPage';
import UserInfoPage from './UserInfoPage';
import WriteLetterPage from './WriteLetterPage';
import SetPasswordPage from './SetPasswordPage';
import FinishPage from './FinishPage';
import submitEmail from '../api/submitEmail';
import useAppStore from '../store/appStore';
import VerticalSpace from '../components/VerticalSpace';

const MainPage = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const appState = useAppStore();

  const addStep = () => {
    setCurrentStep(currentStep + 1);
  }

  return (
    <MainPageLayout>
      {
        currentStep === 0 && (
          <>
            <TitleBox>
              <Description>jiwon.me 사이드프로젝트</Description>
              <LogoImage src="/orcinus-logo.png" />
              <Description
                className="title-description"
              >공군기초군사훈련단 인터넷 편지</Description>
              <VerticalSpace size={120} />
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
            addStep={async () => {
              
              try {
                await submitEmail({
                  senderZipCode: appState.senderZipCode,
                  senderAddr1: appState.senderAddr1,
                  senderAddr2: appState.senderAddr2,
                  senderName: appState.senderName,
                  relationship: appState.relationship,
                  title: appState.title,
                  contents: appState.contents,
                  password: appState.password,
                });

                appState.reset();
                setCurrentStep(5);
              } catch (e) {
                alert('전송에 실패했습니다. 다시 시도해주세요.');
                setCurrentStep(4);
              }
            }}
            />
        )
      }
      {
        currentStep === 5 && (
          <FinishPage
            addStep={() => {
              setCurrentStep(0);
              }}
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

const LogoImage = styled.img`
  width: 180px;
  height: auto;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-left: 18px;
  margin-bottom: 28px;
  gap: 4px;

  height: 100%;

  .title-description {
    color: ${({ theme }) => theme.colors.gray700};
    font-weight: 500;
  }
`;

export default MainPage;