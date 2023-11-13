import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading3 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';
import useAppStore from '../store/appStore';

interface UserInfoPageProps {
  addStep: () => void;
}

const UserInfoPage = (props: UserInfoPageProps) => {
  const {
    senderName: name, setSenderName: setName,
    senderAddr1: address, setSenderAddr1: setAddress,
    senderAddr2: addressDetail, setSenderAddr2: setAddressDetail,
    relationship, setRelationship,
  } = useAppStore();


  return (
    <UserInfoPageLayout>
      <TitleBox>
        <Heading3>작성자의 정보를 입력해주세요</Heading3>
        <Description>신원을 확인하기 위한 목적입니다</Description>
      </TitleBox>

      <VerticalSpace size={36} />

      <InputLabel>
      이름
      </InputLabel>    
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <VerticalSpace size={16} />

      <InputLabel>
      주소
      </InputLabel>
      <Input
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />

      <VerticalSpace size={8} />
      <Input
        value={addressDetail}
        onChange={(e) => {
          setAddressDetail(e.target.value);
        }}
      />

      <VerticalSpace size={16} />

      <InputLabel>
      훈련생과의 관계
      </InputLabel>
      <Input
        value={relationship}
        onChange={(e) => {
          setRelationship(e.target.value);
        }}
      />
  
      <Button
        variant="primary"
        onClick={props.addStep}
        disabled={!name || !address || !addressDetail || !relationship}
      >다음</Button>
    </UserInfoPageLayout>
  )
}

export default UserInfoPage;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

const UserInfoPageLayout = styled.div`
  ${Button} {
    position: absolute;
    bottom: 0;

    /* center */
    left: 50%;
    transform: translateX(-50%);
  }
`;

const InputLabel = styled(Description)`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.gray700};

  gap: 4px;

  margin-bottom: 4px;
  margin-left: 4px;
`;
