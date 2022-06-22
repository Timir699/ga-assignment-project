import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const CustomCard = ({ name, id }: any) => {
  return (
    <Card
      hoverable
      style={{ maxWidth: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={name} description="www.instagram.com" />
    </Card>
  );
};

export default CustomCard;
