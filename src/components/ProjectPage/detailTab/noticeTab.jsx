import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Heading } from 'react-bulma-components';
import { projectGetNoticeServie } from '../../../services/projectService';
import * as S from './style';
import { NoticeUpload } from './noticeUpload';

export const NoticeTab = ({ projectID, isMaster }) => {
  const [notice, setNotice] = useState(null);

  const getAxios = async () => {
    try {
      const result = await projectGetNoticeServie(projectID);
      setNotice(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  return (
    <div>
      <Heading size={4}>공지</Heading>
      {notice && notice.length !== 0 ? (
        <>
          {notice.map(item => (
            <S.NoticeBox key={item.id}>
              <Icon>
                <i className="fas fa-bullhorn" />
              </Icon>
              <S.NoticeContent>{item.content}</S.NoticeContent>
            </S.NoticeBox>
          ))}
        </>
      ) : (
        <S.PSBox>
          <S.PSNull>
            <S.PSText>아직 작성된 공지가 없습니다.</S.PSText>
          </S.PSNull>
        </S.PSBox>
      )}
      {isMaster ? <NoticeUpload projectID={projectID} /> : ''}
    </div>
  );
};

NoticeTab.propTypes = {
  projectID: PropTypes.string.isRequired,
  isMaster: PropTypes.bool.isRequired,
};
