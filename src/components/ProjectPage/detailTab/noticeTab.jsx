import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-bulma-components';
import { projectGetNoticeServie } from '../../../service';
import * as S from './style';
import { NoticeUpload } from './noticeUpload';

export const NoticeTab = ({ projectID, isMaster }) => {
  const [notice, setNotice] = useState(null);

  const getAxios = async () => {
    try {
      const result = await projectGetNoticeServie(projectID);
      setNotice(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  return (
    <div>
      {notice &&
        notice.map(item => (
          <S.NoticeBox key={item.id}>
            <Icon>
              <i className="fas fa-bullhorn" />
            </Icon>
            <S.NoticeContent>{item.content}</S.NoticeContent>
          </S.NoticeBox>
        ))}
      {isMaster ? <NoticeUpload projectID={projectID} /> : ''}
    </div>
  );
};

NoticeTab.propTypes = {
  projectID: PropTypes.string.isRequired,
  isMaster: PropTypes.bool.isRequired,
};
