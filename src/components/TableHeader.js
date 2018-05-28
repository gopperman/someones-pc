import React from 'react'
import _ from 'lodash'

const TableHeader = ({headers}) => {
  return (
    <thead>
      <tr>
        {headers.map((h, i) =>
          <th key={i}>
            {h.type === 'text' ?
              _.get(h, 'display', '') :
              (<img src={`/img/${_.get(h, 'url', '')}`} alt={`${_.get(h, 'key', '')}`} />)
            }</th>
        )}
      </tr>
    </thead>
  )
}

export default TableHeader
