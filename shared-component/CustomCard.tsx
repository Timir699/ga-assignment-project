import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const CustomCard = ({ name, id, members, image, ManagerName, TeamCount }: any) => {

  return (
    <Card
      hoverable
      style={{ maxWidth: 240 }}
      cover={<img alt="example" src={image} />}
    >
      <h2 className="text-2xl">Name : {name}</h2>
      {members ? <h2 className="text-xl">Members : {members}</h2> : null}
      {ManagerName ? <h2 className="text-xl">Manager Name : {ManagerName}</h2> : null}
      {TeamCount ? <h2 className="text-xl">Team Count : {TeamCount}</h2> : null}
    </Card>
  );
};

export default CustomCard;
