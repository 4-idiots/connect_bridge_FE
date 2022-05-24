import styled from 'styled-components';

export const Main = styled.div`
  color: #333;
`;

export const Top1 = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1;
  background-color: #222;
  top: 51px;
  overflow: hidden;
`;
export const Top2 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #5f5f5f;
`;
export const Top3 = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 360px;
  box-sizing: border-box;
  padding-bottom: 70px;
  position: relative;
`;

export const Top31 = styled.h2`
  color: #fff;
  max-width: 600px;
  min-width: 320px;
  display: block;
  text-align: center;
  margin: 0 auto;
  font-size: 28px;
  line-height: 38px;
  font-weight: bold;
`;
export const Top31Mobile = styled.h2`
  color: #fff;
  max-width: 600px;
  min-width: 320px;
  display: block;
  text-align: center;
  margin: 0 25px;
  font-size: 28px;
  line-height: 38px;
  font-weight: bold;
`;

export const Top311 = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 35px;
`;
export const Top32 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0;
  flex-wrap: wrap;
  max-width: 600px;
`;
export const Top321 = styled.div`
  font-size: 14px;
  color: #fff;
  line-height: 14px;
  margin-right: 6px;
`;

export const Top33 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 40px;
`;

export const Top331 = styled.div`
  margin-bottom: 0;
  padding: 0;
  display: block;
`;

export const Top331Mobile = styled.div`
  margin-bottom: -55px;
  padding: 0;
  display: block;
`;

export const Top3311 = styled.p`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const Layout1 = styled.section`
  box-sizing: border-box;
  max-width: 100%;
  margin-top: 400px;
  position: relative;
  z-index: 5;
  background-color: #fff;
  padding-bottom: 30px;
  overflow: hidden;
`;

export const Layout2 = styled.div`
  width: 100%;
  box-shadow: 0 3px 24px 0 rgb(0 0 0 / 8%);
  padding: 0 40px;
  box-sizing: border-box;
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
`;

export const Layout3 = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Layout31 = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 0 19px 8px rgb(0 0 0 / 6%);
  cursor: pointer;
  position: absolute;
  top: 34px;
  right: 0;
`;

export const Layout32 = styled.div`
  width: 130px;
  height: 94px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: transparent;
  margin-right: 30px;
  position: relative;
`;

export const Layout321 = styled.div`
  width: 130px;
  height: 94px;
  object-fit: cover;
`;

export const Layout33 = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Layout331 = styled.p`
  font-size: 17px;
  color: #42495b;
  line-height: 17px;
`;

export const Layout3311 = styled.span`
  display: block;
  font-size: 13px;
  color: #8e8ea2;
  margin-top: 8px;
`;

export const Comment1 = styled.div`
  box-sizing: border-box;
  padding: 20px 0 0;
`;

export const Comment11 = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const Delete1 = styled.div``;

export const Botton1 = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px 40px 10px;
  max-width: 1200px;
  margin: 0 auto;
`;
export const Reply1 = styled.div`
  box-sizing: border-box;
  background-color: #f7f7f7;
`;

export const Reply11 = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 34px;
`;

export const Reply111 = styled.div`
  width: 100%;
`;

export const Reply1111 = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #ebebeb;
`;
export const Reply11111 = styled.p`
  font-size: 1.2rem;
  color: #42495b;
  position: relative;
  font-weight: bold;
`;

export const Reply11121 = styled.div`
  background: none;
  border: none;
  color: #222;
  flex: 1 1;
  padding: 13px;
  resize: none;
  opacity: 1;
  -webkit-text-fill-color: #222;
  width: 100%;
  vertical-align: middle;
`;

export const Reply11122 = styled.div`
  margin-left: 8px;
  width: 870px;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  font-size: 14px;
`;
export const Reply11122Tablet = styled.div`
  margin-left: 15px;
  width: 600px;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  font-size: 14px;
`;
export const Reply11122Mobile = styled.div`
  margin-left: -19px;
  width: 220px;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  font-size: 14px;
`;

export const Reply111220 = styled.div`
  margin-top: 4px;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const Reply111221 = styled.button`
  color: #42495b;
  font-size: 0.75rem;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  vertical-align: middle;
`;

export const Reply111223 = styled.button`
  font-size: 0.75rem;
  color: #81839c;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  vertical-align: middle;
`;

export const Botton11 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Botton12 = styled.div`
  flex: 1 1;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

export const Botton2 = styled.textarea`
  flex: 1 1;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 11px 16px;
  border-radius: 4px;
  margin-right: 14px;
  resize: none;
  border: 1px solid #9796a7;
`;

export const Botton3 = styled.button`
  background-color: #42495b;
  color: #fff;
  border: 1px solid #42495b;
  width: auto;
  padding: 8px 29px !important;
  transition: all 0.2s;
  font-size: 0.75rem;
  border-radius: 4px;
`;
