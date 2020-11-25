import React from 'react';
import styled from 'styled-components';
import AuthButtonGroup from '../../components/UserAuthPage/AuthButtonGroup';

const UserAuthPage: React.FC = () => {
  return (
    <Div>
      <H1>자버택시</H1>
      <div>
        <p>안녕하세요,</p>
        <p>운전대 잡으려면 로그인 해주세요.</p>
      </div>
      <AuthButtonGroup who={'driver'} />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border: 1px solid;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export default UserAuthPage;
