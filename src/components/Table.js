import React from 'react'
import _ from 'lodash'
import TableHeader from './TableHeader.js'

const Table = ({headers, data}) => {
  return (
    <table className="pkmnList container">
      <TableHeader headers={headers} />
      <tbody>
        {data.map((d,i) =>
          <tr key={i}>
            {headers.map((h,j) => {
              const displayType = _.get(h, 'displayType', ''),
                key = _.get(h, 'key', '')

              return (<th key={j}>
               {displayType === 'image' ?
                (<img src={`/img/${_.get(d, key, '')}`} alt={key} />) :
                  (_.get(d, h.key, ''))
                }
              </th>)
            })}
          </tr>
        )
        }
      </tbody>
    </table>
  )
}

 // #TODO: PropTypes
export default Table
