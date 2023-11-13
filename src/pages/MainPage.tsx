import styled from 'styled-components'


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

const ProfileBox = styled.div`
  position: absolute;
  top: 36px;
  right: 36px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  &:active {
    background-color: ${({ theme }) => theme.colors.gray50};
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 18px;
  margin-bottom: 28px;
  gap: 4px;
`;

const QuizCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;
