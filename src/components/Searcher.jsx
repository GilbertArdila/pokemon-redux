import {Input} from  'antd';

import React from 'react'

const Searcher = ({value,onChange}) => {
  return (
    <Input.Search
     placeholder='search...' 
     style={{marginBottom: 20}}
     value={value}
     onChange={onChange}
     />
  )
}

export { Searcher}