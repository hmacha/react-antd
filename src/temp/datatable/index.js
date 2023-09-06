import React from 'react'
import { Table } from '../lib'
// import { Table } from '../../lib'
import { Resizable } from 'react-resizable'
import { serializeColumns, columnsAdd } from './utils'
import styles from './datatable.module.scss'

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props
  if (!width) {
    return <th {...restProps} />
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  )
}

class ArcDataTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pagination: false,
      hasData: true,
      top: 'none',
      bottom: 'bottomRight',
      columns: serializeColumns(this.props.data.columns, props.onRowAction),
      selectedRowKeys: []
    }

    this.defaultProps = {
      rowSelection: props.rowSelection ? props.rowSelection : true
    }
  }

  components = {
    ...this.props.components,
    header: {
      cell: ResizeableTitle
    }
  }

  handleResize =
    index =>
    (e, { size }) => {
      this.setState(({ columns }) => {
        const nextColumns = [...columns]
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width
        }
        return { columns: nextColumns }
      })
    }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  //   let colHeader = serializeColumns(this.props.expandable.columns).map(
  //     (col, index) => ({
  //       ...col,
  //       onHeaderCell: (column) => ({
  //         width: column.width,
  //         onResize: this.handleResize(index),
  //       }),
  //       title: () => (
  //         <div>
  //           <span className={styles.displayName}>{col["displayName"]}</span>
  //         </div>
  //       ),
  //     })
  //   );

  //   return (
  //     <Table
  //       showHeader={this.props.expandable.showHeader}
  //       columns={colHeader}
  //       dataSource={this.props.expandable.rows}
  //       pagination={false}
  //     />
  //   );
  // };

  render () {
    const { columns, selectedRowKeys, ...state } = this.state
    const {
      data,
      onRow,
      customColumns,
      height,
      overflow,
      rowKey,
      pagination = false
    } = this.props

    console.log('render....rowKey...', rowKey)
    let colHeader = columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index)
      }),
      title: () => (
        <div>
          <span className={styles.displayName}>{col['displayName']}</span>
        </div>
      )
    }))

    if (customColumns) {
      colHeader = columnsAdd(colHeader, customColumns)
    }

    return (
      <div className={styles.dataWrapper}>
        <Table
          {...this.state}
          rowKey={rowKey ? rowKey : 'id'}
          pagination={pagination}
          expandable={this.props.expandble}
          columns={colHeader} //columns
          dataSource={state.hasData ? data.rows : null} //rows
          components={this.components}
          rowSelection={this.props.rowSelection}
          onRow={(record, index) => ({
            onClick: () => {
              onRow ? onRow(record, index) : (this.onRow = () => {})
            }
          })}
          scroll={{
            x: 'max-content',
            y: height
              ? height
              : `calc(100vh - ${overflow ? overflow : '57.5vh'} )`
          }}
        />
      </div>
    )
  }
}

export default ArcDataTable
