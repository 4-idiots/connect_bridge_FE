/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import validator from 'validator';
import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Card,
  Media,
  Content,
  Figure,
  Image,
} from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';
import ReadOnlySlate from '../../SlateEditor/ReadOnly';
import customAxios from '../../services/customAxios';

export const CommunityInfoForm = () => {
  const [users, setusers] = useState([]);
  const [postID, setpostID] = useState(0);
  const [title, settitle] = useState('');
  const [hashtag, sethashtag] = useState([]);
  const [userNickname, setuserNickname] = useState('');
  const [userPicture, setuserPicture] = useState('');
  const [viewCount, setviewCount] = useState(0);
  const [likeCount, setlikeCount] = useState(0);
  const [likeCounta, setlikeCounta] = useState(0);
  const [commentCount, setcommentCount] = useState(0);
  const { communityID } = useParams();
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const { teID } = useParams(`${decodedToken?.id}`);
  const [color, setColor] = useState('');
  const [state, setstate] = useState(0);
  const [comment, setcomment] = useState('');
  const onChange = event => setcomment(event.target.value);
  const [commentList, setcommentList] = useState();
  const [userAbility, setuserAbility] = useState('');
  const [userInterestMain, setuserInterestMain] = useState('');
  const [userInterestSub, setuserInterestSub] = useState('');
  const [userID, setuserID] = useState('');
  const [ida, setida] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    customAxios
      .post(`/api/community/comment`, {
        comment,
        postID,
      })
      .then(response => {
        if (comment === '') {
          return;
        }
        setcommentList(commentValueList => [comment, ...commentValueList]);
        setcomment('');
        window.location.reload();
      });
  };

  const [contents, setcontents] = useState(null);

  const statedata = () => {
    setstate(current => !current);
  };
  const ChangeClick = () => {
    window.location = `/community/change/${communityID}`;
  };
  const DeleteClick = () => {
    customAxios.delete(`/api/community/${communityID}`).then(response => {
      window.location = '/community';
      console.log(communityID);
    });
  };

  const likesClick = () => {
    if (state === 1) {
      customAxios
        .get(`/api/community/like?toPostId=${communityID}`)
        .then(response => {
          console.log(communityID);
          console.log(response.data.state);
        });
      // eslint-disable-next-line no-unused-expressions
      color === 'black'
        ? setlikeCounta(likeCount + 1) || setColor('danger')
        : setlikeCounta(likeCount - 1) || setColor('black');
    } else if (state === 2)
      customAxios
        .get(`/api/community/like?toPostId=${communityID}`)
        .then(response => {
          console.log(communityID);
          console.log(response.data.state);
        });

    // eslint-disable-next-line no-unused-expressions
    color === 'danger'
      ? setlikeCounta(likeCounta - 1) || setColor('black')
      : setlikeCounta(likeCounta + 1) || setColor('danger');
  };

  const userData = () => {
    customAxios.get(`/api/community/info/${communityID}`).then(response => {
      console.log(response);
      setusers(response.data);
      setpostID(response.data.postID);
      setuserNickname(response.data.userNickname);
      sethashtag(response.data.hashtag);
      settitle(response.data.title);
      setviewCount(response.data.viewCount);
      setlikeCounta(response.data.likeCounta);
      setlikeCount(response.data.likeCount);
      setstate(response.data.state);
      setColor(response.data.color);
      setuserAbility(response.data.userAbility);
      setuserInterestMain(response.data.userInterestMain);
      setuserInterestSub(response.data.userInterestSub);
      setcommentCount(response.data.commentCount);
      setcontents(response.data.contents);
      setuserID(response.data.userID);
      setcommentList(response.data.commentList);
      setcomment(response.data.commentList.comment);
      setuserPicture(response.data.userPicture);
    });
  };

  const CommentChangeClick = (cmID, cmComment) => {
    customAxios
      .patch(`/api/community/comment`, cmID, cmComment)
      .then(response => {
        window.location.reload();
      });
  };

  const CommentDeleteClick = cmID => {
    customAxios
      .delete(`/api/community/comment/${cmID}/${postID}`)
      .then(response => {
        window.location.reload();
      });
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <Main>
      <Top1>
        <Top2>.</Top2>
        <Top3>
          <Top311>
            <Top31>{title}</Top31>
          </Top311>
          <Top32>
            {hashtag.map((item, id) => (
              <Top321
                item={item}
                // eslint-disable-next-line react/no-array-index-key
                key={id}
                className="tag is-light is-small"
              >
                #{item}
                <br />
              </Top321>
            ))}
          </Top32>
          <Top33>
            <Top331>
              <Top3311>
                👀<span style={{ color: 'white' }}>{viewCount}</span>&nbsp;
              </Top3311>
              <Top3311>
                💬<span style={{ color: 'white' }}>{commentCount}</span>&nbsp;
              </Top3311>
              <Top3311>
                🤍<span style={{ color: 'white' }}>{likeCount}</span>
              </Top3311>
            </Top331>
          </Top33>
        </Top3>
      </Top1>
      <Layout1>
        <Layout2>
          <Layout3>
            <Layout31>
              {state === 1 ? (
                <Button onClick={likesClick} onChange={statedata} color={color}>
                  🤍
                </Button>
              ) : state === 2 ? (
                <Button onClick={likesClick} onChange={statedata} color={color}>
                  🤍
                </Button>
              ) : (
                <> </>
              )}
            </Layout31>
            <Layout32>
              <Layout321>
                <img src={userPicture} alt="img" />
              </Layout321>
            </Layout32>
            <Layout33>
              <div>
                {userNickname}
                <Layout331>
                  <Layout3311>
                    {userInterestMain}/ {userInterestSub}
                  </Layout3311>

                  <Layout3311>{userAbility}</Layout3311>
                </Layout331>
              </div>
            </Layout33>
          </Layout3>
          <Comment1>
            <Comment11>
              {contents && <ReadOnlySlate value={contents} />}
              <br />
              <br />
              <br />
              <br />
              <br />
            </Comment11>
          </Comment1>
        </Layout2>
        <Botton1>
          <Reply1>
            <Reply11>
              <Reply111>
                {commentList &&
                  commentList.map((item, id) => (
                    <div key={id}>
                      <Reply1111>
                        <Reply11111>{item.userNickname} </Reply11111>

                        <Reply11122>
                          <Reply11121>{item.comment}</Reply11121>
                        </Reply11122>
                      </Reply1111>
                      <Reply111220>
                        {item.userID === decodedToken?.id ? (
                          <Button.Group align="center">
                            <Reply111221
                              color="black"
                              onClick={() =>
                                CommentChangeClick(item.id, item.comment)
                              }
                            >
                              수정
                            </Reply111221>
                            |
                            <Reply111223
                              color="black"
                              onClick={() => CommentDeleteClick(item.id)}
                            >
                              삭제
                            </Reply111223>
                          </Button.Group>
                        ) : (
                          <> </>
                        )}
                      </Reply111220>
                    </div>
                  ))}
              </Reply111>
            </Reply11>
          </Reply1>
          <Botton11>
            <Botton12>
              <Botton2
                placeholder="댓글달기..."
                value={comment || ''}
                onChange={onChange}
              >
                <div style={{ textAlign: 'center' }}>
                  {userID === decodedToken?.id ? (
                    <Button.Group align="center">
                      <Button color="success" onClick={ChangeClick}>
                        수정하기
                      </Button>
                      <Button color="success" onClick={DeleteClick}>
                        삭제하기
                      </Button>
                    </Button.Group>
                  ) : (
                    <> </>
                  )}
                </div>
              </Botton2>
              <Botton3 type="button" className="commetBtn" onClick={onSubmit}>
                등록
              </Botton3>
            </Botton12>
          </Botton11>
        </Botton1>
      </Layout1>
    </Main>
  );
};
const Main = styled.div`
  color: #333;
`;

