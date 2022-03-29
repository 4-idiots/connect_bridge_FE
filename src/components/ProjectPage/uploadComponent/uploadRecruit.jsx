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
  // 옛날에 짠 인원제한 체크 함수 = 잘 안됨
  // const [full, setFull] = useState(1);
  // const checkMem = () => {
  //   let memVal = 0;
  //   member.projectTotal.map(item => {
  //     memVal += item.need;
  //     return setFull(memVal);
  //   });
  // };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...member.projectTotal];
    list[index][name] = value;
    setMember({ ...member, projectTotal: list });
  };

  const handleNeedPlus = (ne, index) => {
    const list = [...member.projectTotal];
    list[index][ne] = member.projectTotal[index][ne] + 1;
    setMember({ ...member, projectTotal: list });
  };

  const handleNeedMinus = (ne, index) => {
    if (member.projectTotal[index][ne] === 1) {
      // pass
    } else {
      const list = [...member.projectTotal];
      list[index][ne] = member.projectTotal[index][ne] - 1;
      setMember({ ...member, projectTotal: list });
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
        { main: '기획', sub: 'UI/UX 기획', need: 1 },
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

  return (
    <Form.Field>
      <Form.Label>* 모집인원</Form.Label>
      <Form.Help>
        ! 최대 9명까지 모집이 가능하며, 3~4명을 추천합니다.(나중에 변경/추가가
        가능합니다.)
      </Form.Help>
      <Form.Control>
        {member.projectTotal.map((m, index) => {
          return (
            <div key={index} style={{ display: 'flex' }}>
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
                <Icon onClick={() => handleNeedPlus('need', index)}>
                  <i className="fas fa-plus" />
                </Icon>
                {m.need}
                <Icon onClick={() => handleNeedMinus('need', index)}>
                  <i className="fas fa-minus" />
                </Icon>
              </div>

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
