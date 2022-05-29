// 데이터를 가져와서 state에 저장하는 함수
export const getData = async (setLoad, setData, getFunc, mount) => {
  setLoad(true);
  try {
    const result = await getFunc();
    if (mount) {
      setData(result.data);
      setLoad(false);
    }
  } catch (error) {
    setLoad(false);
  }
};

// 아이디 한 개의 상세 데이터를 가져와서 state에 저장하는 함수
export const getDetailData = async (
  setLoad,
  setData,
  getFunc,
  itemID,
  mount,
) => {
  setLoad(true);
  try {
    const result = await getFunc(itemID);
    if (mount) {
      setData(result.data);
    }
    setLoad(false);
  } catch (error) {
    setLoad(false);
  }
};

// formData를 업로드 하는 함수
export const uploadFormData = async (formdata, uploadFunc, navi, link) => {
  try {
    await uploadFunc(formdata);
    alert('등록 되었습니다.');
    navi(link);
  } catch (error) {
    alert('다시 시도해주세요');
  }
};

// formData를 수정 후 전송하는 함수
export const updateFormData = async (formdata, link, updateFunc, navi) => {
  try {
    await updateFunc(formdata);
    alert('수정이 완료되었습니다.');
    navi(link);
  } catch (error) {
    alert('다시 시도해주세요');
  }
};

// 데이터 삭제하는 함수
export const deleteData = async (itemID, link, deleteFunc) => {
  try {
    await deleteFunc(itemID);
    alert('삭제 완료');
    window.location.replace(link);
  } catch (error) {
    alert('잠시후 다시 시도해주세요');
    window.location.replace(link);
  }
};
