// resolve cors issue
interface SubmitEmailParams {
  senderZipCode: string;
  senderAddr1: string;
  senderAddr2: string;
  senderName: string;
  relationship: string;
  title: string;
  contents: string;
  password: string;
}

const submitEmail = async (params: SubmitEmailParams) => {
  if (import.meta.env.VITE_MODE === 'development') {
    return {
      result: 'success',
    };
  } else {
    try {
      // use GET method, data is in query string
      const response = await fetch(
        `https://corsproxy.io/?https://www.airforce.mil.kr/user/emailPicSaveEmail.action?siteId=last2&parent=%2Fuser%2FindexSub.action%3FcodyMenuSeq%3D156893223%26siteId%3Dlast2%26menuUIType%3Dsub%26dum%3Ddum%26command2%3DwriteEmail%26page%3D1%26memberSeqVal%3D${
          import.meta.env.VITE_MEMBER_SEQ
        }%26sodaeVal%3D1341&page=1&command2=writeEmail&memberSeqVal=${
          import.meta.env.VITE_MEMBER_SEQ
        }&sodaeVal=1341&senderZipcode=${params.senderZipCode}&senderAddr1=${
          params.senderAddr1
        }&senderAddr2=${params.senderAddr2}&senderName=${
          params.senderName
        }&relationship=${params.relationship}&title=${params.title}&contents=${
          params.contents
        }[이 편지는 orcinus.email에서 작성되었습니다]&password=${
          params.password
        }`,
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        console.error('fetch error', error);
      } else {
        console.error('error', error);
      }
    }
  }
};

export default submitEmail;
