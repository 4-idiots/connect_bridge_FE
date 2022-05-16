/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bulma-components';
import { useParams } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import * as S from './infoStyle';
import { useAuth } from '../../contexts/hooks/useAuth';
import ReadOnlySlate from '../../SlateEditor/ReadOnly';
import {
  getSomeCommunity,
  deleteCommentService,
  changeCommentService,
  deleteCommunityService,
  postCommentService,
  commmmunityLikeService,
} from '../../services/communityService';

export const CommunityInfoForm = () => {
  const { communityID } = useParams();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [community, setCommunity] = useState(null);
  const [likeCount, setlikeCount] = useState(0);
  const [isLike, setIsLike] = useState(true);
  const [comment, setcomment] = useState('');

  const onChange = event => setcomment(event.target.value);

  const submit = async () => {
    try {
      await postCommentService(comment, communityID);
      window.location.reload();
    } catch (error) {
      // pass
    }
  };

  const handleLike = async () => {
    if (isLike) {
      setlikeCount(likeCount - 1);
    } else {
      setlikeCount(likeCount + 1);
    }
    setIsLike(!isLike);
    try {
      await commmmunityLikeService(communityID);
    } catch (error) {
      // pass
    }
  };

  const ChangeClick = () => {
    window.location = `/community/change/${communityID}`;
  };

  const DeleteClick = async () => {
    try {
      await deleteCommunityService(communityID);
      window.location = '/community';
    } catch (error) {
      // pass
    }
  };

  const changeComment = async (cmID, cmComment) => {
    try {
      await changeCommentService(cmID, cmComment);
      window.location.reload();
    } catch (error) {
      // pass
    }
  };

  const deleteComment = async cmID => {
    try {
      await deleteCommentService(cmID, communityID);
      window.location.reload();
    } catch (error) {
      // pass
    }
  };

  useEffect(() => {
    const getAxios = async () => {
      try {
        const result = await getSomeCommunity(communityID);
        setCommunity(result.data);
        setlikeCount(result.data.likeCount);
        if (result.data.state === 2) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      } catch (error) {
        // pass
      }
    };
    getAxios();
  }, []);

  if (community) {
    return (
      <S.Main>
        <S.Top1>
          <S.Top2>.</S.Top2>
          <S.Top3>
            <S.Top311>
              <S.Top31>{community.title}</S.Top31>
            </S.Top311>
            <S.Top32>
              {community.hashtag.map((item, id) => (
                <S.Top321
                  item={item}
                  // eslint-disable-next-line react/no-array-index-key
                  key={id}
                  className="tag is-light is-small"
                >
                  #{item}
                  <br />
                </S.Top321>
              ))}
            </S.Top32>
            <S.Top33>
              <S.Top331>
                <S.Top3311>
                  👀
                  <span style={{ color: 'white' }}>{community.viewCount}</span>
                  &nbsp;
                </S.Top3311>
                <S.Top3311>
                  💬
                  <span style={{ color: 'white' }}>
                    {community.commentCount}
                  </span>
                  &nbsp;
                </S.Top3311>
                <S.Top3311>
                  🤍
                  <span style={{ color: 'white' }}>{likeCount}</span>
                </S.Top3311>
              </S.Top331>
            </S.Top33>
          </S.Top3>
        </S.Top1>
        <S.Layout1>
          <S.Layout2>
            <S.Layout3>
              <S.Layout31>
                <Button
                  onClick={handleLike}
                  color={isLike ? 'danger' : 'black'}
                >
                  🤍
                </Button>
              </S.Layout31>
              <S.Layout32>
                <S.Layout321>
                  <img src={community.userPicuture} alt="img" />
                </S.Layout321>
              </S.Layout32>
              <S.Layout33>
                <div>
                  {community.userNickname}
                  <S.Layout331>
                    <S.Layout3311>
                      {community.userInterestMain} / {community.userInterestSub}
                    </S.Layout3311>

                    <S.Layout3311>{community.userAbility}</S.Layout3311>
                  </S.Layout331>
                </div>
              </S.Layout33>
            </S.Layout3>

            <S.Comment1>
              <S.Comment11>
                {community.contents && (
                  <ReadOnlySlate value={community.contents} />
                )}
                <br />
                <br />
                <br />
                <br />
                <br />
              </S.Comment11>
            </S.Comment1>
            <S.Delete1>
              {community.userID === decodedToken?.id ? (
                <Button.Group align="right">
                  <Button color="" onClick={ChangeClick}>
                    수정
                  </Button>
                  <Button color="" onClick={DeleteClick}>
                    삭제
                  </Button>
                </Button.Group>
              ) : (
                <> </>
              )}
            </S.Delete1>
          </S.Layout2>
          <S.Botton1>
            <S.Reply1>
              <S.Reply11>
                <S.Reply111>
                  {community.commentList &&
                    community.commentList.map((item, id) => (
                      <div key={id}>
                        <S.Reply1111>
                          <S.Reply11111>{item.userNickname} </S.Reply11111>
                          <S.Reply11122>
                            <S.Reply11121>{item.comment}</S.Reply11121>
                          </S.Reply11122>
                        </S.Reply1111>
                        <S.Reply111220>
                          {item.userID === decodedToken?.id ? (
                            <Button.Group align="center">
                              <S.Reply111221
                                color="black"
                                onClick={() =>
                                  changeComment(item.id, item.comment)
                                }
                              >
                                수정
                              </S.Reply111221>
                              |
                              <S.Reply111223
                                color="black"
                                onClick={() => deleteComment(item.id)}
                              >
                                삭제
                              </S.Reply111223>
                            </Button.Group>
                          ) : (
                            <> </>
                          )}
                        </S.Reply111220>
                      </div>
                    ))}
                </S.Reply111>
              </S.Reply11>
            </S.Reply1>
            <S.Botton11>
              <S.Botton12>
                <S.Botton2
                  placeholder="댓글달기..."
                  value={comment || ''}
                  onChange={onChange}
                >
                  &nbsp;
                </S.Botton2>
                <S.Botton3 type="button" className="commetBtn" onClick={submit}>
                  등록
                </S.Botton3>
              </S.Botton12>
            </S.Botton11>
          </S.Botton1>
        </S.Layout1>
      </S.Main>
    );
  }
  return null;
};
