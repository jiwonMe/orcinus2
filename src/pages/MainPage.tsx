import styled from 'styled-components';
import { Description, Heading2 } from '../designs/typographys';
import Button from '../components/Button';

const MainPage = () => {

  return (
    <MainPageLayout>
      <TitleBox>
        <Heading2>Oricinus</Heading2>
        <Description>공군기초군사훈련단 인터넷 편지</Description>
      </TitleBox>
      <Button variant="primary">시작하기</Button>
    </MainPageLayout>
  )
}

const MainPageLayout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 18px;
  padding-top: 36px;

  ${Description}#contact {
    font-size: 12px;
    text-align: center;
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