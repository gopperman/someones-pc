import React from 'react'
import _ from 'lodash'
import TableHeader from './TableHeader.js'

const Table = ({headers, data}) => {
  return (
    <table className="pkmnList">
      <TableHeader headers={headers} />
      <tbody>
        {data.map((d,i) => {
          return (
            <tr className="pkmnList__row" key={i}>
              {headers.map((h,j) => {
                const displayType = _.get(h, 'displayType', ''),
                  key = _.get(h, 'key', ''),
                  classes = `pkmnList__cell ${(h.type === 'ball') ? 'pkmnList__cell--ball' : ''}`

                return (
                  <td key={j} className={classes}>
                   {displayType === 'image' ?
                    (<img src={`/img/${_.get(d, key, '')}`} alt={key} />) :
                      (_.get(d, h.key, ''))
                    }
                  </td>
                )
              })}
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}

 // #TODO: PropTypes
export default Table
