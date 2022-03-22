/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Form, Button } from 'react-bulma-components';
import {
  mainArray,
  planArray,
  frontArray,
  designArray,
  backArray,
  coopArray,
  etcArray,
} from './projectValue';

export const Recruit = () => {
  const [member, setMember] = useState([{ main: '기획', sub: 'UI/UX 기획' }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...member];
    list[index][name] = value;
    setMember(list);
  };

  const handleRemove = index => {
    const list = [...member];
    list.splice(index, 1);
    setMember(list);
  };

  const handleAdd = () => {
    if (member.length > 8) {
      alert('추가할 수 없습니다.');
    } else {
      setMember([...member, { main: '기획', sub: 'UI/UX 기획' }]);
    }
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

  return (
    <Form.Field>
      <Form.Label>* 모집인원</Form.Label>
      <Form.Help>
        ! 최대 9명까지 모집이 가능하며, 3~4명을 추천합니다.(나중에 변경/추가가
        가능합니다.)
      </Form.Help>
      <Form.Control>
        {member.map((m, index) => {
          return (
            <div key={index}>
              <Form.Select
                name="main"
                onChange={e => handleInputChange(e, index)}
              >
                {genOption(mainArray)}
              </Form.Select>
              <Form.Select
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

              <div>
                {member.length - 1 === index && (
                  <Button color="info" onClick={handleAdd}>
                    추가
                  </Button>
                )}
                {member.length !== 1 && (
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
