import styled from 'styled-components';
import { Description } from '../designs/typographys';
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
              >공군기본군사훈련단 인터넷 편지</Description>
              <VerticalSpace size={120} />
              <DescriptionBox>
                <Description>
                  본 서비스는 공군기본군사훈련단(www.airforce.mil.kr)의 인터넷 편지 기능을 모바일에서 보다 편리하게 사용할 수 있도록 도와주는 서비스입니다.
                  어떠한 개인정보도 개발자가 저장하거나 열람할 수 없습니다. 모든 코드는 오픈소스로 공개되어 있습니다. (<a href="https://github.com/jiwonMe/orcinus2">GitHub 공개 레포지토리</a>)
                </Description>
              </DescriptionBox>
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
    position: fixed;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);

    width: calc(100% - 72px);

    max-width: calc(500px - 72px);

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

const DescriptionBox = styled.div`
  word-break: keep-all;
  text-align: justify;

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

export default MainPage;