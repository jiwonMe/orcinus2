const getURLQuery = () => {
  // ?memberSeq=123&sodaeVal=123&traineeName=123&traineeBirth=123

  // get url queries from url
  const url = new URL(window.location.href);
  const memberSeq = url.searchParams.get('memberSeq');
  const sodaeVal = url.searchParams.get('sodaeVal');
  const traineeName = url.searchParams.get('traineeName');
  const traineeBirth = url.searchParams.get('traineeBirth');

  return {
    memberSeq: memberSeq || import.meta.env.VITE_MEMBER_SEQ,
    sodaeVal: sodaeVal || import.meta.env.VITE_SODAE_VAL,
    traineeName: traineeName || import.meta.env.VITE_TRAINEE_NAME,
    traineeBirth: traineeBirth || import.meta.env.VITE_TRAINEE_BIRTH,
  };
};

export default getURLQuery;
