// 배열에서 text만 추출해서 평문으로 바꿔주는 함수
export const arrayToPlain = (content, setContent) => {
  let result = '';
  content.map(word => {
    return word.children.map(info => {
      // eslint-disable-next-line no-return-assign
      return (result = result.concat(' ', info.text));
    });
  });
  setContent([
    {
      type: 'paragaph',
      children: [{ text: result }],
    },
  ]);
};

// 사진 변환 및 미리보기 만드는 함수
export const encodeFileToBase64 = (fileBlob, data, setData) => {
  const reader = new FileReader();
  reader.readAsDataURL(fileBlob);
  return new Promise(resolve => {
    reader.onload = () => {
      setData({
        ...data,
        preview: reader.result,
        projectImg: fileBlob,
      });
      resolve();
    };
  });
};
