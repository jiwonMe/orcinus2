interface getTraineeInfoParams {
  traineeName: string;
  traineeBirth: string;
  memberSeq: string;
}

const getTraineeInfo = async (params: getTraineeInfoParams) => {
  const { traineeName, traineeBirth, memberSeq } = params;

  const endpointURL = `https://corsproxy.io/?https://www.airforce.mil.kr/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub&dum=dum&command2=getEmailList&searchName=${traineeName}&searchBirth=${traineeBirth}&memberSeq=${memberSeq}`;

  const data = await fetch(endpointURL, {
    method: 'GET',
  });

  // find div class 'info'
  const html = await data.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const infoDiv = doc.querySelector('.info');

  // get trainee info
  const getTextContent = (dtText: string): string | null => {
    const dtElements = infoDiv?.querySelectorAll('dt');
    if (!dtElements) throw new Error('dtElements is null');
    for (let i = 0; i < dtElements.length; i++) {
      if (dtElements[i].textContent?.trim() === dtText) {
        return dtElements[i].nextElementSibling?.textContent?.trim() || null;
      }
    }
    return null;
  };

  const name = getTextContent('성명');
  const enlistmentDate = getTextContent('입대날짜');
  const graduationDate = getTextContent('수료예정날짜');
  const letterWritingPeriod = getTextContent('인터넷 편지 작성기간');
  const traineeAffiliation = getTextContent('소속');

  console.log('info', {
    name,
    enlistmentDate,
    graduationDate,
    letterWritingPeriod,
    traineeAffiliation,
  });

  return {
    name,
    enlistmentDate,
    graduationDate,
    letterWritingPeriod,
    traineeAffiliation,
  };
};

export default getTraineeInfo;
