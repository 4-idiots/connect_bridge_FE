import React from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';

export const ProjectCard = () => {
  return (
    <Card style={{ width: 285, position: 'relative', borderRadius: '5%' }}>
      <Card.Image
        size="2by1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU"
      />
      <div
        style={{
          position: 'absolute',
          top: 5,
          left: 10,
          backgroundColor: 'black',
          color: 'white',
          padding: 5,
          fontWeight: 'bold',
        }}
      >
        사이드 프로젝트
      </div>
      <div style={{ position: 'absolute', top: 5, right: 10 }}>
        <Icon>
          <i
            className="fas fa-heart"
            style={{ color: 'white', fontSize: '1.5em' }}
          />
        </Icon>
      </div>
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading subtitle size={6}>
              이커머스
            </Heading>
            <Heading size={5}>웹소설 웹툰 IP 웹 3.0</Heading>
          </Media.Item>
        </Media>
        <Media>
          <Content
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <div>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              4
            </div>
            <div style={{ marginLeft: 'auto', marginRight: '1rem' }}>
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              4
            </div>
          </Content>
        </Media>
        <Media>모집완료 0/3</Media>
      </Card.Content>
    </Card>
  );
};
