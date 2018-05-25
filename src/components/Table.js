import React from 'react'
import _ from 'lodash'


const Table = ({headers, data}) => {
  return (
    <table className="pkmnList">
      <thead>
        {headers.map((h) =>
          <th>
            {h.type === 'text' ?
              _.get(h, 'display', '') :
              (<img src={`img/${_.get(h, 'display', '')}`} alt={`${_.get(h, 'key', '')}`} />)
            }</th>
        )}
      </thead>
      <tbody>
        {data.map((d) =>
          <tr>
            {headers.map((h) => {
              const displayType = _.get(d, displayType, '')
              return (<th>
               {displayType === 'image' ?
                (<img src={`img/${_.get(h, 'display', '')}`} alt={`${_.get(h, 'key', '')}`} />) :
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