const Top1 = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1;
  background-color: #222;
  top: 51px;
  overflow: hidden;
`;
const Top2 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #5f5f5f;
`;
const Top3 = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 360px;
  box-sizing: border-box;
  padding-bottom: 70px;
  position: relative;
`;

const Top31 = styled.h2`
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

const Top311 = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 35px;
`;
const Top32 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0;
  flex-wrap: wrap;
  max-width: 600px;
`;
const Top321 = styled.div`
  font-size: 14px;
  color: #fff;
  line-height: 14px;
  margin-right: 6px;
`;

const Top33 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 40px;
`;

const Top331 = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;

const Top3311 = styled.p`
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

const Layout1 = styled.section`
  box-sizing: border-box;
  max-width: 100%;
  margin-top: 400px;
  position: relative;
  z-index: 5;
  background-color: #fff;
  padding-bottom: 30px;
  overflow: hidden;
`;

const Layout2 = styled.div`
  width: 100%;
  box-shadow: 0 3px 24px 0 rgb(0 0 0 / 8%);
  padding: 0 40px;
  box-sizing: border-box;
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
`;

const Layout3 = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Layout31 = styled.div`
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

const Layout32 = styled.div`
  width: 130px;
  height: 94px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: transparent;
  margin-right: 30px;
  position: relative;
`;

const Layout321 = styled.div`
  width: 130px;
  height: 94px;
  object-fit: cover;
`;

const Layout33 = styled.div`
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Layout331 = styled.p`
  font-size: 17px;
  color: #42495b;
  line-height: 17px;
`;

const Layout3311 = styled.span`
  display: block;
  font-size: 13px;
  color: #8e8ea2;
  margin-top: 8px;
`;

const Comment1 = styled.div`
  box-sizing: border-box;
  padding: 20px 0 0;
`;

const Comment11 = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

const Botton1 = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px 40px 10px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Reply1 = styled.div`
  box-sizing: border-box;
  background-color: #f7f7f7;
`;

const Reply11 = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 34px;
`;

const Reply111 = styled.div`
  width: 100%;
`;

const Reply1111 = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #ebebeb;
`;
const Reply11111 = styled.p`
  font-size: 1.2rem;
  color: #42495b;
  position: relative;
  font-weight: bold;
`;

const Reply11121 = styled.div`
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

const Reply11122 = styled.div`
  margin-left: 5px;
  width: 870px;
  font-family: 'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
    sans-serif;
  font-size: 14px;
`;

const Reply111220 = styled.div`
  margin-top: 4px;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;

const Reply111221 = styled.button`
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

const Reply111223 = styled.button`
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

const Botton11 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Botton12 = styled.div`
  flex: 1 1;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const Botton2 = styled.textarea`
  flex: 1 1;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 11px 16px;
  border-radius: 4px;
  margin-right: 14px;
  resize: none;
  border: 1px solid #9796a7;
`;

const Botton3 = styled.button`
  background-color: #42495b;
  color: #fff;
  border: 1px solid #42495b;
  width: auto;
  padding: 8px 29px !important;
  transition: all 0.2s;
  font-size: 0.75rem;
  border-radius: 4px;
`;
