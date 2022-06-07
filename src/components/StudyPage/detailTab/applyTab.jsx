import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import { studyGetAdminService } from '../../../services/studyService';
import * as S from './style';
import { ApplyCard } from './applyCard';
import { ApplyMemCard } from './applyMemCard';
import { Desktop, Tablet, Mobile } from '../../../mediaQuery';

export const ApplyTab = ({ studyID, member }) => {
  const [applicant, setApplicant] = useState(null);

  const getAxios = async () => {
    try {
      const result = await studyGetAdminService(studyID);
      setApplicant(result.data);
    } catch (error) {
      // pass
    }
  };

  useEffect(() => {
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
              <ApplyCard item={item} key={item.userID} studyID={studyID} />
            ))}
        </S.MemberGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          현재 멤버
        </Heading>
        <S.MemberGrid>
          {member &&
            member.map(item => (
              <ApplyMemCard key={item.memberID} item={item} studyID={studyID} />
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
              <ApplyCard item={item} key={item.userID} studyID={studyID} />
            ))}
        </S.TabletGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          현재 멤버
        </Heading>
        <S.TabletGrid>
          {member &&
            member.map(item => (
              <ApplyMemCard key={item.memberID} item={item} studyID={studyID} />
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
              <ApplyCard item={item} key={item.userID} studyID={studyID} />
            ))}
        </S.MobileGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          현재 멤버
        </Heading>
        <S.MobileGrid>
          {member &&
            member.map(item => (
              <ApplyMemCard key={item.memberID} item={item} studyID={studyID} />
            ))}
        </S.MobileGrid>
      </Mobile>
    </>
  );
};

ApplyTab.propTypes = {
  studyID: PropTypes.string.isRequired,
  member: PropTypes.arrayOf(PropTypes.any).isRequired,
};
