import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading3 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';
import { useState } from 'react';
import TextArea from '../components/TextArea';

interface SetPasswordPageProps {
  addStep: () => void;
}

const SetPasswordPage = (props: SetPasswordPageProps) => {
  const [password, setPassword] = useState('');

  return (
    <SetPasswordPageLayout>
      <TitleBox>
        <Heading3>비밀번호를 설정해주세요</Heading3>
        <Description>수정/삭제 시 작성자를 구분하는 용도로 사용됩니다</Description>
      </TitleBox>

      <VerticalSpace size={36} />

      <Input
        placeholder="비밀번호"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />

      <Button
        variant="primary"
        onClick={props.addStep}
      >작성 완료</Button>
    </SetPasswordPageLayout>
  )
}

export default SetPasswordPage;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
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