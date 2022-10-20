import React from 'react';
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StratButton = ({isFavorite,onClick}) => {
    const Icon=isFavorite ? StarFilled:StarOutlined
  return <Button icon={<Icon/>} onClick={onClick}/>
  
}

export  {StratButton}