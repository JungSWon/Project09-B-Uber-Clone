import React, { useState } from 'react';
import styled from 'styled-components';
import { InputItem, Button, Icon } from 'antd-mobile';
import { InputPhoneProps } from '@custom-types';

const InputPhoneNum: React.FC<InputPhoneProps> = (props) => {
  const handleChange = (v: string) => {
    props.setPhone(v);
    if (v.length === 13) setDisabled(false);
    else setDisabled(true);
  };
  const [isDisabled, setDisabled] = useState(true);
  return (
    <Div style={{ display: props.page === 0 ? 'flex' : 'none' }}>
      <InputGroup>
        <p>
          <img src="https://img.icons8.com/ios-filled/48/000000/phone.png" />
        </p>
        <InputItem
          type="phone"
          clear
          placeholder="전화번호를 입력해주세요"
          value={props.phone}
          onChange={handleChange}
        />
      </InputGroup>
      <Button onClick={props.setNextPage} disabled={isDisabled}>
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

export default InputPhoneNum;
