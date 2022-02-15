import React, { useState } from 'react';
import { Button } from 'react-bulma-components';
import { OutdoorModalForm } from './outdoorModalModule';

export const OutdoorMainForm = () => {
  const [tte, setTte] = useState(false);
  const [poster, setPoster] = useState({});

  const { check, title, image, link } = poster;

  const changePoster = (ti, im, li) => {
    setPoster({ ...poster, check: !check, title: ti, image: im, link: li });
  };

  const testModal = () => {
    setTte(!tte);
  };

  return (
    <>
      {check && (
        <OutdoorModalForm
          close={() => {
            changePoster('', '', '');
          }}
          title={title}
          image={image}
          link={link}
        />
      )}
      <Button
        color="danger"
        onClick={() => {
          changePoster(
            'Test1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj0imqukWmBbCZxUZqpqHrIixs71sVj7k-g&usqp=CAU',
            'https://www.naver.com',
          );
        }}
      >
        Test1
      </Button>
      <Button
        color="danger"
        onClick={() => {
          changePoster(
            'Test2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU',
            'https://google.com',
          );
        }}
      >
        Test2
      </Button>
    </>
  );
};
