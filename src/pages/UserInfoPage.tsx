import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading3 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';
import useAppStore from '../store/appStore';

import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';

interface UserInfoPageProps {
  addStep: () => void;
}

const UserInfoPage = (props: UserInfoPageProps) => {
  const [openPostCode, setOpenPostCode] = useState(false);

  const {
    senderName: name, setSenderName: setName,
    setSenderZipCode: setZipCode,
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
      <div
        onClick={() => {
          setOpenPostCode(true);
        }}
      >
        <Input
          value={address}
          onFocus={() => {
            setOpenPostCode(true);
          }}
          onClick={() => {
            setOpenPostCode(true);
          }}
        />
      </div>

      <VerticalSpace size={8} />
      <Input
        placeholder="상세주소"
        id="address-detail"
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
        disabled={!name || !address || !relationship}
      >다음</Button>

      <DaumPostcode
        onComplete={(data) => {
          setAddress(data.address);
          setZipCode(data.zonecode);
          setOpenPostCode(false);
          // focus on address detail
          const addressDetailInput = document.querySelector<HTMLInputElement>('#address-detail');
          addressDetailInput?.focus();

        }}
        autoClose
        style={{
          display: openPostCode ? 'block' : 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      />
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

const PostCode = styled(DaumPostcode)`
  width: 100%;
  height: 100%;
`;