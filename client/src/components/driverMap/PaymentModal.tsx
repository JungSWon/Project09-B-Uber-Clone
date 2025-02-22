import React from 'react';
import { Modal } from 'antd-mobile';
import { useHistory } from 'react-router-dom';

interface PaymentModalPropsType {
  visible: boolean;
}

const PaymentModal: React.FC<PaymentModalPropsType> = ({ visible }) => {
  const history = useHistory();

  return (
    <Modal
      visible={visible}
      transparent
      maskClosable={false}
      title="승객에게 결제를 요청하세요."
      footer={[
        {
          text: '결제 완료',
          onPress: () => history.push('/driver/main'),
        },
      ]}
    />
  );
};

export default PaymentModal;
