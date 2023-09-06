import React, { useState, useEffect } from 'react'
import { Table, Tag } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { DndContext } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function App () {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(data => {
        for (let obj of data) {
          obj['key'] = obj['id']
        }
        console.log('data...', data)

        setDataSource(data)
      })
      .catch(err => console.log('error..', err))
      .finally(() => setLoading(false))
  }, [])

  const columns = [
    {
      key: 'sort'
    },
    {
      title: 'ID ',
      dataIndex: 'id',
      // key: 'id',
      sorter: (a, b) => {
        return a.id - b.id
      }
    },
    {
      title: 'UserId ',
      dataIndex: 'userId'
      // key: 'userId'
    },
    {
      title: 'Title',
      dataIndex: 'title'
      // key: 'title'
    },
    {
      title: 'Status',
      dataIndex: 'completed',
      // key: 'completed',
      render: completed =>
        completed ? (
          <Tag color={'green'}>Complete</Tag>
        ) : (
          <Tag color={'yellow'}>In Progress</Tag>
        )
    }
  ]

  const Row = ({ children, ...props }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      setActivatorNodeRef,
      transform,
      transition,
      isDragging
    } = useSortable({
      id: props['data-row-key']
    })

    const style = {
      ...props.style,
      transform: CSS.Transform.toString(
        transform && { ...transform, scaleY: 1 }
      ),
      transition,
      ...(isDragging ? { position: 'relative', zIndex: 9999 } : {})
    }

    return (
      <tr {...props} ref={setNodeRef} style={style} {...attributes}>
        {React.Children.map(children, child => {
          if (child.key === 'sort') {
            return React.cloneElement(child, {
              children: (
                <MenuOutlined
                  ref={setActivatorNodeRef}
                  style={{
                    touchAction: 'none',
                    cursor: 'move'
                  }}
                  {...listeners}
                />
              )
            })
          }
          return child
        })}
      </tr>
    )
  }

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setDataSource(previous => {
        const activeIndex = previous.findIndex(i => i.key === active.id)
        const overIndex = previous.findIndex(i => i.key === over.id)
        return arrayMove(previous, activeIndex, overIndex)
      })
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
          <SortableContext
            items={dataSource.map(i => i.key)}
            strategy={verticalListSortingStrategy}
          >
            <Table
              loading={loading}
              dataSource={dataSource}
              columns={columns}
              components={{ body: { row: Row } }}
              rowKey='key'
              pagination={false}
            ></Table>
          </SortableContext>
        </DndContext>
      </header>
    </div>
  )
}

export default App
