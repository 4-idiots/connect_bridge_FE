/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import {
  Container,
  Heading,
  Button,
  Box,
  Form,
  Card,
} from 'react-bulma-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const ProjectUploadForm = () => {
  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'align',
    'color',
    'background',
    'image',
  ];

  const [text, setText] = useState('');

  const handleText = value => {
    console.log(value);
    setText(value);
  };

  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>대외 활동 올리기</Heading>
      <Box style={{ width: '90%', margin: 'auto' }}>
        <div id="toolbar">
          <select className="ql-header">
            <option value="1" />
            <option value="2" />
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <select className="ql-color">
            <option value="red" />
            <option value="green" />
            <option value="blue" />
            <option value="orange" />
            <option value="violet" />
            <option value="#d0d1d2" />
            <option selected />
          </select>
          <select className="ql-background" />
          <button className="ql-link" />
          <button className="ql-image" />
        </div>
        <ReactQuill
          modules={modules}
          formats={formats}
          value={text}
          onChange={handleText}
        />
      </Box>
    </Container>
  );
};
