/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import SlateEditor from '../../SlateEditor/Editor';
import { postCommunityService } from '../../services/communityService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const CommunityWriteForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [community, setCommunity] = useState({
    title: '',
    content: [
      {
        type: 'paragaph',
        children: [{ text: '글작성' }],
      },
    ],
    tagInput: '',
    hashtag: [],
  });

  const onEnter = e => {
    if (e.key === 'Enter') {
      setCommunity({
        ...community,
        hashtag: [...community.hashtag, community.tagInput],
        tagInput: '',
      });
    }
  };

  const removeList = id => {
    setCommunity({
      ...community,
      hashtag: [...community.hashtag.filter(item => item !== id)],
    });
  };

  const postAxios = async () => {
    try {
      await postCommunityService(
        community.title,
        JSON.stringify(community.content),
        community.hashtag,
      );
      alert('작성이 완료되었습니다.');
      navigate('/community');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  return (
    <Container>
      <Mobile>
        {decodedToken ? (
          <>
            <Heading style={{ textAlign: 'center', margin: 60 }}>
              커뮤니티 글쓰기
            </Heading>
            <Box style={{ margin: 20, Box: 'center' }}>
              <Form.Field>
                <Form.Label>제목</Form.Label>
                <Form.Control>
                  <Form.Input
                    type="text"
                    onChange={e =>
                      setCommunity({
                        ...community,
                        title: e.currentTarget.value,
                      })
                    }
                    value={community.title}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Label>내용</Form.Label>
              <SlateEditor value={community} setValue={setCommunity} />

              <br />
              <br />

              <Form.Field>
                <Form.Label>태그 (#)</Form.Label>
                <Form.Control>
                  <div>
                    <input
                      type="text"
                      value={community.tagInput}
                      onChange={e =>
                        setCommunity({
                          ...community,
                          tagInput: e.currentTarget.value,
                        })
                      }
                      placeholder="해시태그 입력"
                      onKeyPress={onEnter}
                    />
                  </div>
                  <br />

                  {community.hashtag.map((item, id) => (
                    <span
                      item={item}
                      key={id}
                      className="tag is-warning is-medium"
                    >
                      #{item}
                      <button
                        key={id}
                        onClick={() => removeList(item)}
                        className="delete is-small"
                        type="button"
                      />
                      <br />
                    </span>
                  ))}
                </Form.Control>
              </Form.Field>

              <div style={{ textAlign: 'center' }}>
                <Button color="danger" size="small" onClick={() => postAxios()}>
                  작성
                </Button>
              </div>
            </Box>
          </>
        ) : (
          <Heading style={{ textAlign: 'center', marginTop: 80 }}>
            권한이 없습니다.
          </Heading>
        )}
      </Mobile>
      <Tablet>
        {decodedToken ? (
          <>
            <Heading style={{ textAlign: 'center', margin: 70 }}>
              커뮤니티 글쓰기
            </Heading>
            <Box style={{ margin: 50, Box: 'center' }}>
              <Form.Field>
                <Form.Label>제목</Form.Label>
                <Form.Control>
                  <Form.Input
                    type="text"
                    onChange={e =>
                      setCommunity({
                        ...community,
                        title: e.currentTarget.value,
                      })
                    }
                    value={community.title}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Label>내용</Form.Label>
              <SlateEditor value={community} setValue={setCommunity} />

              <br />
              <br />

              <Form.Field>
                <Form.Label>태그 (#)</Form.Label>
                <Form.Control>
                  <div>
                    <input
                      type="text"
                      value={community.tagInput}
                      onChange={e =>
                        setCommunity({
                          ...community,
                          tagInput: e.currentTarget.value,
                        })
                      }
                      placeholder="해시태그 입력"
                      onKeyPress={onEnter}
                    />
                  </div>
                  <br />

                  {community.hashtag.map((item, id) => (
                    <span
                      item={item}
                      key={id}
                      className="tag is-warning is-medium"
                    >
                      #{item}
                      <button
                        key={id}
                        onClick={() => removeList(item)}
                        className="delete is-small"
                        type="button"
                      />
                      <br />
                    </span>
                  ))}
                </Form.Control>
              </Form.Field>

              <div style={{ textAlign: 'center' }}>
                <Button color="danger" size="small" onClick={() => postAxios()}>
                  작성
                </Button>
              </div>
            </Box>
          </>
        ) : (
          <Heading style={{ textAlign: 'center', marginTop: 80 }}>
            권한이 없습니다.
          </Heading>
        )}
      </Tablet>

      <Desktop>
        {decodedToken ? (
          <>
            <Heading style={{ textAlign: 'center', margin: 120 }}>
              커뮤니티 글쓰기
            </Heading>
            <Box style={{ margin: 100, Box: 'center' }}>
              <Form.Field>
                <Form.Label>제목</Form.Label>
                <Form.Control>
                  <Form.Input
                    type="text"
                    onChange={e =>
                      setCommunity({
                        ...community,
                        title: e.currentTarget.value,
                      })
                    }
                    value={community.title}
                  />
                </Form.Control>
              </Form.Field>

              <Form.Label>내용</Form.Label>
              <SlateEditor value={community} setValue={setCommunity} />

              <br />
              <br />

              <Form.Field>
                <Form.Label>태그 (#)</Form.Label>
                <Form.Control>
                  <div>
                    <input
                      type="text"
                      value={community.tagInput}
                      onChange={e =>
                        setCommunity({
                          ...community,
                          tagInput: e.currentTarget.value,
                        })
                      }
                      placeholder="해시태그 입력"
                      onKeyPress={onEnter}
                    />
                  </div>
                  <br />

                  {community.hashtag.map((item, id) => (
                    <span
                      item={item}
                      key={id}
                      className="tag is-warning is-medium"
                    >
                      #{item}
                      <button
                        key={id}
                        onClick={() => removeList(item)}
                        className="delete is-small"
                        type="button"
                      />
                      <br />
                    </span>
                  ))}
                </Form.Control>
              </Form.Field>

              <div style={{ textAlign: 'center' }}>
                <Button color="danger" size="small" onClick={() => postAxios()}>
                  작성
                </Button>
              </div>
            </Box>
          </>
        ) : (
          <Heading style={{ textAlign: 'center', marginTop: 80 }}>
            권한이 없습니다.
          </Heading>
        )}
      </Desktop>
    </Container>
  );
};
