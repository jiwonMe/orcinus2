const getURLQuery = () => {
  // get url queries from url
  const url = new URL(window.location.href);
  const memberSeq = url.searchParams.get('memberSeq');
  const sodaeVal = url.searchParams.get('sodaeVal');
  const traineeName = url.searchParams.get('traineeName');
  const traineeBirth = url.searchParams.get('traineeBirth');

  return {
    memberSeq,
    sodaeVal,
    traineeName,
    traineeBirth,
  };
};

export default getURLQuery;
