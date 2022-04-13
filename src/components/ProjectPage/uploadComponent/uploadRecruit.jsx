/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon } from 'react-bulma-components';
import {
  mainArray,
  planArray,
  frontArray,
  designArray,
  backArray,
  coopArray,
  etcArray,
} from './uploadValue';

export const ProjectRecruit = ({ member, setMember }) => {
  const [fieldMember, setFieldMember] = useState({
    nuiuxPlan: 1,
    ngamePlan: 1,
    nmanagerPlan: 1,
    nhwPlan: 1,
    niosFr: 1,
    nandroidFr: 1,
    nwebFrontFr: 1,
    nwebPublicFr: 1,
    ncrossFr: 1,
    nuiuxDe: 1,
    ngraphicDe: 1,
    nthrdDe: 1,
    nhwDe: 1,
    netcDe: 1,
    nwebBk: 1,
    nblchBk: 1,
    naiBk: 1,
    ndsBk: 1,
    ngameBk: 1,
    nplanBu: 1,
    nmarketingBu: 1,
    nfinanceBu: 1,
    nsalseBu: 1,
    nconsultBu: 1,
    ninvestBu: 1,
    netcBu: 1,
    nblogEtc: 1,
    ninfluEtc: 1,
    ncompEtc: 1,
  });

  const handleInputChange = (e, index, sub) => {
    const { name, value } = e.target;
    const list = [...member.projectTotal];
    list[index][name] = value;

    if (value === '기획') {
      list[index].sub = 'UI/UX 기획';
    } else if (value === '디자인') {
      list[index].sub = '그래픽디자인';
    } else if (value === '프론트엔드개발') {
      list[index].sub = 'IOS';
    } else if (value === '백엔드개발') {
      list[index].sub = '웹서버';
    } else if (value === '사업') {
      list[index].sub = '사업기획';
    } else if (value === '기타') {
      list[index].sub = '작가/블로거';
    }

    setMember({ ...member, projectTotal: list });

    if (sub === 'UI/UX 기획') {
      setMember({ ...member, uiuxPlan: 0 });
    } else if (sub === '게임 기획') {
      setMember({ ...member, gamePlan: 0 });
    } else if (sub === '프로젝트 매니저') {
      setMember({ ...member, managerPlan: 0 });
    } else if (sub === '하드웨어(제품) 기획') {
      setMember({ ...member, hwPlan: 0 });
    } else if (sub === 'IOS') {
      setMember({ ...member, iosFr: 0 });
    } else if (sub === '안드로이드') {
      setMember({ ...member, androidFr: 0 });
    } else if (sub === '웹프론트엔드') {
      setMember({ ...member, webFrontFr: 0 });
    } else if (sub === '웹퍼블리셔') {
      setMember({ ...member, webPublicFr: 0 });
    } else if (sub === '크로스플랫폼') {
      setMember({ ...member, crossFr: 0 });
    } else if (sub === '그래픽디자인') {
      setMember({ ...member, graphicDe: 0 });
    } else if (sub === 'UI/UX디자인') {
      setMember({ ...member, uiuxDe: 0 });
    } else if (sub === '3D디자인') {
      setMember({ ...member, thrdDe: 0 });
    } else if (sub === '하드웨어(제품)디자인') {
      setMember({ ...member, hwDe: 0 });
    } else if (sub === '(디자인)기타') {
      setMember({ ...member, etcDe: 0 });
    } else if (sub === '웹서버') {
      setMember({ ...member, webBk: 0 });
    } else if (sub === '블록체인') {
      setMember({ ...member, blchBk: 0 });
    } else if (sub === 'AI') {
      setMember({ ...member, aiBk: 0 });
    } else if (sub === 'DB/빅데이터/DS') {
      setMember({ ...member, dsBk: 0 });
    } else if (sub === '게임서버') {
      setMember({ ...member, gameBk: 0 });
    } else if (sub === '사업기획') {
      setMember({ ...member, planBu: 0 });
    } else if (sub === '마케팅') {
      setMember({ ...member, marketingBu: 0 });
    } else if (sub === '재무/회계') {
      setMember({ ...member, financeBu: 0 });
    } else if (sub === '영업') {
      setMember({ ...member, salseBu: 0 });
    } else if (sub === '전략/컨설팅') {
      setMember({ ...member, consultBu: 0 });
    } else if (sub === '투자/고문') {
      setMember({ ...member, investBu: 0 });
    } else if (sub === '(사업)그외') {
      setMember({ ...member, etcBu: 0 });
    } else if (sub === '작가/블로거') {
      setMember({ ...member, blogEtc: 0 });
    } else if (sub === '인플루언서/유튜버') {
      setMember({ ...member, influEtc: 0 });
    } else if (sub === '작곡(사운드)') {
      setMember({ ...member, compEtc: 0 });
    }

    if (e.target.value === 'UI/UX 기획') {
      setMember({ ...member, uiuxPlan: fieldMember.nuiuxPlan });
    } else if (e.target.value === '게임 기획') {
      setMember({ ...member, gamePlan: fieldMember.ngamePlan });
    } else if (e.target.value === '프로젝트 매니저') {
      setMember({ ...member, managerPlan: fieldMember.nmanagerPlan });
    } else if (e.target.value === '하드웨어(제품) 기획') {
      setMember({ ...member, hwPlan: fieldMember.nhwPlan });
    } else if (e.target.value === 'IOS') {
      setMember({ ...member, iosFr: fieldMember.niosFr });
    } else if (e.target.value === '안드로이드') {
      setMember({ ...member, androidFr: fieldMember.nandroidFr });
    } else if (e.target.value === '웹프론트엔드') {
      setMember({ ...member, webFrontFr: fieldMember.nwebFrontFr });
    } else if (e.target.value === '웹퍼블리셔') {
      setMember({ ...member, webPublicFr: fieldMember.nwebPublicFr });
    } else if (e.target.value === '크로스플랫폼') {
      setMember({ ...member, crossFr: fieldMember.ncrossFr });
    } else if (e.target.value === '그래픽디자인') {
      setMember({ ...member, graphicDe: fieldMember.ngraphicDe });
    } else if (e.target.value === 'UI/UX디자인') {
      setMember({ ...member, uiuxDe: fieldMember.nuiuxDe });
    } else if (e.target.value === '3D디자인') {
      setMember({ ...member, thrdDe: fieldMember.nthrdDe });
    } else if (e.target.value === '하드웨어(제품)디자인') {
      setMember({ ...member, hwDe: fieldMember.nhwDe });
    } else if (e.target.value === '(디자인)기타') {
      setMember({ ...member, etcDe: fieldMember.netcDe });
    } else if (e.target.value === '웹서버') {
      setMember({ ...member, webBk: fieldMember.nwebBk });
    } else if (e.target.value === '블록체인') {
      setMember({ ...member, blchBk: fieldMember.nblchBk });
    } else if (e.target.value === 'AI') {
      setMember({ ...member, aiBk: fieldMember.naiBk });
    } else if (e.target.value === 'DB/빅데이터/DS') {
      setMember({ ...member, dsBk: fieldMember.ndsBk });
    } else if (e.target.value === '게임서버') {
      setMember({ ...member, gameBk: fieldMember.ngameBk });
    } else if (e.target.value === '사업기획') {
      setMember({ ...member, planBu: fieldMember.nplanBu });
    } else if (e.target.value === '마케팅') {
      setMember({ ...member, marketingBu: fieldMember.nmarketingBu });
    } else if (e.target.value === '재무/회계') {
      setMember({ ...member, financeBu: fieldMember.nfinanceBu });
    } else if (e.target.value === '영업') {
      setMember({ ...member, salseBu: fieldMember.nsalseBu });
    } else if (e.target.value === '전략/컨설팅') {
      setMember({ ...member, consultBu: fieldMember.nconsultBu });
    } else if (e.target.value === '투자/고문') {
      setMember({ ...member, investBu: fieldMember.ninvestBu });
    } else if (e.target.value === '(사업)그외') {
      setMember({ ...member, etcBu: fieldMember.netcBu });
    } else if (e.target.value === '작가/블로거') {
      setMember({ ...member, blogEtc: fieldMember.nblogEtc });
    } else if (e.target.value === '인플루언서/유튜버') {
      setMember({ ...member, influEtc: fieldMember.ninfluEtc });
    } else if (e.target.value === '작곡(사운드)') {
      setMember({ ...member, compEtc: fieldMember.ncompEtc });
    }
  };

  const handleNeedPlus = recruitType => {
    if (recruitType === 'UI/UX 기획') {
      setFieldMember({
        ...fieldMember,
        nuiuxPlan: fieldMember.nuiuxPlan + 1,
      });
      setMember({ ...member, uiuxPlan: fieldMember.nuiuxPlan + 1 });
    } else if (recruitType === '게임 기획') {
      setFieldMember({
        ...fieldMember,
        ngamePlan: fieldMember.ngamePlan + 1,
      });
      setMember({ ...member, gamePlan: fieldMember.ngamePlan + 1 });
    } else if (recruitType === '프로젝트 매니저') {
      setFieldMember({
        ...fieldMember,
        nmanagerPlan: fieldMember.nmanagerPlan + 1,
      });
      setMember({ ...member, managerPlan: fieldMember.nmanagerPlan + 1 });
    } else if (recruitType === '하드웨어(제품) 기획') {
      setFieldMember({ ...fieldMember, nhwPlan: fieldMember.nhwPlan + 1 });
      setMember({ ...member, hwPlan: fieldMember.nhwPlan + 1 });
    } else if (recruitType === 'IOS') {
      setFieldMember({ ...fieldMember, niosFr: fieldMember.niosFr + 1 });
      setMember({ ...member, iosFr: fieldMember.niosFr + 1 });
    } else if (recruitType === '안드로이드') {
      setFieldMember({
        ...fieldMember,
        nandroidFr: fieldMember.nandroidFr + 1,
      });
      setMember({ ...member, androidFr: fieldMember.nandroidFr + 1 });
    } else if (recruitType === '웹프론트엔드') {
      setFieldMember({
        ...fieldMember,
        nwebFrontFr: fieldMember.nwebFrontFr + 1,
      });
      setMember({ ...member, webFrontFr: fieldMember.nwebFrontFr + 1 });
    } else if (recruitType === '웹퍼블리셔') {
      setFieldMember({
        ...fieldMember,
        nwebPublicFr: fieldMember.nwebPublicFr + 1,
      });
      setMember({ ...member, webPublicFr: fieldMember.nwebPublicFr + 1 });
    } else if (recruitType === '크로스플랫폼') {
      setFieldMember({ ...fieldMember, ncrossFr: fieldMember.ncrossFr + 1 });
      setMember({ ...member, crossFr: fieldMember.ncrossFr + 1 });
    } else if (recruitType === '그래픽디자인') {
      setFieldMember({
        ...fieldMember,
        ngraphicDe: fieldMember.ngraphicDe + 1,
      });
      setMember({ ...member, graphicDe: fieldMember.ngraphicDer + 1 });
    } else if (recruitType === 'UI/UX디자인') {
      setFieldMember({ ...fieldMember, nuiuxDe: fieldMember.nuiuxDe + 1 });
      setMember({ ...member, uiuxDe: fieldMember.nuiuxDe + 1 });
    } else if (recruitType === '3D디자인') {
      setFieldMember({ ...fieldMember, nthrdDe: fieldMember.nthrdDe + 1 });
      setMember({ ...member, thrdDe: fieldMember.nthrdDe + 1 });
    } else if (recruitType === '하드웨어(제품)디자인') {
      setFieldMember({ ...fieldMember, nhwDe: fieldMember.nhwDe + 1 });
      setMember({ ...member, hwDe: fieldMember.nhwDe + 1 });
    } else if (recruitType === '(디자인)기타') {
      setFieldMember({ ...fieldMember, netcDe: fieldMember.netcDe + 1 });
      setMember({ ...member, etcDe: fieldMember.netcDe + 1 });
    } else if (recruitType === '웹서버') {
      setFieldMember({ ...fieldMember, nwebBk: fieldMember.nwebBk + 1 });
      setMember({ ...member, webBk: fieldMember.nwebBk + 1 });
    } else if (recruitType === '블록체인') {
      setFieldMember({ ...fieldMember, nblchBk: fieldMember.nblchBk + 1 });
      setMember({ ...member, blchBk: fieldMember.nblchBk + 1 });
    } else if (recruitType === 'AI') {
      setFieldMember({ ...fieldMember, naiBk: fieldMember.naiBk + 1 });
      setMember({ ...member, aiBk: fieldMember.naiBk + 1 });
    } else if (recruitType === 'DB/빅데이터/DS') {
      setFieldMember({ ...fieldMember, ndsBk: fieldMember.ndsBk + 1 });
      setMember({ ...member, dsBk: fieldMember.ndsBk + 1 });
    } else if (recruitType === '게임서버') {
      setFieldMember({ ...fieldMember, ngameBk: fieldMember.ngameBk + 1 });
      setMember({ ...member, gameBk: fieldMember.ngameBk + 1 });
    } else if (recruitType === '사업기획') {
      setFieldMember({ ...fieldMember, nplanBu: fieldMember.nplanBu + 1 });
      setMember({ ...member, planBu: fieldMember.nplanBu + 1 });
    } else if (recruitType === '마케팅') {
      setFieldMember({
        ...fieldMember,
        nmarketingBu: fieldMember.nmarketingBu + 1,
      });
      setMember({ ...member, marketingBu: fieldMember.nmarketingBu + 1 });
    } else if (recruitType === '재무/회계') {
      setFieldMember({
        ...fieldMember,
        nfinanceBu: fieldMember.nfinanceBu + 1,
      });
      setMember({ ...member, financeBu: fieldMember.nfinanceBu + 1 });
    } else if (recruitType === '영업') {
      setFieldMember({ ...fieldMember, nsalseBu: fieldMember.nsalseBu + 1 });
      setMember({ ...member, salseBu: fieldMember.nsalseBu + 1 });
    } else if (recruitType === '전략/컨설팅') {
      setFieldMember({
        ...fieldMember,
        nconsultBu: fieldMember.nconsultBu + 1,
      });
      setMember({ ...member, consultBu: fieldMember.nconsultBu + 1 });
    } else if (recruitType === '투자/고문') {
      setFieldMember({
        ...fieldMember,
        ninvestBu: fieldMember.ninvestBu + 1,
      });
      setMember({ ...member, investBu: fieldMember.ninvestBu + 1 });
    } else if (recruitType === '(사업)그외') {
      setFieldMember({ ...fieldMember, netcBu: fieldMember.netcBu + 1 });
      setMember({ ...member, etcBu: fieldMember.netcBu + 1 });
    } else if (recruitType === '작가/블로거') {
      setFieldMember({ ...fieldMember, nblogEtc: fieldMember.nblogEtc + 1 });
      setMember({ ...member, blogEtc: fieldMember.nblogEtc + 1 });
    } else if (recruitType === '인플루언서/유튜버') {
      setFieldMember({
        ...fieldMember,
        ninfluEtc: fieldMember.ninfluEtc + 1,
      });
      setMember({ ...member, influEtc: fieldMember.ninfluEtc + 1 });
    } else if (recruitType === '작곡(사운드)') {
      setFieldMember({ ...fieldMember, ncompEtc: fieldMember.ncompEtc + 1 });
      setMember({ ...member, compEtc: fieldMember.ncompEtc + 1 });
    }
  };

  const handleNeedMinus = recruitType => {
    if (recruitType === 'UI/UX 기획') {
      if (fieldMember.nuiuxPlan === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nuiuxPlan: fieldMember.nuiuxPlan - 1,
        });
        setMember({ ...member, uiuxPlan: fieldMember.nuiuxPlan - 1 });
      }
    } else if (recruitType === '게임 기획') {
      if (fieldMember.ngamePlan === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ngamePlan: fieldMember.ngamePlan - 1,
        });
        setMember({ ...member, gamePlan: fieldMember.ngamePlan - 1 });
      }
    } else if (recruitType === '프로젝트 매니저') {
      if (fieldMember.nmanagerPlan === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nmanagerPlan: fieldMember.nmanagerPlan - 1,
        });
        setMember({ ...member, managerPlan: fieldMember.nmanagerPlan - 1 });
      }
    } else if (recruitType === '하드웨어(제품) 기획') {
      if (fieldMember.nhwPlan === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nhwPlan: fieldMember.nhwPlan - 1 });
        setMember({ ...member, hwPlan: fieldMember.nhwPlan - 1 });
      }
    } else if (recruitType === 'IOS') {
      if (fieldMember.niosFr === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, niosFr: fieldMember.niosFr - 1 });
        setMember({ ...member, iosFr: fieldMember.niosFr - 1 });
      }
    } else if (recruitType === '안드로이드') {
      if (fieldMember.nandroidFr === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nandroidFr: fieldMember.nandroidFr - 1,
        });
        setMember({ ...member, androidFr: fieldMember.nandroidFr - 1 });
      }
    } else if (recruitType === '웹프론트엔드') {
      if (fieldMember.nwebFrontFr === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nwebFrontFr: fieldMember.nwebFrontFr - 1,
        });
        setMember({ ...member, webFrontFr: fieldMember.nwebFrontFr - 1 });
      }
    } else if (recruitType === '웹퍼블리셔') {
      if (fieldMember.nwebPublicFr === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nwebPublicFr: fieldMember.nwebPublicFr - 1,
        });
        setMember({ ...member, webPublicFr: fieldMember.nwebPublicFr - 1 });
      }
    } else if (recruitType === '크로스플랫폼') {
      if (fieldMember.ncrossFr === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ncrossFr: fieldMember.ncrossFr - 1 });
        setMember({ ...member, crossFr: fieldMember.ncrossFr - 1 });
      }
    } else if (recruitType === '그래픽디자인') {
      if (fieldMember.ngraphicDe === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ngraphicDe: fieldMember.ngraphicDe - 1,
        });
        setMember({ ...member, graphicDe: fieldMember.ngraphicDe - 1 });
      }
    } else if (recruitType === 'UI/UX디자인') {
      if (fieldMember.nuiuxDe === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nuiuxDe: fieldMember.nuiuxDe - 1 });
        setMember({ ...member, uiuxDe: fieldMember.nuiuxDe - 1 });
      }
    } else if (recruitType === '3D디자인') {
      if (fieldMember.nthrdDe === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nthrdDe: fieldMember.nthrdDe - 1 });
        setMember({ ...member, thrdDe: fieldMember.nthrdDe - 1 });
      }
    } else if (recruitType === '하드웨어(제품)디자인') {
      if (fieldMember.nhwDe === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nhwDe: fieldMember.nhwDe - 1 });
        setMember({ ...member, hwDe: fieldMember.nhwDe - 1 });
      }
    } else if (recruitType === '(디자인)기타') {
      if (fieldMember.netcDe === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, netcDe: fieldMember.netcDe - 1 });
        setMember({ ...member, etcDe: fieldMember.netcDe - 1 });
      }
    } else if (recruitType === '웹서버') {
      if (fieldMember.nwebBk === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nwebBk: fieldMember.nwebBk - 1 });
        setMember({ ...member, webBk: fieldMember.nwebBk - 1 });
      }
    } else if (recruitType === '블록체인') {
      if (fieldMember.nblchBk === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nblchBk: fieldMember.nblchBk - 1 });
        setMember({ ...member, blchBk: fieldMember.nblchBk - 1 });
      }
    } else if (recruitType === 'AI') {
      if (fieldMember.naiBk === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, naiBk: fieldMember.naiBk - 1 });
        setMember({ ...member, aiBk: fieldMember.naiBk - 1 });
      }
    } else if (recruitType === 'DB/빅데이터/DS') {
      if (fieldMember.ndsBk === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ndsBk: fieldMember.ndsBk - 1 });
        setMember({ ...member, dsBk: fieldMember.ndsBk - 1 });
      }
    } else if (recruitType === '게임서버') {
      if (fieldMember.ngameBk === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ngameBk: fieldMember.ngameBk - 1 });
        setMember({ ...member, gameBk: fieldMember.ngameBk - 1 });
      }
    } else if (recruitType === '사업기획') {
      if (fieldMember.nplanBu === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nplanBu: fieldMember.nplanBu - 1 });
        setMember({ ...member, planBu: fieldMember.nplanBu - 1 });
      }
    } else if (recruitType === '마케팅') {
      if (fieldMember.nmarketingBu === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nmarketingBu: fieldMember.nmarketingBu - 1,
        });
        setMember({ ...member, marketingBu: fieldMember.nmarketingBu - 1 });
      }
    } else if (recruitType === '재무/회계') {
      if (fieldMember.nfinanceBu === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nfinanceBu: fieldMember.nfinanceBu - 1,
        });
        setMember({ ...member, financeBu: fieldMember.nfinanceBu - 1 });
      }
    } else if (recruitType === '영업') {
      if (fieldMember.nsalseBu === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nsalseBu: fieldMember.nsalseBu - 1 });
        setMember({ ...member, salseBu: fieldMember.nsalseBu - 1 });
      }
    } else if (recruitType === '전략/컨설팅') {
      if (fieldMember.nconsultBu === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nconsultBu: fieldMember.nconsultBu - 1,
        });
        setMember({ ...member, consultBu: fieldMember.nconsultBu - 1 });
      }
    } else if (recruitType === '투자/고문') {
      if (fieldMember.ninvestBu === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ninvestBu: fieldMember.ninvestBu - 1,
        });
        setMember({ ...member, investBu: fieldMember.ninvestBu - 1 });
      }
    } else if (recruitType === '(사업)그외') {
      if (fieldMember.netcBu === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, netcBu: fieldMember.netcBu - 1 });
        setMember({ ...member, etcBu: fieldMember.netcBu - 1 });
      }
    } else if (recruitType === '작가/블로거') {
      if (fieldMember.nblogEtc === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nblogEtc: fieldMember.nblogEtc - 1 });
        setMember({ ...member, blogEtc: fieldMember.nblogEtc - 1 });
      }
    } else if (recruitType === '인플루언서/유튜버') {
      if (fieldMember.ninfluEtc === 1) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ninfluEtc: fieldMember.ninfluEtc - 1,
        });
        setMember({ ...member, influEtc: fieldMember.ninfluEtc - 1 });
      }
    } else if (recruitType === '작곡(사운드)') {
      if (fieldMember.ncompEtc === 1) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ncompEtc: fieldMember.ncompEtc - 1 });
        setMember({ ...member, compEtc: fieldMember.ncompEtc - 1 });
      }
    }
  };

  const handleRemove = (index, recruitType) => {
    const list = [...member.projectTotal];
    list.splice(index, 1);

    if (recruitType === 'UI/UX 기획') {
      setMember({ ...member, uiuxPlan: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nuiuxPlan: 0 });
    } else if (recruitType === '게임 기획') {
      setMember({ ...member, gamePlan: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ngamePlan: 0 });
    } else if (recruitType === '프로젝트 매니저') {
      setMember({ ...member, managerPlan: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nmanagerPlan: 0 });
    } else if (recruitType === '하드웨어(제품) 기획') {
      setMember({ ...member, hwPlan: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nhwPlan: 0 });
    } else if (recruitType === 'IOS') {
      setMember({ ...member, iosFr: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, niosFr: 0 });
    } else if (recruitType === '안드로이드') {
      setMember({ ...member, androidFr: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nandroidFr: 0 });
    } else if (recruitType === '웹프론트엔드') {
      setMember({ ...member, webFrontFr: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nwebFrontFr: 0 });
    } else if (recruitType === '웹퍼블리셔') {
      setMember({ ...member, webPublicFr: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nwebPublicFr: 0 });
    } else if (recruitType === '크로스플랫폼') {
      setMember({ ...member, crossFr: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ncrossFr: 0 });
    } else if (recruitType === '그래픽디자인') {
      setMember({ ...member, graphicDe: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ngraphicDe: 0 });
    } else if (recruitType === 'UI/UX디자인') {
      setMember({ ...member, uiuxDe: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nuiuxDe: 0 });
    } else if (recruitType === '3D디자인') {
      setMember({ ...member, thrdDe: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nthrdDe: 0 });
    } else if (recruitType === '하드웨어(제품)디자인') {
      setMember({ ...member, hwDe: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nhwDe: 0 });
    } else if (recruitType === '(디자인)기타') {
      setMember({ ...member, etcDe: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, netcDe: 0 });
    } else if (recruitType === '웹서버') {
      setMember({ ...member, webBk: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nwebFrontFr: 0 });
    } else if (recruitType === '블록체인') {
      setMember({ ...member, blchBk: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nblchBk: 0 });
    } else if (recruitType === 'AI') {
      setMember({ ...member, aiBk: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, naiBk: 0 });
    } else if (recruitType === 'DB/빅데이터/DS') {
      setMember({ ...member, dsBk: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ndsBk: 0 });
    } else if (recruitType === '게임서버') {
      setMember({ ...member, gameBk: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ngameBk: 0 });
    } else if (recruitType === '사업기획') {
      setMember({ ...member, planBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nplanBu: 0 });
    } else if (recruitType === '마케팅') {
      setMember({ ...member, marketingBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nmarketingBu: 0 });
    } else if (recruitType === '재무/회계') {
      setMember({ ...member, financeBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nfinanceBu: 0 });
    } else if (recruitType === '영업') {
      setMember({ ...member, salseBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nsalseBu: 0 });
    } else if (recruitType === '전략/컨설팅') {
      setMember({ ...member, consultBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nconsultBu: 0 });
    } else if (recruitType === '투자/고문') {
      setMember({ ...member, investBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ninvestBu: 0 });
    } else if (recruitType === '(사업)그외') {
      setMember({ ...member, etcBu: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, netcBu: 0 });
    } else if (recruitType === '작가/블로거') {
      setMember({ ...member, blogEtc: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, nblogEtc: 0 });
    } else if (recruitType === '인플루언서/유튜버') {
      setMember({ ...member, influEtc: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ninfluEtc: 0 });
    } else if (recruitType === '작곡(사운드)') {
      setMember({ ...member, compEtc: 0, projectTotal: list });
      setFieldMember({ ...fieldMember, ncompEtc: 0 });
    }
  };

  const handleAdd = () => {
    setMember({
      ...member,
      projectTotal: [
        ...member.projectTotal,
        { main: '기획', sub: 'UI/UX 기획' },
      ],
    });
  };

  const genOption = arrayTitle => {
    return (
      <>
        {arrayTitle.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </>
    );
  };

  const genPopulation = (recruitNum, recruitType) => {
    return (
      <div>
        <Icon onClick={() => handleNeedPlus(recruitType)}>
          <i className="fas fa-plus" />
        </Icon>
        {recruitNum}
        <Icon onClick={() => handleNeedMinus(recruitType)}>
          <i className="fas fa-minus" />
        </Icon>
      </div>
    );
  };

  const genAddRemove = (index, recruitType) => {
    return (
      <div>
        {member.projectTotal.length - 1 === index && (
          <Button color="info" onClick={handleAdd}>
            추가
          </Button>
        )}
        {member.projectTotal.length !== 1 && (
          <Button
            color="danger"
            onClick={() => handleRemove(index, recruitType)}
          >
            삭제
          </Button>
        )}
      </div>
    );
  };

  return (
    <Form.Field>
      <Form.Label>* 모집인원</Form.Label>
      <Form.Help>
        ! 인원 제한은 없으며, 3~4명을 추천합니다.(나중에 변경/추가가
        가능합니다.)
      </Form.Help>
      <Form.Control>
        {member.projectTotal.map((m, index) => {
          return (
            <div key={index} style={{ display: 'flex' }}>
              <Form.Select
                style={{ width: '14%' }}
                name="main"
                onChange={e => handleInputChange(e, index, m.sub)}
                value={m.main}
              >
                {genOption(mainArray)}
              </Form.Select>
              <Form.Select
                style={{ width: '16%' }}
                name="sub"
                onChange={e => handleInputChange(e, index, m.sub)}
                value={m.sub}
              >
                {m.main === '기획' && <>{genOption(planArray)}</>}
                {m.main === '디자인' && <>{genOption(designArray)}</>}
                {m.main === '프론트엔드개발' && <>{genOption(frontArray)}</>}
                {m.main === '백엔드개발' && <>{genOption(backArray)}</>}
                {m.main === '사업' && <>{genOption(coopArray)}</>}
                {m.main === '기타' && <>{genOption(etcArray)}</>}
              </Form.Select>

              {m.sub === 'UI/UX 기획' && (
                <>{genPopulation(fieldMember.nuiuxPlan, 'UI/UX 기획')}</>
              )}
              {m.sub === '게임 기획' && (
                <>{genPopulation(fieldMember.ngamePlan, '게임 기획')}</>
              )}
              {m.sub === '프로젝트 매니저' && (
                <>
                  {genPopulation(fieldMember.nmanagerPlan, '프로젝트 매니저')}
                </>
              )}
              {m.sub === '하드웨어(제품) 기획' && (
                <>{genPopulation(fieldMember.nhwPlan, '하드웨어(제품) 기획')}</>
              )}
              {m.sub === 'IOS' && (
                <>{genPopulation(fieldMember.niosFr, 'IOS')}</>
              )}
              {m.sub === '안드로이드' && (
                <>{genPopulation(fieldMember.nandroidFr, '안드로이드')}</>
              )}
              {m.sub === '웹프론트엔드' && (
                <>{genPopulation(fieldMember.nwebFrontFr, '웹프론트엔드')}</>
              )}
              {m.sub === '웹퍼블리셔' && (
                <>{genPopulation(fieldMember.nwebPublicFr, '웹퍼블리셔')}</>
              )}
              {m.sub === '크로스플랫폼' && (
                <>{genPopulation(fieldMember.ncrossFr, '크로스플랫폼')}</>
              )}
              {m.sub === '그래픽디자인' && (
                <>{genPopulation(fieldMember.ngraphicDe, '그래픽디자인')}</>
              )}
              {m.sub === 'UI/UX디자인' && (
                <>{genPopulation(fieldMember.nuiuxDe, 'UI/UX디자인')}</>
              )}
              {m.sub === '3D디자인' && (
                <>{genPopulation(fieldMember.nthrdDe, '3D디자인')}</>
              )}
              {m.sub === '하드웨어(제품)디자인' && (
                <>{genPopulation(fieldMember.nhwDe, '하드웨어(제품)디자인')}</>
              )}
              {m.sub === '(디자인)기타' && (
                <>{genPopulation(fieldMember.netcDe, '(디자인)기타')}</>
              )}
              {m.sub === '웹서버' && (
                <>{genPopulation(fieldMember.nwebBk, '웹서버')}</>
              )}
              {m.sub === '블록체인' && (
                <>{genPopulation(fieldMember.nblchBk, '블록체인')}</>
              )}
              {m.sub === 'AI' && <>{genPopulation(fieldMember.naiBk, 'AI')}</>}
              {m.sub === 'DB/빅데이터/DS' && (
                <>{genPopulation(fieldMember.ndsBk, 'DB/빅데이터/DS')}</>
              )}
              {m.sub === '게임서버' && (
                <>{genPopulation(fieldMember.ngameBk, '게임서버')}</>
              )}
              {m.sub === '사업기획' && (
                <>{genPopulation(fieldMember.nplanBu, '사업기획')}</>
              )}
              {m.sub === '마케팅' && (
                <>{genPopulation(fieldMember.nmarketingBu, '마케팅')}</>
              )}
              {m.sub === '재무/회계' && (
                <>{genPopulation(fieldMember.nfinanceBu, '재무/회계')}</>
              )}
              {m.sub === '영업' && (
                <>{genPopulation(fieldMember.nsalseBu, '영업')}</>
              )}
              {m.sub === '전략/컨설팅' && (
                <>{genPopulation(fieldMember.nconsultBu, '전략/컨설팅')}</>
              )}
              {m.sub === '투자/고문' && (
                <>{genPopulation(fieldMember.ninvestBu, '투자/고문')}</>
              )}
              {m.sub === '(사업)그외' && (
                <>{genPopulation(fieldMember.netcBu, '(사업)그외')}</>
              )}
              {m.sub === '작가/블로거' && (
                <>{genPopulation(fieldMember.nblogEtc, '작가/블로거')}</>
              )}
              {m.sub === '인플루언서/유튜버' && (
                <>{genPopulation(fieldMember.ninfluEtc, '인플루언서/유튜버')}</>
              )}
              {m.sub === '작곡(사운드)' && (
                <>{genPopulation(fieldMember.ncompEtc, '작곡(사운드)')}</>
              )}

              {m.sub === 'UI/UX 기획' && (
                <>{genAddRemove(index, 'UI/UX 기획')}</>
              )}
              {m.sub === '게임 기획' && <>{genAddRemove(index, '게임 기획')}</>}
              {m.sub === '프로젝트 매니저' && (
                <>{genAddRemove(index, '프로젝트 매니저')}</>
              )}
              {m.sub === '하드웨어(제품) 기획' && (
                <>{genAddRemove(index, '하드웨어(제품) 기획')}</>
              )}
              {m.sub === 'IOS' && <>{genAddRemove(index, 'IOS')}</>}
              {m.sub === '안드로이드' && (
                <>{genAddRemove(index, '안드로이드')}</>
              )}
              {m.sub === '웹프론트엔드' && (
                <>{genAddRemove(index, '웹프론트엔드')}</>
              )}
              {m.sub === '웹퍼블리셔' && (
                <>{genAddRemove(index, '웹퍼블리셔')}</>
              )}
              {m.sub === '크로스플랫폼' && (
                <>{genAddRemove(index, '크로스플랫폼')}</>
              )}
              {m.sub === '그래픽디자인' && (
                <>{genAddRemove(index, '그래픽디자인')}</>
              )}
              {m.sub === 'UI/UX디자인' && (
                <>{genAddRemove(index, 'UI/UX디자인')}</>
              )}
              {m.sub === '3D디자인' && <>{genAddRemove(index, '3D디자인')}</>}
              {m.sub === '하드웨어(제품)디자인' && (
                <>{genAddRemove(index, '하드웨어(제품)디자인')}</>
              )}
              {m.sub === '(디자인)기타' && (
                <>{genAddRemove(index, '(디자인)기타')}</>
              )}
              {m.sub === '웹서버' && <>{genAddRemove(index, '웹서버')}</>}
              {m.sub === '블록체인' && <>{genAddRemove(index, '블록체인')}</>}
              {m.sub === 'AI' && <>{genAddRemove(index, 'AI')}</>}
              {m.sub === 'DB/빅데이터/DS' && (
                <>{genAddRemove(index, 'DB/빅데이터/DS')}</>
              )}
              {m.sub === '게임서버' && <>{genAddRemove(index, '게임서버')}</>}
              {m.sub === '사업기획' && <>{genAddRemove(index, '사업기획')}</>}
              {m.sub === '마케팅' && <>{genAddRemove(index, '마케팅')}</>}
              {m.sub === '재무/회계' && <>{genAddRemove(index, '재무/회계')}</>}
              {m.sub === '영업' && <>{genAddRemove(index, '영업')}</>}
              {m.sub === '전략/컨설팅' && (
                <>{genAddRemove(index, '전략/컨설팅')}</>
              )}
              {m.sub === '투자/고문' && <>{genAddRemove(index, '투자/고문')}</>}
              {m.sub === '(사업)그외' && (
                <>{genAddRemove(index, '(사업)그외')}</>
              )}
              {m.sub === '작가/블로거' && (
                <>{genAddRemove(index, '작가/블로거')}</>
              )}
              {m.sub === '인플루언서/유튜버' && (
                <>{genAddRemove(index, '인플루언서/유튜버')}</>
              )}
              {m.sub === '작곡(사운드)' && (
                <>{genAddRemove(index, '작곡(사운드)')}</>
              )}
            </div>
          );
        })}
      </Form.Control>
    </Form.Field>
  );
};

ProjectRecruit.propTypes = {
  member: PropTypes.objectOf(PropTypes.any).isRequired,
  setMember: PropTypes.func.isRequired,
};
