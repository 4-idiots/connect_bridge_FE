/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Form, Button, Box } from 'react-bulma-components';
import SlateEditor from '../../SlateEditor/Editor';
import {
  getCommunityChange,
  patchCommunityService,
} from '../../services/communityService';

export const CommunityChangeForm = () => {
  const [community, setCommunity] = useState(null);
  const { communityID } = useParams();

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
      await patchCommunityService(
        communityID,
        community.hashtag,
        community.title,
        JSON.stringify(community.content),
      );
      alert('수정이 완료되습니다.');
      window.location = '/community';
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  useEffect(() => {
    const getAxios = async () => {
      try {
        const result = await getCommunityChange(communityID);
        setCommunity(result.data);
      } catch (error) {
        // pass
      }
    };

    getAxios();
  }, []);

  if (community) {
    return (
      <Container>
        <Heading style={{ textAlign: 'center', margin: 35 }}>
          커뮤니티 수정하기
        </Heading>
        <Box style={{ margin: 100, Box: 'center' }}>
          <Form.Field>
            <Form.Label>제목</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                onChange={e =>
                  setCommunity({ ...community, title: e.currentTarget.value })
                }
                value={community.title}
              />
            </Form.Control>
          </Form.Field>

          <Form.Label>내용</Form.Label>
          {community.content && (
            <SlateEditor value={community} setValue={setCommunity} />
          )}
          <br />
          <br />
          <Form.Field>
            <Form.Label>태그 (#)</Form.Label>
            <Form.Control>
              <div>
                <input
                  type="text"
                  value={community.tagInput || ''}
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
                <span item={item} key={id} className="tag is-warning is-medium">
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
              수정
            </Button>
          </div>
        </Box>
      </Container>
    );
  }
  return null;
};
