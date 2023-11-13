import styled from 'styled-components';
import Button from '../components/Button';
import { Description, Heading2 } from '../designs/typographys';
import Input from '../components/Input';
import VerticalSpace from '../components/VerticalSpace';
import useAppStore from '../store/appStore';

import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';

import { FiUser } from 'react-icons/fi';

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
      <VerticalSpace size={50} />
      <TitleBox>
        <FiUser size={36} />
        <VerticalSpace size={16} />
        <Heading2><b>작성자의 정보</b>를 입력해주세요</Heading2>
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

      <VerticalSpace size={32} />

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

      <VerticalSpace size={32} />

      <InputLabel>
      훈련생과의 관계
      </InputLabel>
      <Input
        value={relationship}
        onChange={(e) => {
          setRelationship(e.target.value);
        }}
      />

      <VerticalSpace size={200} />
  
      <Button
        variant="primary"
        onClick={props.addStep}
        disabled={!name || !address || !relationship}
      >다음</Button>
      {
        openPostCode && (
          <BackgroundBlur>
            <PostCode
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
          </BackgroundBlur>
        )
      }
    </UserInfoPageLayout>
  )
}

export default UserInfoPage;

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

const UserInfoPageLayout = styled.div`
  ${Button} {
    position: fixed;
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

  margin-bottom: 8px;
  margin-left: 4px;

  font-weight: 500;
`;

const PostCode = styled(DaumPostcode)`
  width: 100%;
  height: 100%;
`;

const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black}66;

  z-index: 9999999;

  ${PostCode} {
    position: absolute;
    top: 0;
    left: 0;

    opacity: 1 !important;
  }
`;
