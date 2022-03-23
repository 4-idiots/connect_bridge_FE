import React, { useState, useCallback } from 'react';
import {
  Container,
  Heading,
  Button,
  Box,
  Form,
  Card,
} from 'react-bulma-components';
import styled, { css } from 'styled-components';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './dev/projectQuill';
import 'react-quill/dist/quill.snow.css';
import {
  checekArray,
  onOffArray,
  areaArray,
  platArray,
} from './dev/projectValue';
import { Recruit } from './dev/projectRecruit';

export const ProjectUploadForm = () => {
  const [platform, setPlatform] = useState([]);
  const [member, setMember] = useState([
    { main: '기획', sub: 'UI/UX 기획', need: 1 },
  ]);
  const [postInfo, setPostInfo] = useState({
    radio: true,
    onOff: '온라인/오프라인 모두 가능',
    area: '상관없음',
  });

  const {
    radio,
    title,
    field,
    imgSrc,
    preview,
    onOff,
    area,
    language,
    reference,
    content,
  } = postInfo;

  const onChangeProjectEvent = useCallback(
    e => {
      setPostInfo({
        ...postInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [postInfo],
  );

  const onChangeField = e => {
    setPostInfo({
      ...postInfo,
      field: e.currentTarget.name,
    });
  };

  const onChangeContent = value => {
    setPostInfo({
      ...postInfo,
      content: value,
    });
  };

  const onChangePlatform = e => {
    if (platform.includes(e.currentTarget.name)) {
      const list = [...platform];
      list.splice(platform.indexOf(e.currentTarget.name), 1);
      setPlatform(list);
    } else {
      setPlatform([...platform, e.currentTarget.name]);
    }
  };

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setPostInfo({ ...postInfo, preview: reader.result, imgSrc: fileBlob });
        resolve();
      };
    });
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>모임 생성 하기</Heading>
      <Box style={{ width: '90%', margin: 'auto' }}>
        <Form.Field>
          <Form.Label>* 유형</Form.Label>
          <Form.Control>
            <Form.Radio
              value={radio}
              checked={radio === true}
              onChange={() => {
                setPostInfo({ ...postInfo, radio: true });
              }}
            >
              사이드(토이) 프로젝트
            </Form.Radio>
            <Form.Radio
              value={radio}
              checked={radio === false}
              onChange={() => {
                setPostInfo({ ...postInfo, radio: false });
              }}
            >
              IT 스터디 & 네트워킹
            </Form.Radio>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>* 프로젝트명</Form.Label>
          <Form.Help>
            ! 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다.
          </Form.Help>
          <Form.Control>
            <Form.Input
              placeholder="3~20글자로 적어주세요 ex)승차거부 신고앱"
              value={title || ''}
              name="title"
              onChange={onChangeProjectEvent}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>* 프로젝트 분야</Form.Label>
          <Form.Help>! 아래 분야 중에 한가지를 선택해주세요.</Form.Help>
          <Form.Control>
            <div
              style={{
                width: '100%',
                margin: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {checekArray.map(item => (
                <Customcheckbox
                  checktype="field"
                  key={item}
                  name={item}
                  checked={field === item}
                  onChange={onChangeField}
                >
                  {item}
                </Customcheckbox>
              ))}
            </div>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>* 대표 이미지</Form.Label>
          <Form.Help>! 프로젝트 대표 이미지를 올려주세요.</Form.Help>
          <div style={{ display: 'flex' }}>
            <Card style={{ width: 600 }}>
              {preview ? (
                <Card.Image src={preview} size="2by1" />
              ) : (
                <Card.Image src="" size="2by1" />
              )}
            </Card>
            <div style={{ marginLeft: '3rem' }}>
              <Form.Control>
                <Form.InputFile
                  name="imgSrc"
                  onChange={e => {
                    encodeFileToBase64(e.target.files[0]);
                  }}
                  accept="img/*"
                  label="대표 이미지 올리기"
                  color="info"
                  boxed
                  size="small"
                />
              </Form.Control>
              <Form.Help>
                * 가로/세로의 비율이 2:1일 때 썸네일이 가장 예쁩니다.
              </Form.Help>
              <Form.Help>
                * 저작권에 위배되지 않는 파일만 업로드해주세요.
              </Form.Help>
            </div>
          </div>
        </Form.Field>
        <Form.Field>
          <Form.Label>* 지역</Form.Label>
          <Form.Help>! 온/오프라인 여부와 장소를 선택해주세요.</Form.Help>
          <Form.Control>
            <Form.Select name="onOff" onChange={onChangeProjectEvent}>
              {onOffArray.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
            <Form.Select name="area" onChange={onChangeProjectEvent}>
              {areaArray.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Control>
        </Form.Field>
        <Recruit member={member} setMember={setMember} />
        <Form.Field>
          <Form.Label>* 출시 플랫폼</Form.Label>
          <Form.Help>
            ! 출시 플랫폼은 중복 체크가 가능합니다. (ex: IOS, MAC OS)
          </Form.Help>
          <div
            style={{
              width: '100%',
              margin: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {platArray.map(item => (
              <Customcheckbox
                checktype="platform"
                key={item}
                name={item}
                onChange={onChangePlatform}
                checked={platform.includes(item)}
              >
                {item}
              </Customcheckbox>
            ))}
          </div>
        </Form.Field>
        <Form.Field>
          <Form.Label>* 프로젝트 설명</Form.Label>
          <Form.Help>
            ! 설명이 풍부한 프로젝트는 풍부하지 않은 프로젝트에 비해 지원율리
            50% 높습니다.
          </Form.Help>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={content || ''}
            onChange={onChangeContent}
            placeholder="Write something awesome..."
            modules={modules}
            formats={formats}
          />
        </Form.Field>
        <Form.Field>
          <Form.Label>* 기술/언어 (최대 10개)</Form.Label>
          <Form.Help>
            ! 프로젝트에 적용된/적용하고자 하는 기술/디자인 플랫폼을 적어주세요.
          </Form.Help>
          <Form.Control>
            <Form.Input
              placeholder="ex) java, react, figma, photoshop"
              value={language || ''}
              name="language"
              onChange={onChangeProjectEvent}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>* 참고자료</Form.Label>
          <Form.Help>
            ! 벤치마킹하는 서비스나, 프로젝트를 정리하신 자료의 웹주소를
            등록해주세요.
          </Form.Help>
          <Form.Control>
            <Form.Input
              placeholder="https://4idiot.com"
              value={reference || ''}
              name="reference"
              onChange={onChangeProjectEvent}
            />
          </Form.Control>
        </Form.Field>
      </Box>
      <Button onClick={() => console.log(content)}>test</Button>
    </Container>
  );
};

const Customcheckbox = styled(Form.Checkbox)`
  ${props =>
    props.checktype === 'platform' &&
    css`
      font-size: 1rem;
    `}
  ${props =>
    props.checktype === 'field' &&
    css`
      font-size: 1.3rem;
      width: 12rem;
    `}
  margin: 1rem;
  display: flex;
  text-align: center;
  input[type='checkbox'] {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.6rem;
  }
`;
