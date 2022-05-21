// 개별의 ID에 좋아요를 확인하는 함수
export const checkLike = async (itemID, setUserLike, getFunc) => {
  try {
    const result = await getFunc(itemID);
    setUserLike(result.data);
  } catch (error) {
    setUserLike(false);
  }
};

// 사용자에게 보여지는 UI 좋아요를 선조치 하는 함수
export const changeDynLike = (likeNow, dynNow, setDynNow) => {
  if (likeNow) {
    setDynNow(dynNow - 1);
  } else {
    setDynNow(dynNow + 1);
  }
};

// 좋아요 클릭하는 함수
export const likeCommunicate = async (likeFunc, itemID) => {
  try {
    await likeFunc(itemID);
  } catch (error) {
    // pass
  }
};
