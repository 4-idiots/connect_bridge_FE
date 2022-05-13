import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import { projectGetAdminService } from '../../../services/projectService';
import * as S from './style';
import { ApplyCard } from './applyCard';
import { ApplyMemCard } from './applyMemCard';

export const ApplyTab = ({ projectID, member }) => {
  const [applicant, setApplicant] = useState(null);

  const getAxios = async () => {
    try {
      const result = await projectGetAdminService(projectID);
      console.log(result);
      setApplicant(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  return (
    <>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        지원자 현황
      </Heading>
      <S.MemberGrid>
        {applicant &&
          applicant.map(item => (
            <ApplyCard
              item={item}
              key={item.userID}
              projectID={projectID}
              cnt={Math.floor(Math.random() * 4)}
            />
          ))}
      </S.MemberGrid>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        현재 멤버
      </Heading>
      <S.MemberGrid>
        {member &&
          member.map(item => (
            <ApplyMemCard
              key={item.memberID}
              item={item}
              cnt={Math.floor(Math.random() * 4)}
              projectID={projectID}
            />
          ))}
      </S.MemberGrid>
    </>
  );
};

ApplyTab.propTypes = {
  projectID: PropTypes.string.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
};
