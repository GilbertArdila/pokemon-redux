import {Input} from  'antd';

import React from 'react'

const Searcher = () => {
  return (
    <Input.Search placeholder='search...' style={{marginBottom: 20}}/>
  )
}

export { Searcher}