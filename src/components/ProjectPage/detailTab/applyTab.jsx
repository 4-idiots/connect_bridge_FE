import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import { projectGetAdminService } from '../../../services/projectService';
import * as S from './style';
import { ApplyCard } from './applyCard';
import { ApplyMemCard } from './applyMemCard';
import { Desktop, Tablet, Mobile } from '../../../mediaQuery';

export const ApplyTab = ({ projectID, member }) => {
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    const getAxios = async () => {
      try {
        const result = await projectGetAdminService(projectID);
        setApplicant(result.data);
      } catch (error) {
        // pass
      }
    };
    getAxios();
  }, []);

  return (
    <>
      <Desktop>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          지원자 현황
        </Heading>
        <S.MemberGrid>
          {applicant &&
            applicant.map(item => (
              <ApplyCard item={item} key={item.userID} projectID={projectID} />
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
                projectID={projectID}
              />
            ))}
        </S.MemberGrid>
      </Desktop>
      <Tablet>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          지원자 현황
        </Heading>
        <S.TabletGrid>
          {applicant &&
            applicant.map(item => (
              <ApplyCard item={item} key={item.userID} projectID={projectID} />
            ))}
        </S.TabletGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          현재 멤버
        </Heading>
        <S.TabletGrid>
          {member &&
            member.map(item => (
              <ApplyMemCard
                key={item.memberID}
                item={item}
                projectID={projectID}
              />
            ))}
        </S.TabletGrid>
      </Tablet>
      <Mobile>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          지원자 현황
        </Heading>
        <S.MobileGrid>
          {applicant &&
            applicant.map(item => (
              <ApplyCard item={item} key={item.userID} projectID={projectID} />
            ))}
        </S.MobileGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          현재 멤버
        </Heading>
        <S.MobileGrid>
          {member &&
            member.map(item => (
              <ApplyMemCard
                key={item.memberID}
                item={item}
                projectID={projectID}
              />
            ))}
        </S.MobileGrid>
      </Mobile>
    </>
  );
};

ApplyTab.propTypes = {
  projectID: PropTypes.string.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
};
