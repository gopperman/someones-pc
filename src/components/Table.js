import React from 'react'
import _ from 'lodash'


const Table = ({headers, data}) => {
  return (
    <table className="pkmnList container">
      <thead>
        <tr>
          {headers.map((h, i) =>
            <th key={i}>
              {h.type === 'text' ?
                _.get(h, 'display', '') :
                (<img src={`/img/${_.get(h, 'display', '')}`} alt={`${_.get(h, 'key', '')}`} />)
              }</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((d,i) =>
          <tr key={i}>
            {headers.map((h,j) => {
              const displayType = _.get(h, 'displayType', ''),
                key = _.get(h, 'key', '')

              console.log(d)
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
