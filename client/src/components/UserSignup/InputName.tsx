import React from 'react';
import styled from 'styled-components';
import { InputItem, Button, Icon } from 'antd-mobile';
import { InputNameProps } from '../../types';

const InputName: React.FC<InputNameProps> = (props) => {
  const handleChange = (v: any) => props.setName(v);

  return (
    <Div style={{ display: props.displayNo === 1 ? 'flex' : 'none' }}>
      <InputGroup>
        <p>
          <img src="https://img.icons8.com/ios-filled/48/000000/autograph.png" />
        </p>
        <InputItem clear placeholder="이름을 입력해주세요" value={props.name} onChange={handleChange} />
      </InputGroup>
      <Button onClick={props.setDisplayNext}>
        다음 <Icon type="right" style={{ verticalAlign: 'middle' }} />
      </Button>
    </Div>
  );
};

const InputGroup = styled.div`
  margin: 0 5%;
`;

const Div = styled.div`
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export default InputName;
