import React from 'react'
import _concat from 'lodash/concat'
import Tags from './components/tag'
import styles from './datatable.module.scss'
import DateFomate from './components/date'
import Link from './components/link'
import Type from './components/type'
import Status from './components/status'
import State from './components/workflow'
import NameWorkflow from './components/workflow'
import Owner from './components/owner'
import Profile from './components/profile'
import OrderStatus from './components/orderstatus'
import OrderSummary from './components/ordersummary'
import Bool from './components/bool'
import Stock from './components/stock'
import SearchTerm from './components/searchterm'
import ObjectKey from './components/object'
import Synonyms from './components/synonyms'

const serializeColumns = (columns, onRowAction) => {
  //columns = [{},{},{}]
  columns.map(function (column) {
    if (column?.key !== 'skuListSort') {
      column.dataIndex = column?.id
      column.key = column?.id
      column.ellipsis = true
      column.sorter = false
      column.width = column?.width || 200
      if (column?.fixed) {
        let fixed = column?.fixed
        column.fixed = fixed
      }

      column.render = (data, row, dataIndex) => {
        let dataType = <span className={styles.text}>{data}</span>

        if (column?.isArray) {
          let name = column?.name
          let dataLocal = row
          for (let item in name) {
            if (dataLocal[name[item]]) {
              dataLocal = dataLocal[name[item]]
            }
          }
          if (typeof dataLocal === 'string') {
            dataType = <span className={styles.text}>{dataLocal}</span>
          } else if (typeof dataLocal === 'boolean') {
            data = dataLocal
          }
        }

        if (column.widget === 'link') {
          dataType = (
            <Link
              data={data}
              row={row}
              onRowAction={onRowAction}
              applyLinkstyles={column?.applyLinkstyles}
              column={column}
            />
          )
        } else if (column.widget === 'tag') {
          dataType = <Tags data={data} row={row} />
        } else if (column.widget === 'date') {
          dataType = <DateFomate data={data} row={row} />
        } else if (column.widget === 'workflow') {
          dataType = <State data={data} row={row} />
        } else if (column.widget === 'nameworkflow') {
          dataType = <NameWorkflow data={data} row={row} />
        } else if (column.widget === 'owner') {
          dataType = <Owner data={data} row={row} />
        } else if (column.widget === 'searchTerm') {
          dataType = (
            <SearchTerm
              onRowAction={onRowAction}
              keyName={column?.keyName}
              data={data}
              row={row}
            />
          )
        } else if (column.widget === 'object') {
          dataType = (
            <ObjectKey keyName={column?.keyName} data={data} row={row} />
          )
        } else if (column.widget === 'synonyms') {
          dataType = (
            <Synonyms keyName={column?.keyName} data={data} row={row} />
          )
        } else if (column.widget === 'status') {
          dataType = (
            <Status
              custom={column?.custom ? column?.custom : 'default'}
              data={data}
              row={row}
            />
          )
        } else if (column.widget === 'type') {
          dataType = <Type data={data} row={row} />
        } else if (column.widget === 'profile') {
          dataType = <Profile data={data} row={row} />
        } else if (column.widget === 'orderstatus') {
          dataType = <OrderStatus data={data} row={row} />
        } else if (column.widget === 'ordersummary') {
          dataType = <OrderSummary data={data} row={row} />
        } else if (column.widget === 'bool') {
          dataType = (
            <Bool
              data={data}
              noKey={column?.noKey}
              yesKey={column?.yesKey}
              row={row}
            />
          )
        } else if (column.widget === 'stock') {
          dataType = <Stock data={data} row={row} />
        }

        return dataType
      }
    }
    return column
  })
  return columns
}

function columnsAdd (allcolumns, columnList) {
  columnList = columnList.map(function (colObject, index) {
    return colObject
  })
  return _concat(allcolumns, columnList)
}

export { columnsAdd, serializeColumns }
