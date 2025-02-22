import React from 'react';
import styled from 'styled-components';
import Loading from '@components/common/Loading';

const Matching: React.FC = () => {
  return (
    <BackgroundDiv>
      <Loading size={20} color={'#f3f3f3'} />
      <TextWrap>드라이버를 찾는 중입니다..</TextWrap>
    </BackgroundDiv>
  );
};

const BackgroundDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  border-radius: 50px;
  background-color: #181818;
`;

const TextWrap = styled.span`
  margin-left: 15px;
  color: #f3f3f3;
`;

export default Matching;
