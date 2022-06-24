import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const CustomCard = ({ name, id, members, image }: any) => {

  return (
    <Card
      hoverable
      style={{ maxWidth: 240 }}
      cover={<img alt="example" src={image} />}
    >
      <h2 className="text-2xl">Name : {name}</h2>
      <h2 className="text-xl">Members : {members}</h2>
    </Card>
  );
};

export default CustomCard;
