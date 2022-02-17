import React, { useState } from 'react';
import { Container } from 'react-bulma-components';
import { OutdoorModalForm } from './outdoorModalModule';
import { OutdoorCardForm } from './outdoorCardModule';

export const OutdoorMainForm = () => {
  const [poster, setPoster] = useState({});

  const { outID, check, title, image, link, view, like } = poster;

  const changePoster = (otitle, oimage, olink, oview, olike, ooutID) => {
    setPoster({
      ...poster,
      outID: ooutID,
      check: !check,
      title: otitle,
      image: oimage,
      link: olink,
      view: oview,
      like: olike,
    });
  };

  return (
    <Container
      style={{
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      {check && (
        <OutdoorModalForm
          close={() => {
            changePoster('', '', '');
          }}
          title={title}
          image={image}
          link={link}
          view={view}
          like={like}
          id={outID}
        />
      )}

      <OutdoorCardForm
        outActLike={345}
        outActName="Test1"
        outActView={36564656}
        outActImg="http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg"
        onActClick={() => {
          changePoster(
            'Test1',
            'http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg',
            'https://www.gaok.or.kr/gaok/bbs/B0000001/view.do?nttId=14039&searchCnd=&searchWrd=&gubun=&delCode=0&useAt=&replyAt=&menuNo=200019&sdate=&edate=&viewType=&type=&siteId=&option1=&option2=&option5=&pageIndex=1',
            36564656,
            345,
            1,
          );
        }}
        outActID={1}
      />
      <OutdoorCardForm
        outActLike={345}
        outActName="Test1"
        outActView={36564656}
        outActImg="http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg"
        onActClick={() => {
          changePoster(
            'Test1',
            'http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg',
            'https://www.gaok.or.kr/gaok/bbs/B0000001/view.do?nttId=14039&searchCnd=&searchWrd=&gubun=&delCode=0&useAt=&replyAt=&menuNo=200019&sdate=&edate=&viewType=&type=&siteId=&option1=&option2=&option5=&pageIndex=1',
            36564656,
            345,
            2,
          );
        }}
        outActID={2}
      />
      <OutdoorCardForm
        outActLike={345}
        outActName="Test1"
        outActView={36564656}
        outActImg="http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg"
        onActClick={() => {
          changePoster(
            'Test1',
            'http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg',
            'https://www.gaok.or.kr/gaok/bbs/B0000001/view.do?nttId=14039&searchCnd=&searchWrd=&gubun=&delCode=0&useAt=&replyAt=&menuNo=200019&sdate=&edate=&viewType=&type=&siteId=&option1=&option2=&option5=&pageIndex=1',
            36564656,
            345,
            3,
          );
        }}
        outActID={3}
      />
      <OutdoorCardForm
        outActLike={345}
        outActName="Test1"
        outActView={36564656}
        outActImg="http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg"
        onActClick={() => {
          changePoster(
            'Test1',
            'http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg',
            'https://www.gaok.or.kr/gaok/bbs/B0000001/view.do?nttId=14039&searchCnd=&searchWrd=&gubun=&delCode=0&useAt=&replyAt=&menuNo=200019&sdate=&edate=&viewType=&type=&siteId=&option1=&option2=&option5=&pageIndex=1',
            36564656,
            345,
            4,
          );
        }}
        outActID={4}
      />
      <OutdoorCardForm
        outActLike={345}
        outActName="Test1"
        outActView={36564656}
        outActImg="http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg"
        onActClick={() => {
          changePoster(
            'Test1',
            'http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg',
            'https://www.gaok.or.kr/gaok/bbs/B0000001/view.do?nttId=14039&searchCnd=&searchWrd=&gubun=&delCode=0&useAt=&replyAt=&menuNo=200019&sdate=&edate=&viewType=&type=&siteId=&option1=&option2=&option5=&pageIndex=1',
            36564656,
            345,
            5,
          );
        }}
        outActID={5}
      />
      <OutdoorCardForm
        outActLike={22}
        outActName="Test2"
        outActView={11}
        outActImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU"
        onActClick={() => {
          changePoster(
            'Test2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU',
            'http://naver.com',
            22,
            11,
            6,
          );
        }}
        outActID={6}
      />
      <OutdoorCardForm
        outActLike={345}
        outActName="Test1"
        outActView={36564656}
        outActImg="http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg"
        onActClick={() => {
          changePoster(
            'Test1',
            'http://www.gaok.or.kr/crosseditor_manager/binary/images/202202/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%8B%9C%EB%8F%84%EC%A7%80%EC%82%AC%ED%98%91%EC%9D%98%ED%9A%8C_%EC%A0%9C17%EA%B8%B0_%EC%A7%80%EB%B0%A9%EB%B6%84%EA%B6%8C_%EB%8C%80%ED%95%99%EC%83%9D_%EC%84%9C%ED%8F%AC%ED%84%B0%EC%A6%88_%EC%A7%80%EB%B0%A9%EC%A7%80%EA%B8%B0_%EB%AA%A8%EC%A7%91_%ED%8F%AC%EC%8A%A4%ED%84%B0(%EC%B5%9C%EC%A2%85)_%EC%A0%80.jpg',
            'https://www.gaok.or.kr/gaok/bbs/B0000001/view.do?nttId=14039&searchCnd=&searchWrd=&gubun=&delCode=0&useAt=&replyAt=&menuNo=200019&sdate=&edate=&viewType=&type=&siteId=&option1=&option2=&option5=&pageIndex=1',
            36564656,
            345,
            7,
          );
        }}
        outActID={7}
      />
      <OutdoorCardForm
        outActLike={22}
        outActName="Test2"
        outActView={11}
        outActImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU"
        onActClick={() => {
          changePoster(
            'Test2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU',
            'http://naver.com',
            22,
            11,
            8,
          );
        }}
        outActID={8}
      />
    </Container>
  );
};
