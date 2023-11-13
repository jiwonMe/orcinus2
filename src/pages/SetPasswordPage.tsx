import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';

import TextArea from '../components/TextArea';
import useAppStore from '../store/appStore';

import { FiLock } from 'react-icons/fi';
import { useState } from 'react';

interface SetPasswordPageProps {
  addStep: () => void;
}

const SetPasswordPage = (props: SetPasswordPageProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  const { password, setPassword } = useAppStore();

  return (
    <SetPasswordPageLayout>
      <VerticalSpace size={50} />
      <TitleBox>
        <FiLock size={36} />
        <VerticalSpace size={16} />
        <Heading2><b>비밀번호</b>를 설정해주세요</Heading2>
        <Description>수정/삭제 시 작성자를 구분하는 용도로 사용됩니다</Description>
      </TitleBox>

      <VerticalSpace size={36} />

      <Input
        placeholder="4자리 이상 입력해주세요"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        minLength={4}
      />

      <Button
        variant="primary"
        onClick={() => {
          setButtonDisabled(true);
          props.addStep()
      }}
        disabled={password.length < 4 || buttonDisabled}
      >{
        buttonDisabled ? '전송 중' : '작성완료'
      }</Button>
    </SetPasswordPageLayout>
  )
}

export default SetPasswordPage;

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
const SetPasswordPageLayout = styled.div`
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