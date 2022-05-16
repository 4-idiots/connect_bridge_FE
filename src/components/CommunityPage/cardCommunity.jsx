import React from 'react';
import { Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useAuth } from '../../contexts/hooks/useAuth';

export const CommunityCardForm = ({
  postID,
  title,
  userNickname,
  viewCount,
  likeCount,
  commentCount,
  hashtag,
}) => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  return (
    <div
      style={{
        marginRight: '10%',
        marginLeft: '10%',

        marginBottom: '2%',

        border: '1px solid #e7e7e7',
      }}
    >
      <Card
        renderAs={Link}
        to={`/community/info/${decodedToken?.id}/${postID}`}
      >
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading
                style={{
                  marginBottom: '0%',
                  color: '#222222',
                }}
              >
                {title}
                <div
                  style={{
                    marginLeft: '84%',
                    color: '#888989',
                    fontSize: '0.5em',
                  }}
                >
                  🖤 : {likeCount} &nbsp;👀 : {viewCount}&nbsp;💬 :{' '}
                  {commentCount}
                  <br />
                  <br />
                  <p
                    style={{
                      textAlign: 'center',
                      color: '#888989',
                      fontSize: '1.1em',
                    }}
                  >
                    {userNickname}
                  </p>
                </div>
              </Heading>

              <Heading subtitle>
                <div
                  style={{
                    border: '2px solid #FFFFFF',
                    color: '#828687',
                    fontSize: '1.0em',
                    width: '800px',
                    height: '28px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  지나가는무성할 새겨지는 애기 아침이 헤는 겨울이 피어나듯이
                  까닭이요, 까닭입니다. 잔디가 언덕 까닭이요, 계십니다. 내일
                  비둘기, 가슴속에 까닭이요, 거외다. 이런 어머니, 프랑시스 별
                  책상을 말 아스라히 지나고 있습니다. 다 별들을 별 나의
                  듯합니다. 가득 무성할 풀이 아무 지나고 버리었습니다. 경,
                  이름을 가을 이름을 하나의 오는 별을 하늘에는 별 까닭입니다.
                  위에 부끄러운 이름과, 나의 남은 이름자 지나가는 버리었습니다.
                  마디씩 했던 시와 써 덮어 이런 차 하나에 까닭이요, 있습니다.
                </div>
              </Heading>

              <Heading
                subtitle
                style={{
                  color: '#e7e7e7',
                  fontSize: '0.9em',
                }}
              >
                {hashtag.map((item, id) => (
                  <span
                    item={item}
                    // eslint-disable-next-line react/no-array-index-key
                    key={id}
                    className="tag is-light is-small"
                  >
                    #{item}
                    <br />
                  </span>
                ))}
              </Heading>
            </Media.Item>
          </Media>
        </Card.Content>
      </Card>
    </div>
  );
};

CommunityCardForm.propTypes = {
  postID: PropTypes.number,
  userNickname: PropTypes.string,
  title: PropTypes.string,
  viewCount: PropTypes.number,
  likeCount: PropTypes.number,
  commentCount: PropTypes.number,
  hashtag: PropTypes.arrayOf(PropTypes.any),
};

CommunityCardForm.defaultProps = {
  postID: 0,
  userNickname: 'name',
  title: 'Ability',
  commentCount: 0,
  viewCount: 0,
  likeCount: 0,
  hashtag: [''],
};
