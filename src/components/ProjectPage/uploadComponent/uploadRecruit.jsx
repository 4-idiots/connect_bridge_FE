/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
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
  const [allMember, setAllMember] = useState(0);
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

  const checkAllPeople = () => {
    let all = 0;
    all =
      fieldMember.nuiuxPlan +
      fieldMember.ngamePlan +
      fieldMember.nmanagerPlan +
      fieldMember.nhwPlan +
      fieldMember.niosFr +
      fieldMember.nandroidFr +
      fieldMember.nwebFrontFr +
      fieldMember.nwebPublicFr +
      fieldMember.ncrossFr +
      fieldMember.nuiuxDe +
      fieldMember.ngraphicDe +
      fieldMember.nthrdDe +
      fieldMember.nhwDe +
      fieldMember.netcDe +
      fieldMember.nwebBk +
      fieldMember.nblchBk +
      fieldMember.naiBk +
      fieldMember.ndsBk +
      fieldMember.ngameBk +
      fieldMember.nplanBu +
      fieldMember.nmarketingBu +
      fieldMember.nfinanceBu +
      fieldMember.nsalseBu +
      fieldMember.nconsultBu +
      fieldMember.ninvestBu +
      fieldMember.netcBu +
      fieldMember.nblogEtc +
      fieldMember.ninfluEtc +
      fieldMember.ncompEtc;
    setAllMember(all - 28);
  };

  useEffect(() => {
    checkAllPeople();
  }, [fieldMember]);

  const handleInputChange = (e, index) => {
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
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nuiuxPlan: fieldMember.nuiuxPlan + 1,
        });
        setMember({ ...member, uiuxPlan: fieldMember.nuiuxPlan + 1 });
      }
    } else if (recruitType === '게임 기획') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ngamePlan: fieldMember.ngamePlan + 1,
        });
        setMember({ ...member, gamePlan: fieldMember.ngamePlan + 1 });
      }
    } else if (recruitType === '프로젝트 매니저') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nmanagerPlan: fieldMember.nmanagerPlan + 1,
        });
        setMember({ ...member, managerPlan: fieldMember.nmanagerPlan + 1 });
      }
    } else if (recruitType === '하드웨어(제품) 기획') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nhwPlan: fieldMember.nhwPlan + 1 });
        setMember({ ...member, hwPlan: fieldMember.nhwPlan + 1 });
      }
    } else if (recruitType === 'IOS') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, niosFr: fieldMember.niosFr + 1 });
        setMember({ ...member, iosFr: fieldMember.niosFr + 1 });
      }
    } else if (recruitType === '안드로이드') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nandroidFr: fieldMember.nandroidFr + 1,
        });
        setMember({ ...member, androidFr: fieldMember.nandroidFr + 1 });
      }
    } else if (recruitType === '웹프론트엔드') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nwebFrontFr: fieldMember.nwebFrontFr + 1,
        });
        setMember({ ...member, webFrontFr: fieldMember.nwebFrontFr + 1 });
      }
    } else if (recruitType === '웹퍼블리셔') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nwebPublicFr: fieldMember.nwebPublicFr + 1,
        });
        setMember({ ...member, webPublicFr: fieldMember.nwebPublicFr + 1 });
      }
    } else if (recruitType === '크로스플랫폼') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ncrossFr: fieldMember.ncrossFr + 1 });
        setMember({ ...member, crossFr: fieldMember.ncrossFr + 1 });
      }
    } else if (recruitType === '그래픽디자인') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ngraphicDe: fieldMember.ngraphicDe + 1,
        });
        setMember({ ...member, graphicDe: fieldMember.ngraphicDer + 1 });
      }
    } else if (recruitType === 'UI/UX디자인') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nuiuxDe: fieldMember.nuiuxDe + 1 });
        setMember({ ...member, uiuxDe: fieldMember.nuiuxDe + 1 });
      }
    } else if (recruitType === '3D디자인') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nthrdDe: fieldMember.nthrdDe + 1 });
        setMember({ ...member, thrdDe: fieldMember.nthrdDe + 1 });
      }
    } else if (recruitType === '하드웨어(제품)디자인') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nhwDe: fieldMember.nhwDe + 1 });
        setMember({ ...member, hwDe: fieldMember.nhwDe + 1 });
      }
    } else if (recruitType === '(디자인)기타') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, netcDe: fieldMember.netcDe + 1 });
        setMember({ ...member, etcDe: fieldMember.netcDe + 1 });
      }
    } else if (recruitType === '웹서버') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nwebBk: fieldMember.nwebBk + 1 });
        setMember({ ...member, webBk: fieldMember.nwebBk + 1 });
      }
    } else if (recruitType === '블록체인') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nblchBk: fieldMember.nblchBk + 1 });
        setMember({ ...member, blchBk: fieldMember.nblchBk + 1 });
      }
    } else if (recruitType === 'AI') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, naiBk: fieldMember.naiBk + 1 });
        setMember({ ...member, aiBk: fieldMember.naiBk + 1 });
      }
    } else if (recruitType === 'DB/빅데이터/DS') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ndsBk: fieldMember.ndsBk + 1 });
        setMember({ ...member, dsBk: fieldMember.ndsBk + 1 });
      }
    } else if (recruitType === '게임서버') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ngameBk: fieldMember.ngameBk + 1 });
        setMember({ ...member, gameBk: fieldMember.ngameBk + 1 });
      }
    } else if (recruitType === '사업기획') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nplanBu: fieldMember.nplanBu + 1 });
        setMember({ ...member, planBu: fieldMember.nplanBu + 1 });
      }
    } else if (recruitType === '마케팅') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nmarketingBu: fieldMember.nmarketingBu + 1,
        });
        setMember({ ...member, marketingBu: fieldMember.nmarketingBu + 1 });
      }
    } else if (recruitType === '재무/회계') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nfinanceBu: fieldMember.nfinanceBu + 1,
        });
        setMember({ ...member, financeBu: fieldMember.nfinanceBu + 1 });
      }
    } else if (recruitType === '영업') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nsalseBu: fieldMember.nsalseBu + 1 });
        setMember({ ...member, salseBu: fieldMember.nsalseBu + 1 });
      }
    } else if (recruitType === '전략/컨설팅') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          nconsultBu: fieldMember.nconsultBu + 1,
        });
        setMember({ ...member, consultBu: fieldMember.nconsultBu + 1 });
      }
    } else if (recruitType === '투자/고문') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ninvestBu: fieldMember.ninvestBu + 1,
        });
        setMember({ ...member, investBu: fieldMember.ninvestBu + 1 });
      }
    } else if (recruitType === '(사업)그외') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, netcBu: fieldMember.netcBu + 1 });
        setMember({ ...member, etcBu: fieldMember.netcBu + 1 });
      }
    } else if (recruitType === '작가/블로거') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, nblogEtc: fieldMember.nblogEtc + 1 });
        setMember({ ...member, blogEtc: fieldMember.nblogEtc + 1 });
      }
    } else if (recruitType === '인플루언서/유튜버') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({
          ...fieldMember,
          ninfluEtc: fieldMember.ninfluEtc + 1,
        });
        setMember({ ...member, influEtc: fieldMember.ninfluEtc + 1 });
      }
    } else if (recruitType === '작곡(사운드)') {
      if (allMember === 9) {
        // pass
      } else {
        setFieldMember({ ...fieldMember, ncompEtc: fieldMember.ncompEtc + 1 });
        setMember({ ...member, compEtc: fieldMember.ncompEtc + 1 });
      }
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

  const handleRemove = index => {
    const list = [...member.projectTotal];
    list.splice(index, 1);
    setMember({ ...member, projectTotal: list });
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

  return (
    <Form.Field>
      <Form.Label>* 모집인원</Form.Label>
      {JSON.stringify(member)}
      <Form.Help>
        ! 최대 9명까지 모집이 가능하며, 3~4명을 추천합니다.(나중에 변경/추가가
        가능합니다.)
      </Form.Help>
      {JSON.stringify(allMember)}
      <Form.Control>
        {member.projectTotal.map((m, index) => {
          return (
            <div key={index} style={{ display: 'flex' }}>
              <Form.Select
                style={{ width: '14%' }}
                name="main"
                onChange={e => handleInputChange(e, index)}
              >
                {genOption(mainArray)}
              </Form.Select>
              <Form.Select
                style={{ width: '16%' }}
                name="sub"
                onChange={e => handleInputChange(e, index)}
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

              <div>
                {member.projectTotal.length - 1 === index && (
                  <Button color="info" onClick={handleAdd}>
                    추가
                  </Button>
                )}
                {member.projectTotal.length !== 1 && (
                  <Button color="danger" onClick={() => handleRemove(index)}>
                    삭제
                  </Button>
                )}
              </div>
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
